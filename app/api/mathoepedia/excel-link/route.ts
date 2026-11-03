import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { authorizeTeacher, clean, randomCode, tokenHash } from '@/lib/mathoepedia-quiz-security';

export async function POST(request: Request) {
  const body = await request.json();
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });
  const authorization = await authorizeTeacher(db, body.hostKey);
  if (!authorization) return NextResponse.json({ error: 'Teacher access key is incorrect, expired or suspended.' }, { status: 401 });
  const token = randomCode(40);
  let query = db.from('matho_quiz_sessions').update({ excel_token_hash: tokenHash(token) }).eq('join_code', joinCode);
  if (authorization.kind === 'teacher') query = query.eq('teacher_access_id', authorization.id);
  const { data, error } = await query.select('join_code').maybeSingle();
  if (error || !data) return NextResponse.json({ error: 'Session not found.' }, { status: 404 });
  const origin = new URL(request.url).origin;
  return NextResponse.json({ ok: true, url: origin + '/api/mathoepedia/excel?session=' + encodeURIComponent(joinCode) + '&token=' + encodeURIComponent(token) });
}
