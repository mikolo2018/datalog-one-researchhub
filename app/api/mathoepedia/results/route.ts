import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { authorizeTeacher, clean } from '@/lib/mathoepedia-quiz-security';

export async function POST(request: Request) {
  const body = await request.json();
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });
  const authorization = await authorizeTeacher(db, body.hostKey);
  if (!authorization) return NextResponse.json({ error: 'Teacher access key is incorrect, expired or suspended.' }, { status: 401 });
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  const { data: session } = await db.from('matho_quiz_sessions').select('id,join_code,title,category,difficulty,question_ids,seconds_per_question,status,created_at,closed_at,teacher_access_id').eq('join_code', joinCode).maybeSingle();
  if (!session) return NextResponse.json({ error: 'Session not found.' }, { status: 404 });
  if (authorization.kind === 'teacher' && session.teacher_access_id !== authorization.id) return NextResponse.json({ error: 'This session belongs to another teacher account.' }, { status: 403 });
  const { data: participants, error } = await db.from('matho_quiz_participants').select('id,pupil_name,class_name,score,total,percentage,feedback,joined_at,completed_at').eq('session_id', session.id).order('joined_at');
  if (error) return NextResponse.json({ error: 'Unable to load results.' }, { status: 500 });
  const completed = (participants || []).filter((participant) => participant.completed_at);
  const average = completed.length ? Math.round(completed.reduce((sum, participant) => sum + Number(participant.percentage || 0), 0) / completed.length * 10) / 10 : 0;
  const topicTotals = new Map<string, { correct: number; total: number }>();
  completed.forEach((participant) => (participant.feedback?.topics || []).forEach((topic: { topic: string; correct: number; total: number }) => {
    const current = topicTotals.get(topic.topic) || { correct: 0, total: 0 };
    current.correct += topic.correct; current.total += topic.total; topicTotals.set(topic.topic, current);
  }));
  const topicPerformance = Array.from(topicTotals, ([topic, values]) => ({ topic, ...values, percentage: values.total ? Math.round(values.correct / values.total * 100) : 0 }));
  return NextResponse.json({ ok: true, session, participants: participants || [], metrics: { joined: participants?.length || 0, completed: completed.length, average, topicPerformance } });
}
