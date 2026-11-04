import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { getCatalogItem } from '@/lib/catalog';
import { getPaystackSecret, paystackRequest } from '@/lib/paystack';

const planEnv: Record<string, string | undefined> = {
  'student-membership': process.env.PAYSTACK_PLAN_STUDENT,
  'researcher-membership': process.env.PAYSTACK_PLAN_RESEARCHER,
  'professional-membership': process.env.PAYSTACK_PLAN_PROFESSIONAL,
  'mathoepedia-teacher': process.env.PAYSTACK_PLAN_STUDENT,
  'mathoepedia-institution': process.env.PAYSTACK_PLAN_PROFESSIONAL,
};

function clean(value: unknown, max = 160) { return String(value || '').trim().slice(0, max); }

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Submit valid checkout details.' }, { status: 400 }); }
  const item = getCatalogItem(clean(body.itemSlug, 80));
  if (!item) return NextResponse.json({ error: 'The selected item is unavailable.' }, { status: 400 });
  const email = clean(body.email, 180).toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  if (!getPaystackSecret()) return NextResponse.json({ error: 'Online payment is temporarily unavailable. Please contact Datalog ICT.' }, { status: 503 });

  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'The payment ledger is temporarily unavailable.' }, { status: 503 });
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase?.auth.getUser() || { data: { user: null } };
  const amount = item.priceNaira * 100;
  const reference = `DATALOG-${Date.now()}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const metadata: Record<string, unknown> = {
    item_slug: item.slug,
    item_name: item.name,
    item_kind: item.kind,
    user_id: user?.id || null,
    customer_name: clean(body.customerName),
    phone: clean(body.phone, 40),
    referral_code: clean(body.referralCode, 30),
  };

  const serviceOrderNumber = clean(body.serviceOrderNumber, 80);
  if (serviceOrderNumber) {
    const { data: serviceOrder } = await db.from('service_orders').select('order_number,service_slug,customer_email').eq('order_number', serviceOrderNumber).maybeSingle();
    if (!serviceOrder || serviceOrder.service_slug !== item.slug || serviceOrder.customer_email.toLowerCase() !== email) return NextResponse.json({ error: 'The service order could not be verified.' }, { status: 403 });
    metadata.service_order_number = serviceOrder.order_number;
  }

  const mathoAccessReference = clean(body.mathoAccessReference, 80);
  if (mathoAccessReference) {
    const { data: accessRequest } = await db.from('matho_access_requests').select('id,reference,email,plan,request_type').eq('reference', mathoAccessReference).maybeSingle();
    const expectedPlan = item.slug === 'mathoepedia-teacher' ? 'teacher' : item.slug === 'mathoepedia-institution' ? 'institution' : '';
    if (!accessRequest || accessRequest.request_type !== 'subscription' || accessRequest.plan !== expectedPlan || accessRequest.email.toLowerCase() !== email) return NextResponse.json({ error: 'The Mathoepedia subscription request could not be verified.' }, { status: 403 });
    metadata.matho_request_id = accessRequest.id;
    metadata.matho_access_reference = accessRequest.reference;
  }

  const plan = item.recurring ? clean(planEnv[item.slug], 120) : '';
  if (item.recurring && !plan) return NextResponse.json({ error: 'This subscription plan is not yet configured in Paystack.' }, { status: 503 });
  if (plan) metadata.paystack_plan_code = plan;
  const { error: ledgerError } = await db.from('payments').insert({ user_id: user?.id || null, reference, amount_kobo: amount, purpose: item.kind, status: 'pending', metadata });
  if (ledgerError) return NextResponse.json({ error: 'Unable to create the payment record.' }, { status: 500 });

  const origin = (process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin).replace(/\/$/, '');
  const payload: Record<string, unknown> = { email, amount, reference, metadata, callback_url: `${origin}/checkout?reference=${encodeURIComponent(reference)}` };
  if (plan) payload.plan = plan;
  try {
    const { response, result } = await paystackRequest('/transaction/initialize', { method: 'POST', body: JSON.stringify(payload) });
    if (!response.ok || !result.status) {
      await db.from('payments').update({ status: 'failed', failure_reason: clean(result.message, 300) || 'Payment initialization failed.' }).eq('reference', reference);
      return NextResponse.json({ error: result.message || 'Payment initialization failed.' }, { status: 400 });
    }
    return NextResponse.json({ ok: true, ...result.data });
  } catch {
    await db.from('payments').update({ status: 'failed', failure_reason: 'Unable to reach Paystack.' }).eq('reference', reference);
    return NextResponse.json({ error: 'Unable to connect to Paystack. Please try again.' }, { status: 502 });
  }
}
