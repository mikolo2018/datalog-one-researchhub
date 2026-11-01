import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { clean, randomCode, tokenHash, validHostKey } from '@/lib/mathoepedia-quiz-security';

export async function POST(request: Request) {
  const body = await request.json();
  if (!validHostKey(body.hostKey)) return NextResponse.json({ error: 'Teacher access key is incorrect.' }, { status: 401 });
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });
  const token = randomCode(40);
  const { data, error } = await db.from('matho_quiz_sessions').update({ excel_token_hash: tokenHash(token) }).eq('join_code', joinCode).select('join_code').maybeSingle();
  if (error || !data) return NextResponse.json({ error: 'Session not found.' }, { status: 404 });
  const origin = new URL(request.url).origin;
  return NextResponse.json({ ok: true, url: origin + '/api/mathoepedia/excel?session=' + encodeURIComponent(joinCode) + '&token=' + encodeURIComponent(token) });
}
