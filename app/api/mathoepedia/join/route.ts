import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { mathoepediaQuestions, publicQuestion } from '@/lib/mathoepedia-questions';
import { clean, randomCode, tokenHash } from '@/lib/mathoepedia-quiz-security';

export async function POST(request: Request) {
  const body = await request.json();
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  const pupilName = clean(body.pupilName, 100);
  const className = clean(body.className, 80);
  if (!/^[A-Z0-9]{6}$/.test(joinCode) || pupilName.length < 2) return NextResponse.json({ error: 'Enter a valid session code and pupil name.' }, { status: 400 });
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });

  const { data: session } = await db.from('matho_quiz_sessions').select('id,join_code,title,question_ids,seconds_per_question,status').eq('join_code', joinCode).eq('status', 'live').maybeSingle();
  if (!session) return NextResponse.json({ error: 'This session code is invalid or the quiz has closed.' }, { status: 404 });
  const token = randomCode(32);
  const { data: participant, error } = await db.from('matho_quiz_participants').insert({
    session_id: session.id, pupil_name: pupilName, class_name: className || null, token_hash: tokenHash(token),
  }).select('id').single();
  if (error || !participant) return NextResponse.json({ error: 'Unable to join the quiz.' }, { status: 500 });
  const byId = new Map(mathoepediaQuestions.map((question) => [question.id, question]));
  const questions = session.question_ids.map((id: number) => byId.get(id)).filter(Boolean).map((question) => publicQuestion(question!));
  return NextResponse.json({ ok: true, participantId: participant.id, token, session: { title: session.title, joinCode, secondsPerQuestion: session.seconds_per_question }, questions });
}
