import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const inputPath = process.argv[2];
if (!inputPath) throw new Error('Pass the source questions.json path.');

const source = JSON.parse(await readFile(resolve(inputPath), 'utf8'));
if (!Array.isArray(source) || source.length === 0) throw new Error('The source question array is empty.');

const letters = 'ABCDE';
const ordinal = (value) => {
  const number = Number(value);
  const remainder100 = number % 100;
  const suffix = remainder100 >= 11 && remainder100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[number % 10] || 'th');
  return `${number}${suffix}`;
};

const questions = source.map((item, index) => {
  if (!Array.isArray(item.options) || item.options.length !== 5) throw new Error(`Question ${index + 1} does not have five options.`);
  const answerIndex = letters.indexOf(String(item.answer));
  if (answerIndex < 0 || item.options[answerIndex] !== item.correct) throw new Error(`Question ${index + 1} has an inconsistent answer key.`);
  const prompt = String(item.question)
    .replace(/^Practice form \d+:\s*/i, '')
    .replace(/\b(\d+)(?:st|nd|rd|th) tick\b/g, (_, value) => `${ordinal(value)} tick`);
  return {
    id: 2001 + index,
    topic: String(item.topic).trim(),
    difficulty: Number(item.tier) === 0 ? 'Bridge' : 'Competition',
    prompt,
    options: item.options.map(String),
    answer: String(item.answer),
    explanation: String(item.solution).trim(),
  };
});

if (new Set(questions.map((question) => question.prompt)).size !== questions.length) throw new Error('Duplicate prompts remain in the imported set.');

const output = `import type { RawMathoepediaQuestion } from './mathoepedia-questions';\n\n` +
  `// Imported from the ten competition assessments created in the shared Mathoepedia project.\n` +
  `// Papers 1–3 map to Bridge; Papers 4–10 map to Competition.\n` +
  `export const sharedCompetitionQuestions: RawMathoepediaQuestion[] = ${JSON.stringify(questions, null, 2)};\n`;

await writeFile(new URL('../lib/mathoepedia-shared-competition-questions.ts', import.meta.url), output);
console.log(`Generated ${questions.length} validated Mathoepedia questions.`);
