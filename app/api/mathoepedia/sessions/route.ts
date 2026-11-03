import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { mathoepediaQuestions } from '@/lib/mathoepedia-questions';
import { authorizeTeacher, clean, randomCode } from '@/lib/mathoepedia-quiz-security';

export async function POST(request: Request) {
  const body = await request.json();
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });
  const authorization = await authorizeTeacher(db, body.hostKey);
  if (!authorization) return NextResponse.json({ error: 'Teacher access key is incorrect, expired or suspended.' }, { status: 401 });

  const category = clean(body.category) || 'All';
  const difficulty = clean(body.difficulty) || 'All';
  const count = Math.max(4, Math.min(40, Number(body.questionCount) || 10));
  const seconds = Math.max(20, Math.min(300, Number(body.secondsPerQuestion) || 60));
  const pool = mathoepediaQuestions.filter((q) => (category === 'All' || q.topic === category) && (difficulty === 'All' || q.difficulty === difficulty));
  if (pool.length < 4) return NextResponse.json({ error: 'Choose a broader category or difficulty.' }, { status: 400 });
  const questionIds = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length)).map((q) => q.id);

  for (let attempt = 0; attempt < 5; attempt++) {
    const joinCode = randomCode();
    const { data, error } = await db.from('matho_quiz_sessions').insert({
      join_code: joinCode,
      title: clean(body.title, 160) || 'Mathoepedia Live Quiz',
      category,
      difficulty,
      question_ids: questionIds,
      seconds_per_question: seconds,
      status: 'live',
      teacher_access_id: authorization.kind === 'teacher' ? authorization.id : null,
    }).select('id,join_code,title,category,difficulty,question_ids,seconds_per_question,status,created_at').single();
    if (!error && data) return NextResponse.json({ ok: true, session: data });
    if (error?.code !== '23505') return NextResponse.json({ error: 'Unable to create the session.' }, { status: 500 });
  }
  return NextResponse.json({ error: 'Unable to generate a unique session code.' }, { status: 500 });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });
  const authorization = await authorizeTeacher(db, body.hostKey);
  if (!authorization) return NextResponse.json({ error: 'Teacher access key is incorrect, expired or suspended.' }, { status: 401 });
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  let query = db.from('matho_quiz_sessions').update({ status: 'closed', closed_at: new Date().toISOString() }).eq('join_code', joinCode);
  if (authorization.kind === 'teacher') query = query.eq('teacher_access_id', authorization.id);
  const { data, error } = await query.select('id').maybeSingle();
  if (error || !data) return NextResponse.json({ error: 'Session not found or access denied.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
