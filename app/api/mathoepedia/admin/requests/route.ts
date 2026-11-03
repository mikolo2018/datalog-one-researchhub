import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { clean, randomCode, tokenHash, validAdminKey } from '@/lib/mathoepedia-quiz-security';

const requestFields = 'id,reference,request_type,applicant_type,full_name,email,phone,institution_name,role_title,plan,billing_cycle,estimated_learners,message,status,decision_note,created_at,reviewed_at';

export async function POST(request: Request) {
  const body = await request.json();
  if (!validAdminKey(body.adminKey)) return NextResponse.json({ error: 'Administrator key is incorrect.' }, { status: 401 });
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Administration database is unavailable.' }, { status: 503 });

  const filter = clean(body.filter, 20);
  let query = db.from('matho_access_requests').select(requestFields).order('created_at', { ascending: false }).limit(300);
  if (filter && filter !== 'all') query = query.eq('status', filter);
  const { data: requests, error } = await query;
  if (error) return NextResponse.json({ error: 'Unable to load access requests.' }, { status: 500 });

  const ids = (requests || []).map((item) => item.id);
  const { data: accessRows } = ids.length
    ? await db.from('matho_teacher_access').select('id,request_id,status,plan,expires_at,issued_at,last_used_at').in('request_id', ids)
    : { data: [] };
  const byRequest = new Map((accessRows || []).map((item) => [item.request_id, item]));
  return NextResponse.json({
    ok: true,
    requests: (requests || []).map((item) => ({ ...item, access: byRequest.get(item.id) || null })),
  }, { headers: { 'cache-control': 'no-store' } });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  if (!validAdminKey(body.adminKey)) return NextResponse.json({ error: 'Administrator key is incorrect.' }, { status: 401 });
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Administration database is unavailable.' }, { status: 503 });

  const requestId = clean(body.requestId, 80);
  const action = clean(body.action, 30);
  if (!requestId) return NextResponse.json({ error: 'Select a valid request.' }, { status: 400 });

  if (action === 'issue_code') {
    const { data: applicant } = await db.from('matho_access_requests').select('id,full_name,institution_name,plan,applicant_type').eq('id', requestId).maybeSingle();
    if (!applicant) return NextResponse.json({ error: 'Request not found.' }, { status: 404 });
    const expiryDays = Math.max(7, Math.min(730, Number(body.expiryDays) || 90));
    const code = 'MTH-' + randomCode(10);
    const expiresAt = new Date(Date.now() + expiryDays * 86400000).toISOString();
    const { error } = await db.from('matho_teacher_access').upsert({
      request_id: requestId,
      code_hash: tokenHash(code),
      holder_name: applicant.full_name,
      institution_name: applicant.institution_name,
      plan: applicant.plan || applicant.applicant_type,
      status: 'active',
      expires_at: expiresAt,
      issued_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'request_id' });
    if (error) return NextResponse.json({ error: 'Unable to generate the teacher code.' }, { status: 500 });
    await db.from('matho_access_requests').update({ status: 'active', reviewed_at: new Date().toISOString(), decision_note: clean(body.note, 600) || null }).eq('id', requestId);
    return NextResponse.json({ ok: true, code, expiresAt, message: 'Copy this code now. Only its secure hash is stored.' });
  }

  if (action === 'suspend' || action === 'activate') {
    const status = action === 'suspend' ? 'suspended' : 'active';
    const { error } = await db.from('matho_teacher_access').update({ status, updated_at: new Date().toISOString() }).eq('request_id', requestId);
    if (error) return NextResponse.json({ error: 'Unable to update teacher access.' }, { status: 500 });
    await db.from('matho_access_requests').update({ status: status === 'active' ? 'active' : 'approved', reviewed_at: new Date().toISOString() }).eq('id', requestId);
    return NextResponse.json({ ok: true });
  }

  const statuses = ['pending', 'contacted', 'approved', 'declined'];
  const status = clean(body.status, 20);
  if (action !== 'set_status' || !statuses.includes(status)) return NextResponse.json({ error: 'Unsupported administrative action.' }, { status: 400 });
  const { error } = await db.from('matho_access_requests').update({
    status,
    decision_note: clean(body.note, 600) || null,
    reviewed_at: new Date().toISOString(),
  }).eq('id', requestId);
  if (error) return NextResponse.json({ error: 'Unable to update the request.' }, { status: 500 });
  if (status === 'declined') await db.from('matho_teacher_access').update({ status: 'revoked', updated_at: new Date().toISOString() }).eq('request_id', requestId);
  return NextResponse.json({ ok: true });
}
