import 'server-only';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';

type PaystackData = Record<string, any>;

export function getPaystackSecret() {
  const secret = String(process.env.PAYSTACK_SECRET_KEY || '').trim();
  return /^sk_(test|live)_[A-Za-z0-9]+$/.test(secret) ? secret : '';
}

export async function paystackRequest(path: string, init: RequestInit = {}) {
  const secret = getPaystackSecret();
  if (!secret) throw new Error('PAYSTACK_NOT_CONFIGURED');
  const response = await fetch(`https://api.paystack.co${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
    cache: 'no-store',
  });
  const result = await response.json().catch(() => ({ status: false, message: 'Invalid Paystack response.' }));
  return { response, result };
}

function subscriptionCode(data: PaystackData) {
  return String(data?.subscription?.subscription_code || data?.subscription_code || '').trim() || null;
}

function nextCharge(data: PaystackData) {
  return data?.subscription?.next_payment_date || data?.next_payment_date || data?.next_charge_date || null;
}

function planCode(data: PaystackData) {
  return String(data?.plan?.plan_code || data?.plan_code || '').trim() || null;
}

async function updateMathoSubscription(subscription: PaystackData, status: string) {
  const db = createSupabaseAdminClient();
  if (!db) return;
  const code = String(subscription?.subscription_code || subscription?.subscription?.subscription_code || '').trim();
  if (!code) return;
  let { data: row } = await db.from('subscriptions').select('id,request_id').eq('provider_subscription_code', code).maybeSingle();
  if (!row) {
    const customer = String(subscription?.customer?.customer_code || '').trim();
    const plan = planCode(subscription);
    if (customer && plan) {
      const fallback = await db.from('subscriptions').select('id,request_id').eq('provider_customer_code', customer).eq('provider_plan_code', plan).maybeSingle();
      row = fallback.data;
      if (row?.id) await db.from('subscriptions').update({ provider_subscription_code: code }).eq('id', row.id);
    }
  }
  await db.from('subscriptions').update({ status, next_charge_at: nextCharge(subscription) }).eq('provider_subscription_code', code);
  if (!row?.request_id) return;
  await db.from('matho_access_requests').update({ subscription_status: status }).eq('id', row.request_id);
  if (status === 'active') {
    await db.from('matho_teacher_access').update({ status: 'active', expires_at: new Date(Date.now() + 35 * 86400000).toISOString(), updated_at: new Date().toISOString() }).eq('request_id', row.request_id);
  } else {
    await db.from('matho_teacher_access').update({ status: status === 'cancelled' ? 'revoked' : 'suspended', updated_at: new Date().toISOString() }).eq('request_id', row.request_id);
  }
}

export async function processSuccessfulCharge(data: PaystackData) {
  const db = createSupabaseAdminClient();
  if (!db) return { ok: false, error: 'Database unavailable.' };
  const reference = String(data?.reference || '').trim();
  const amount = Number(data?.amount || 0);
  const currency = String(data?.currency || '').toUpperCase();
  const code = subscriptionCode(data);
  let { data: payment } = await db.from('payments').select('id,user_id,reference,amount_kobo,status,metadata,purpose').eq('reference', reference).maybeSingle();

  if (!payment && code) {
    const { data: renewal } = await db.from('subscriptions').select('id,user_id,plan,request_id').eq('provider_subscription_code', code).maybeSingle();
    if (renewal) {
      const { data: created } = await db.from('payments').insert({
        user_id: renewal.user_id,
        reference,
        amount_kobo: amount,
        currency,
        purpose: 'subscription_renewal',
        status: 'success',
        paid_at: data?.paid_at || new Date().toISOString(),
        provider_transaction_id: data?.id || null,
        channel: data?.channel || null,
        metadata: { item_slug: renewal.plan, item_name: renewal.plan, item_kind: renewal.request_id ? 'mathoepedia' : 'membership', matho_request_id: renewal.request_id, renewal: true },
      }).select('id,user_id,reference,amount_kobo,status,metadata,purpose').single();
      payment = created || null;
      await updateMathoSubscription(data, 'active');
    }
  }

  if (!payment) return { ok: false, error: 'Payment reference was not found.' };
  const metadata = (payment.metadata || {}) as PaystackData;
  if (amount !== Number(payment.amount_kobo) || currency !== 'NGN') {
    await db.from('payments').update({ status: 'failed', failure_reason: 'Amount or currency mismatch', metadata: { ...metadata, received_amount_kobo: amount, received_currency: currency } }).eq('id', payment.id);
    return { ok: false, error: 'Payment amount verification failed.' };
  }

  const paidAt = data?.paid_at || new Date().toISOString();
  await db.from('payments').update({
    status: 'success',
    paid_at: paidAt,
    provider_transaction_id: data?.id || null,
    channel: data?.channel || null,
    failure_reason: null,
    metadata: { ...metadata, paystack_customer: data?.customer?.customer_code || null, authorization_code: data?.authorization?.authorization_code || null },
  }).eq('id', payment.id);

  if (!metadata.renewal) {
    const orderNumber = `DLG-${reference.slice(-10)}`;
    await db.from('commerce_orders').upsert({
      user_id: payment.user_id,
      order_number: orderNumber,
      payment_id: payment.id,
      item_slug: metadata.item_slug,
      item_name: metadata.item_name,
      item_kind: metadata.item_kind,
      total_kobo: payment.amount_kobo,
      status: 'paid',
      customer_email: data?.customer?.email,
      customer_name: metadata.customer_name,
      phone: metadata.phone,
    }, { onConflict: 'payment_id' });
  }

  if (payment.user_id && ['digital_product', 'course', 'diagnostic', 'topic_pack', 'membership', 'mathoepedia'].includes(metadata.item_kind)) {
    await db.from('entitlements').upsert({ user_id: payment.user_id, item_slug: metadata.item_slug, item_kind: metadata.item_kind, status: 'active', source_payment_id: payment.id }, { onConflict: 'user_id,item_slug' });
  }
  if (payment.user_id && metadata.item_kind === 'course') {
    await db.from('course_enrollments').upsert({ user_id: payment.user_id, course_slug: metadata.item_slug, status: 'active', payment_id: payment.id }, { onConflict: 'user_id,course_slug' });
  }
  if (metadata.service_order_number) {
    await db.from('service_orders').update({ payment_id: payment.id, payment_status: 'paid', deposit_paid_at: paidAt, status: 'reviewing', updated_at: new Date().toISOString() }).eq('order_number', metadata.service_order_number);
  }
  if (metadata.matho_request_id) {
    await db.from('matho_access_requests').update({ payment_id: payment.id, paid_at: paidAt, status: 'approved', subscription_status: 'active', reviewed_at: new Date().toISOString() }).eq('id', metadata.matho_request_id);
  }

  if (['membership', 'mathoepedia'].includes(metadata.item_kind)) {
    const values = {
      user_id: payment.user_id,
      request_id: metadata.matho_request_id || null,
      plan: metadata.item_slug,
      status: 'active',
      starts_at: paidAt,
      provider_subscription_code: code,
      provider_customer_code: data?.customer?.customer_code || null,
      provider_plan_code: metadata.paystack_plan_code || planCode(data),
      next_charge_at: nextCharge(data),
      source_payment_id: payment.id,
    };
    const existing = metadata.matho_request_id
      ? await db.from('subscriptions').select('id').eq('request_id', metadata.matho_request_id).maybeSingle()
      : payment.user_id ? await db.from('subscriptions').select('id').eq('user_id', payment.user_id).eq('plan', metadata.item_slug).maybeSingle() : { data: null };
    if (existing.data?.id) await db.from('subscriptions').update(values).eq('id', existing.data.id);
    else await db.from('subscriptions').insert(values);
  }

  return { ok: true, status: 'success', itemName: metadata.item_name, itemKind: metadata.item_kind };
}

export async function processPaystackEvent(event: PaystackData) {
  if (event?.event === 'charge.success') return processSuccessfulCharge(event.data || {});
  if (event?.event === 'invoice.payment_failed') {
    await updateMathoSubscription(event.data || {}, 'attention');
    return { ok: true, status: 'attention' };
  }
  if (event?.event === 'subscription.disable' || event?.event === 'subscription.not_renew') {
    await updateMathoSubscription(event.data || {}, 'cancelled');
    return { ok: true, status: 'cancelled' };
  }
  if (event?.event === 'subscription.create') {
    await updateMathoSubscription(event.data || {}, 'active');
    return { ok: true, status: 'active' };
  }
  return { ok: true, ignored: true };
}
