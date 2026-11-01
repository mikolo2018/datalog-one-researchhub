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

  const visible = useMemo(() => questions.filter((question) =>
    (topic === 'All' || question.topic === topic) &&
    (difficulty === 'All' || question.difficulty === difficulty) &&
    question.prompt.toLowerCase().includes(query.toLowerCase())
  ), [topic, difficulty, query]);

  function resetFilters() { setTopic('All'); setDifficulty('All'); setQuery(''); setVisibleCount(12); setRevealed([]); }
  function toggle(id: number) { setRevealed((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }

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
        <h3>{question.id}. {question.prompt}</h3>
        <ol type="A">{question.options.map((option) => <li key={option}>{option}</li>)}</ol>
        <button type="button" className="answer-toggle" aria-expanded={revealed.includes(question.id)} onClick={() => toggle(question.id)}>{revealed.includes(question.id) ? 'Hide answer' : 'Reveal answer'}</button>
        {revealed.includes(question.id) && <div className="matho-answer"><strong>Answer: {question.answer}</strong><p>{question.explanation}</p></div>}
      </article>)}
    </div>
    {visibleCount < visible.length && <button type="button" className="btn matho-load-more" onClick={() => setVisibleCount((count) => count + 12)}>Load more questions</button>}
    {visible.length === 0 && <div className="empty-state">No questions match these filters. Reset the filters to see the full sampler.</div>}
  </div>;
}
