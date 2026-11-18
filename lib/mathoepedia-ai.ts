import type { MathoepediaQuestion } from './mathoepedia-questions';

const MODEL = process.env.OPENAI_MATHOEPEDIA_MODEL || 'gpt-6-luna';

function outputText(payload: { output?: Array<{ content?: Array<{ type?: string; text?: string }> }> }) {
  return (payload.output || []).flatMap((item) => item.content || []).filter((item) => item.type === 'output_text').map((item) => item.text || '').join('\n').trim();
}

export async function askMathoepediaAI(instructions: string, input: string, maxOutputTokens = 350) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('AI service is not configured.');
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: MODEL, instructions, input, max_output_tokens: maxOutputTokens, store: false }),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error?.message || 'AI service did not respond.');
  const text = outputText(payload);
  if (!text) throw new Error('AI service returned an empty response.');
  return text;
}

export async function selectVerifiedQuestionsWithAI(pool: MathoepediaQuestion[], count: number, learningGoal: string) {
  const candidates = [...pool].sort(() => Math.random() - 0.5).slice(0, 60);
  const catalogue = candidates.map((q) => `${q.code} | ${q.topic} | ${q.difficulty} | ${q.prompt}`).join('\n');
  const text = await askMathoepediaAI(
    'You select questions only from a verified Datalog ICT Mathoepedia catalogue. Return only the requested DLM codes separated by commas. Never invent, rewrite or duplicate a code.',
    `Learning goal: ${learningGoal}\nChoose exactly ${count} varied questions from this catalogue:\n${catalogue}`,
    180,
  );
  const allowed = new Map(candidates.map((q) => [q.code, q.id]));
  const selected = Array.from(new Set((text.match(/DLM-\d{4}/g) || []).map((code) => allowed.get(code)).filter((id): id is number => Boolean(id))));
  return selected.length >= Math.min(4, count) ? selected.slice(0, count) : [];
}
