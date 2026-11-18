'use client';

import { useMemo, useState } from 'react';
import { mathoepediaQuestions as questions, type Difficulty } from '@/lib/mathoepedia-questions';

const difficulties: Array<'All' | Difficulty> = ['All', 'Foundation', 'Bridge', 'Competition'];

export default function MathoepediaPractice() {
  const topics = ['All', ...Array.from(new Set(questions.map((question) => question.topic)))];
  const [topic, setTopic] = useState('All');
  const [difficulty, setDifficulty] = useState<(typeof difficulties)[number]>('All');
  const [query, setQuery] = useState('');
  const [revealed, setRevealed] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [ai, setAi] = useState<Record<number, { loading?: boolean; message?: string; error?: string; source?: 'ai' | 'verified-fallback' }>>({});

  const visible = useMemo(() => questions.filter((question) =>
    (topic === 'All' || question.topic === topic) &&
    (difficulty === 'All' || question.difficulty === difficulty) &&
    question.prompt.toLowerCase().includes(query.toLowerCase())
  ), [topic, difficulty, query]);

  function resetFilters() { setTopic('All'); setDifficulty('All'); setQuery(''); setVisibleCount(12); setRevealed([]); }
  function toggle(id: number) { setRevealed((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }
  function listen(prompt: string, options: string[]) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = `${prompt}. ${options.map((option, index) => `Option ${'ABCDE'[index]}, ${option}`).join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-NG'; utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
  async function askAI(id: number, code: string, mode: 'hint' | 'explain') {
    setAi((current) => ({ ...current, [id]: { loading: true } }));
    try {
      const response = await fetch('/api/mathoepedia/ai', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ mode, questionCode: code }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'AI guidance is unavailable.');
      setAi((current) => ({ ...current, [id]: { message: data.message, source: data.source } }));
    } catch (cause) {
      setAi((current) => ({ ...current, [id]: { error: cause instanceof Error ? cause.message : 'AI guidance is unavailable.' } }));
    }
  }

  return <div className="matho-practice-shell">
    <div className="matho-controls">
      <label>Topic<select value={topic} onChange={(event) => { setTopic(event.target.value); setVisibleCount(12); }}>{topics.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Difficulty<select value={difficulty} onChange={(event) => { setDifficulty(event.target.value as (typeof difficulties)[number]); setVisibleCount(12); }}>{difficulties.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Search questions<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ratio, rectangle, income…" /></label>
      <button type="button" className="secondary-btn" onClick={resetFilters}>Reset</button>
    </div>
    <p className="resource-count" aria-live="polite">Showing {Math.min(visibleCount, visible.length)} of {visible.length} matching practice questions</p>
    <div className="matho-question-list">
      {visible.slice(0, visibleCount).map((question) => <article className="matho-question" key={question.id}>
        <div className="matho-question-head"><span>{question.topic}</span><span>{question.difficulty}</span></div>
        <h3>{question.code} · {question.prompt}</h3>
        <ol type="A">{question.options.map((option) => <li key={option}>{option}</li>)}</ol>
        <div className="matho-question-actions"><button type="button" className="answer-toggle" aria-expanded={revealed.includes(question.id)} onClick={() => toggle(question.id)}>{revealed.includes(question.id) ? 'Hide answer' : 'Reveal answer'}</button><button type="button" className="matho-small-action" onClick={() => listen(question.prompt, question.options)}>Listen</button><button type="button" className="matho-small-action" disabled={ai[question.id]?.loading} onClick={() => askAI(question.id, question.code, 'hint')}>{ai[question.id]?.loading ? 'Thinking…' : 'AI hint'}</button>{revealed.includes(question.id) && <button type="button" className="matho-small-action" disabled={ai[question.id]?.loading} onClick={() => askAI(question.id, question.code, 'explain')}>Explain step by step</button>}</div>
        {revealed.includes(question.id) && <div className="matho-answer"><strong>Answer: {question.answer}</strong><p>{question.explanation}</p><small>{question.brand} · All rights reserved.</small></div>}
        {ai[question.id]?.message && <div className="matho-ai-guidance" aria-live="polite"><strong>{ai[question.id].source === 'verified-fallback' ? 'Verified Mathoepedia guide' : 'Mathoepedia AI guide'}</strong><p>{ai[question.id].message}</p><small>Grounded in verified question {question.code}. {ai[question.id].source === 'verified-fallback' ? 'Adaptive AI will resume automatically when available.' : 'AI guidance can be reported if unclear.'}</small></div>}
        {ai[question.id]?.error && <p className="matho-ai-error" role="alert">{ai[question.id].error}</p>}
      </article>)}
    </div>
    {visibleCount < visible.length && <button type="button" className="btn matho-load-more" onClick={() => setVisibleCount((count) => count + 12)}>Load more questions</button>}
    {visible.length === 0 && <div className="empty-state">No questions match these filters. Reset the filters to see the full sampler.</div>}
  </div>;
}
