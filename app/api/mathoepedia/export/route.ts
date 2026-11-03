import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { authorizeTeacher, clean } from '@/lib/mathoepedia-quiz-security';

const csvCell = (value: unknown) => '"' + String(value ?? '').replaceAll('"', '""').replace(/^[=+\-@]/, "'$&") + '"';

export async function POST(request: Request) {
  const body = await request.json();
  const db = createSupabaseAdminClient();
  if (!db) return new Response('Quiz database is unavailable.', { status: 503 });
  const authorization = await authorizeTeacher(db, body.hostKey);
  if (!authorization) return new Response('Teacher access key is incorrect, expired or suspended.', { status: 401 });
  const joinCode = clean(body.joinCode, 6).toUpperCase();
  const { data: session } = await db.from('matho_quiz_sessions').select('id,title,join_code,category,difficulty,created_at,teacher_access_id').eq('join_code', joinCode).maybeSingle();
  if (!session) return new Response('Session not found.', { status: 404 });
  if (authorization.kind === 'teacher' && session.teacher_access_id !== authorization.id) return new Response('This session belongs to another teacher account.', { status: 403 });
  const { data: participants } = await db.from('matho_quiz_participants').select('pupil_name,class_name,score,total,percentage,feedback,joined_at,completed_at').eq('session_id', session.id).order('joined_at');
  const topics = Array.from(new Set((participants || []).flatMap((participant) => (participant.feedback?.topics || []).map((item: { topic: string }) => item.topic))));
  const headers = ['Session code','Quiz title','Category','Difficulty','Pupil name','Class','Score','Total','Percentage','Joined at','Completed at',...topics.map((topic) => topic + ' accuracy (%)'),...topics.map((topic) => topic + ' correct'),...topics.map((topic) => topic + ' total')];
  const rows = (participants || []).map((participant) => {
    const topicRows: Array<{ topic: string; percentage: number; correct: number; total: number }> = participant.feedback?.topics || [];
    const metric = (topic: string, key: 'percentage' | 'correct' | 'total') => topicRows.find((item) => item.topic === topic)?.[key] ?? '';
    return [session.join_code,session.title,session.category,session.difficulty,participant.pupil_name,participant.class_name,participant.score,participant.total,participant.percentage,participant.joined_at,participant.completed_at,...topics.map((topic) => metric(topic,'percentage')),...topics.map((topic) => metric(topic,'correct')),...topics.map((topic) => metric(topic,'total'))];
  });
  const output = '\uFEFF' + [headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
  return new Response(output, { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="mathoepedia-' + joinCode + '-results.csv"', 'cache-control': 'no-store' } });
}
