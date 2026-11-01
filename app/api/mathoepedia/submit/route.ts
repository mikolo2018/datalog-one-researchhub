import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { mathoepediaQuestions } from '@/lib/mathoepedia-questions';
import { clean, tokenHash } from '@/lib/mathoepedia-quiz-security';

type SubmittedAnswer = { questionId: number; answer?: string; responseMs?: number };

export async function POST(request: Request) {
  const body = await request.json();
  const participantId = clean(body.participantId, 80);
  const token = clean(body.token, 100);
  const answers: SubmittedAnswer[] = Array.isArray(body.answers) ? body.answers.slice(0, 36) : [];
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Quiz database is unavailable.' }, { status: 503 });

  const { data: participant } = await db.from('matho_quiz_participants').select('id,session_id,token_hash,completed_at').eq('id', participantId).maybeSingle();
  if (!participant || participant.token_hash !== tokenHash(token)) return NextResponse.json({ error: 'This quiz attempt is not valid.' }, { status: 401 });
  if (participant.completed_at) return NextResponse.json({ error: 'This attempt has already been submitted.' }, { status: 409 });
  const { data: session } = await db.from('matho_quiz_sessions').select('question_ids').eq('id', participant.session_id).single();
  if (!session) return NextResponse.json({ error: 'Quiz session not found.' }, { status: 404 });

  const bank = new Map(mathoepediaQuestions.map((question) => [question.id, question]));
  const allowed = new Set<number>(session.question_ids);
  const answerMap = new Map(answers.map((answer) => [Number(answer.questionId), answer]));
  const topicMap = new Map<string, { correct: number; total: number }>();
  let score = 0;
  const rows = session.question_ids.map((id: number) => {
    const question = bank.get(id)!;
    const submitted = answerMap.get(id);
    const selected = clean(submitted?.answer, 1).toUpperCase() || null;
    const correct = selected === question.answer;
    if (correct) score++;
    const current = topicMap.get(question.topic) || { correct: 0, total: 0 };
    current.total++; if (correct) current.correct++;
    topicMap.set(question.topic, current);
    return { session_id: participant.session_id, participant_id: participant.id, question_id: id, topic: question.topic, difficulty: question.difficulty, selected_answer: selected, correct_answer: question.answer, is_correct: correct, response_ms: Math.max(0, Math.min(3600000, Number(submitted?.responseMs) || 0)) };
  }).filter((row: { question_id: number }) => allowed.has(row.question_id));

  const topics = Array.from(topicMap, ([topic, values]) => ({ topic, ...values, percentage: Math.round(values.correct / values.total * 100) }));
  const strengths = topics.filter((topic) => topic.percentage >= 70).map((topic) => topic.topic);
  const review = topics.filter((topic) => topic.percentage < 70).map((topic) => topic.topic);
  const total = rows.length;
  const percentage = total ? Math.round(score / total * 10000) / 100 : 0;
  const feedback = { topics, strengths, review };
  const { error: answerError } = await db.from('matho_quiz_answers').insert(rows);
  if (answerError) return NextResponse.json({ error: 'Unable to save the answers.' }, { status: 500 });
  const { error: updateError } = await db.from('matho_quiz_participants').update({ score, total, percentage, feedback, completed_at: new Date().toISOString() }).eq('id', participant.id);
  if (updateError) return NextResponse.json({ error: 'Unable to complete the result.' }, { status: 500 });
  const message = percentage >= 80 ? 'Excellent competition readiness.' : percentage >= 60 ? 'Good progress. Review the weaker topics and try another set.' : 'Keep practising. Use the topic feedback to guide your next lesson.';
  return NextResponse.json({ ok: true, result: { score, total, percentage, topics, strengths, review, message } });
}
