import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { askMathoepediaAI } from '@/lib/mathoepedia-ai';
import { mathoepediaQuestions } from '@/lib/mathoepedia-questions';
import { authorizeTeacher, clean } from '@/lib/mathoepedia-quiz-security';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';

export const runtime = 'nodejs';
type Mode = 'hint' | 'explain' | 'teacher-summary';

function verifiedFallback(mode: 'hint' | 'explain', question: (typeof mathoepediaQuestions)[number]) {
  if (mode === 'explain') return question.explanation;
  const hints: Record<string, string> = {
    'Number Sense & Operations': 'Name each place-value column from right to left, then locate the digit named in the question.',
    'Factors, Multiples & Divisibility': 'Test the choices using divisibility rules or list the factor pairs carefully.',
    'Fractions, Decimals & Percentages': 'Convert every quantity to the same form before you compare or calculate.',
    'Algebra & Equations': 'Represent the unknown with a symbol, then undo each operation in reverse order.',
    'Geometry & Spatial Reasoning': 'Sketch the shape, label the known measurements and choose the matching formula.',
    'Statistics, Sets & Probability': 'Organise the information in a table or set, then compare the required totals.',
    'Mathematical Reasoning & Problem Solving': 'Underline what is known and what is required, then solve one small step at a time.',
    'Money & Financial Mathematics': 'Write all money values in the same unit and identify whether the problem needs a total, difference or percentage.',
    'Ratio, Proportion & Variation': 'Reduce the ratio first, then find the value of one equal part.',
    'Measurement, Rates & Time': 'Check the units first and convert them before applying the rate or measurement rule.',
    'Logic & Combinatorics': 'List the possibilities systematically so that none is repeated or missed.',
    'Patterns & Sequences': 'Compare consecutive terms and look for the operation that repeats.',
  };
  return hints[question.topic] || 'Identify the given information, choose the relevant rule and work through one step at a time.';
}

function fingerprint(request: Request, scope = 'public') {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const secret = process.env.MATHOEPEDIA_AI_RATE_SECRET || process.env.MATHOEPEDIA_HOST_KEY || 'mathoepedia-rate-limit';
  return createHash('sha256').update(`${scope}:${ip}:${secret}`).digest('hex');
}

async function withinLimit(db: NonNullable<ReturnType<typeof createSupabaseAdminClient>>, id: string, mode: Mode, limit: number) {
  const since = new Date(); since.setUTCHours(0, 0, 0, 0);
  const { count } = await db.from('matho_ai_usage').select('id', { count: 'exact', head: true }).eq('fingerprint', id).eq('mode', mode).gte('created_at', since.toISOString());
  return (count || 0) < limit;
}

async function record(db: NonNullable<ReturnType<typeof createSupabaseAdminClient>>, id: string, mode: Mode, questionCode?: string) {
  await db.from('matho_ai_usage').insert({ fingerprint: id, mode, question_code: questionCode || null });
}

export async function POST(request: Request) {
  const body = await request.json();
  const mode = clean(body.mode, 40) as Mode;
  const db = createSupabaseAdminClient();
  if (!db) return NextResponse.json({ error: 'Mathoepedia data service is unavailable.' }, { status: 503 });

  if (mode === 'hint' || mode === 'explain') {
    const code = clean(body.questionCode, 20).toUpperCase();
    const question = mathoepediaQuestions.find((item) => item.code === code);
    if (!question) return NextResponse.json({ error: 'Verified question not found.' }, { status: 404 });
    const id = fingerprint(request);
    if (!(await withinLimit(db, id, mode, 12))) return NextResponse.json({ error: 'Your free AI allowance for today has been used. The verified answer and standard explanation remain available.' }, { status: 429 });
    const options = question.options.map((option, index) => `${'ABCDE'[index]}. ${option}`).join('\n');
    const instructions = mode === 'hint'
      ? 'You are the child-safe Mathoepedia learning assistant for Primary 6 and JSS 1. Give one short supportive hint in simple English. Do not state or identify the final answer. Use only the verified question context supplied.'
      : 'You are the child-safe Mathoepedia learning assistant for Primary 6 and JSS 1. Explain the verified solution in no more than four short steps, using clear mathematical language. Do not add unrelated content.';
    const input = `Code: ${question.code}\nTopic: ${question.topic}\nQuestion: ${question.prompt}\n${options}\nVerified answer: ${question.answer}\nVerified explanation: ${question.explanation}`;
    try {
      const message = await askMathoepediaAI(instructions, input, 260);
      await record(db, id, mode, code);
      return NextResponse.json({ ok: true, message, source: 'ai', groundedIn: code, remainingMessage: 'AI guidance is checked against the verified Mathoepedia answer.' });
    } catch (error) {
      console.error('Mathoepedia pupil AI request failed:', error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({ ok: true, message: verifiedFallback(mode, question), source: 'verified-fallback', groundedIn: code, remainingMessage: 'This guidance comes directly from the verified Mathoepedia bank while adaptive AI is unavailable.' });
    }
  }

  if (mode === 'teacher-summary') {
    const authorization = await authorizeTeacher(db, body.hostKey);
    if (!authorization) return NextResponse.json({ error: 'Teacher access key is incorrect, expired or suspended.' }, { status: 401 });
    const joinCode = clean(body.joinCode, 6).toUpperCase();
    const { data: session } = await db.from('matho_quiz_sessions').select('id,title,category,difficulty,teacher_access_id').eq('join_code', joinCode).maybeSingle();
    if (!session) return NextResponse.json({ error: 'Session not found.' }, { status: 404 });
    if (authorization.kind === 'teacher' && session.teacher_access_id !== authorization.id) return NextResponse.json({ error: 'This session belongs to another teacher account.' }, { status: 403 });
    const { data: participants } = await db.from('matho_quiz_participants').select('percentage,feedback,completed_at').eq('session_id', session.id);
    const completed = (participants || []).filter((item) => item.completed_at);
    if (!completed.length) return NextResponse.json({ error: 'Complete at least one pupil attempt before generating an AI teaching insight.' }, { status: 400 });
    const average = Math.round(completed.reduce((sum, item) => sum + Number(item.percentage || 0), 0) / completed.length * 10) / 10;
    const topics = new Map<string, { correct: number; total: number }>();
    completed.forEach((item) => (item.feedback?.topics || []).forEach((topic: { topic:string; correct:number; total:number }) => {
      const current = topics.get(topic.topic) || { correct: 0, total: 0 };
      current.correct += topic.correct; current.total += topic.total; topics.set(topic.topic, current);
    }));
    const topicData = Array.from(topics, ([topic, value]) => ({ topic, accuracy: value.total ? Math.round(value.correct / value.total * 100) : 0, responses: value.total }));
    const id = fingerprint(request, authorization.kind === 'teacher' ? authorization.id : 'master');
    if (!(await withinLimit(db, id, mode, 40))) return NextResponse.json({ error: 'The daily teacher AI allowance has been reached.' }, { status: 429 });
    try {
      const message = await askMathoepediaAI(
        'You are a mathematics instructional coach. Using only the anonymous aggregate Mathoepedia results provided, write a concise teacher report with: overall interpretation, strongest topic, priority misconception area, one 15-minute intervention, and five-step follow-up plan. Never invent pupil names or individual diagnoses.',
        JSON.stringify({ session: session.title, category: session.category, difficulty: session.difficulty, completed: completed.length, classAverage: average, topics: topicData }),
        500,
      );
      await record(db, id, mode);
      return NextResponse.json({ ok: true, message });
    } catch (error) {
      console.error('Mathoepedia teacher AI request failed:', error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({ error: 'AI teaching insight is temporarily unavailable. The standard class metrics remain available.' }, { status: 503 });
    }
  }

  return NextResponse.json({ error: 'Unsupported AI request.' }, { status: 400 });
}
