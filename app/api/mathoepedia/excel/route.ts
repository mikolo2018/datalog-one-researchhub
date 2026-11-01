import { createSupabaseAdminClient } from '@/lib/supabase-admin';
import { clean, tokenHash } from '@/lib/mathoepedia-quiz-security';

const csvCell = (value: unknown) => '"' + String(value ?? '').replaceAll('"', '""').replace(/^[=+\-@]/, "'$&") + '"';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const joinCode = clean(url.searchParams.get('session'), 6).toUpperCase();
  const token = clean(url.searchParams.get('token'), 100);
  if (!/^[A-Z0-9]{6}$/.test(joinCode) || token.length < 30) return new Response('Invalid live Excel connection.', { status: 401 });
  const db = createSupabaseAdminClient();
  if (!db) return new Response('Quiz database is unavailable.', { status: 503 });
  const { data: session } = await db.from('matho_quiz_sessions').select('id,title,join_code,category,difficulty,created_at,excel_token_hash').eq('join_code', joinCode).maybeSingle();
  if (!session || !session.excel_token_hash || session.excel_token_hash !== tokenHash(token)) return new Response('This live Excel connection is invalid or has been replaced.', { status: 401 });
  const { data: participants } = await db.from('matho_quiz_participants').select('pupil_name,class_name,score,total,percentage,feedback,joined_at,completed_at').eq('session_id', session.id).order('joined_at');
  const topics = Array.from(new Set((participants || []).flatMap((participant) => (participant.feedback?.topics || []).map((item: { topic: string }) => item.topic))));
  const headers = ['Session code','Quiz title','Category','Difficulty','Pupil name','Class','Score','Total','Percentage','Joined at','Completed at',...topics.map((topic) => topic + ' accuracy (%)'),...topics.map((topic) => topic + ' correct'),...topics.map((topic) => topic + ' total')];
  const rows = (participants || []).map((participant) => {
    const topicRows: Array<{ topic: string; percentage: number; correct: number; total: number }> = participant.feedback?.topics || [];
    const metric = (topic: string, key: 'percentage' | 'correct' | 'total') => topicRows.find((item) => item.topic === topic)?.[key] ?? '';
    return [session.join_code,session.title,session.category,session.difficulty,participant.pupil_name,participant.class_name,participant.score,participant.total,participant.percentage,participant.joined_at,participant.completed_at,...topics.map((topic) => metric(topic,'percentage')),...topics.map((topic) => metric(topic,'correct')),...topics.map((topic) => metric(topic,'total'))];
  });
  const output = '\uFEFF' + [headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
  return new Response(output, { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'inline; filename="mathoepedia-' + joinCode + '-live-results.csv"', 'cache-control': 'no-store, private', 'referrer-policy': 'no-referrer', 'x-content-type-options': 'nosniff' } });
}
