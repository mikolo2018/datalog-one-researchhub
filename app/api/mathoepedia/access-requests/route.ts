import { randomBytes } from 'crypto';
import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';

const clean = (value: unknown, max = 300) => String(value ?? '').trim().replace(/[<>]/g, '').slice(0, max);
const allowed = <T extends string>(value: unknown, values: readonly T[], fallback: T) => values.includes(value as T) ? value as T : fallback;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit a valid request.' }, { status: 400 });
  }

  if (clean(body.website, 20)) {
    return NextResponse.json({ ok: true, reference: 'MAT-RECEIVED', message: 'Your request has been received.' }, { status: 201 });
  }

  const requestType = allowed(body.requestType, ['access_code', 'subscription'] as const, 'access_code');
  const applicantType = allowed(body.applicantType, ['teacher', 'institution'] as const, 'teacher');
  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 30);
  const institutionName = clean(body.institutionName, 180);
  const roleTitle = clean(body.roleTitle, 100);
  const message = clean(body.message, 1200);
  const plan = requestType === 'subscription' ? allowed(body.plan, ['teacher', 'institution'] as const, 'teacher') : null;
  const billingCycle = requestType === 'subscription' ? allowed(body.billingCycle, ['monthly', 'termly', 'annual'] as const, 'termly') : null;
  const estimated = Number(body.estimatedLearners);
  const estimatedLearners = Number.isFinite(estimated) && estimated > 0 ? Math.min(100000, Math.round(estimated)) : null;

  if (fullName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 7) {
    return NextResponse.json({ error: 'Enter your name, a valid email address and a reachable phone number.' }, { status: 400 });
  }

  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'The access-request service is temporarily unavailable.' }, { status: 503 });

  const since = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  const { data: recent } = await db.from('matho_access_requests').select('reference').eq('email', email).eq('request_type', requestType).gte('created_at', since).order('created_at', { ascending: false }).limit(1).maybeSingle();
  if (recent?.reference) {
    return NextResponse.json({ ok: true, reference: recent.reference, message: 'We already received this request and will contact you after review.' });
  }

  const reference = 'MAT-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + randomBytes(3).toString('hex').toUpperCase();
  const { error } = await db.from('matho_access_requests').insert({
    reference,
    request_type: requestType,
    applicant_type: applicantType,
    full_name: fullName,
    email,
    phone,
    institution_name: institutionName || null,
    role_title: roleTitle || null,
    plan,
    billing_cycle: billingCycle,
    estimated_learners: estimatedLearners,
    message: message || null,
    status: 'pending',
  });

  if (error) return NextResponse.json({ error: 'We could not save the request. Please try again shortly.' }, { status: 500 });

  return NextResponse.json({
    ok: true,
    reference,
    message: requestType === 'access_code'
      ? 'Datalog ICT will verify your details and send the teacher access key through your confirmed contact.'
      : 'Datalog ICT will contact you with the applicable subscription, payment and activation details.',
  }, { status: 201, headers: { 'cache-control': 'no-store' } });
}
