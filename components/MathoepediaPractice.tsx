'use client';

import { useMemo, useState } from 'react';

type Difficulty = 'Foundation' | 'Bridge' | 'Competition';
type Question = { id: number; topic: string; difficulty: Difficulty; prompt: string; options: string[]; answer: string; explanation: string };

const questions: Question[] = [
  {id:1,topic:'Number sense',difficulty:'Foundation',prompt:'What is the value of the digit 7 in 4,782,315?',options:['7,000','70,000','700,000','700'],answer:'C',explanation:'The 7 is in the hundred-thousands place, so its value is 700,000.'},
  {id:2,topic:'Number sense',difficulty:'Bridge',prompt:'Round 684,951 to the nearest ten thousand.',options:['680,000','685,000','690,000','700,000'],answer:'A',explanation:'The thousands digit is 4, so the ten-thousands digit stays 8.'},
  {id:3,topic:'Number sense',difficulty:'Competition',prompt:'A number gives quotient 37 remainder 5 when divided by 8. What is the number?',options:['291','296','301','309'],answer:'C',explanation:'Number = 8 × 37 + 5 = 301.'},
  {id:4,topic:'Number sense',difficulty:'Competition',prompt:'Which number is exactly halfway between 38,475 and 52,925?',options:['45,600','45,700','45,800','45,900'],answer:'B',explanation:'Add the numbers and divide by 2: 91,400 ÷ 2 = 45,700.'},

  {id:5,topic:'Factors & multiples',difficulty:'Foundation',prompt:'Which number is a factor of 84?',options:['5','7','9','11'],answer:'B',explanation:'84 ÷ 7 = 12 exactly.'},
  {id:6,topic:'Factors & multiples',difficulty:'Bridge',prompt:'Find the HCF of 36 and 54.',options:['6','9','18','27'],answer:'C',explanation:'The greatest common factor is 18.'},
  {id:7,topic:'Factors & multiples',difficulty:'Bridge',prompt:'Find the LCM of 12 and 18.',options:['24','30','36','72'],answer:'C',explanation:'36 is the smallest number divisible by both 12 and 18.'},
  {id:8,topic:'Factors & multiples',difficulty:'Competition',prompt:'Two bells ring every 18 minutes and 24 minutes. If they ring together at 8:00 a.m., when will they next ring together?',options:['8:42 a.m.','8:48 a.m.','9:00 a.m.','9:12 a.m.'],answer:'D',explanation:'LCM(18,24) = 72 minutes, so the next time is 9:12 a.m.'},

  {id:9,topic:'Fractions & decimals',difficulty:'Foundation',prompt:'Write 0.375 as a fraction in its simplest form.',options:['3/5','3/8','5/8','375/10'],answer:'B',explanation:'0.375 = 375/1000 = 3/8.'},
  {id:10,topic:'Fractions & decimals',difficulty:'Bridge',prompt:'Which is greatest: 5/8, 0.61, 62%, or 3/5?',options:['5/8','0.61','62%','3/5'],answer:'A',explanation:'5/8 = 0.625, which is greater than 0.62, 0.61 and 0.60.'},
  {id:11,topic:'Fractions & decimals',difficulty:'Bridge',prompt:'Calculate 2 1/4 − 5/8.',options:['1 3/8','1 5/8','1 7/8','2 3/8'],answer:'B',explanation:'2 1/4 = 18/8; 18/8 − 5/8 = 13/8 = 1 5/8.'},
  {id:12,topic:'Fractions & decimals',difficulty:'Competition',prompt:'A tank is 3/5 full. After 24 litres are added, it is 3/4 full. What is the capacity?',options:['120 L','140 L','160 L','180 L'],answer:'C',explanation:'The increase is 3/4 − 3/5 = 3/20. If 3/20 is 24 L, the full capacity is 160 L.'},

  {id:13,topic:'Percentages & ratio',difficulty:'Foundation',prompt:'A pupil earns ₦1,000 and spends 75%. How much is saved?',options:['₦150','₦200','₦250','₦750'],answer:'C',explanation:'25% is saved, and 25% of ₦1,000 is ₦250.'},
  {id:14,topic:'Percentages & ratio',difficulty:'Bridge',prompt:'Flour and sugar are mixed in the ratio 5:2. How much sugar is needed for 35 kg of flour?',options:['10 kg','12 kg','14 kg','17.5 kg'],answer:'C',explanation:'35 kg represents 5 parts, so 1 part is 7 kg and 2 parts is 14 kg.'},
  {id:15,topic:'Percentages & ratio',difficulty:'Bridge',prompt:'A bag costs ₦1,600. Its price rises by 20%, then the new price is reduced by 25%. What is the final price?',options:['₦1,440','₦1,500','₦1,600','₦1,920'],answer:'A',explanation:'₦1,600 × 1.20 × 0.75 = ₦1,440.'},
  {id:16,topic:'Percentages & ratio',difficulty:'Competition',prompt:'Income rises by 20% while spending rises by 10% of its original value. Originally, 75% of income was spent. By what percentage do savings increase?',options:['20%','30%','40%','50%'],answer:'D',explanation:'Let income be 100: saving is 25. New income is 120; new spending is 82.5; new saving is 37.5. Increase = 12.5/25 = 50%.'},

  {id:17,topic:'Algebra',difficulty:'Foundation',prompt:'If x = 3, find 4x − 3.',options:['8','9','10','11'],answer:'B',explanation:'4(3) − 3 = 12 − 3 = 9.'},
  {id:18,topic:'Algebra',difficulty:'Foundation',prompt:'Simplify 5x + 3x + 3.',options:['8x + 3','8x + 6','9x + 3','15x + 3'],answer:'A',explanation:'Combine the like terms 5x and 3x.'},
  {id:19,topic:'Algebra',difficulty:'Bridge',prompt:'Expand and simplify 5(2x − 3) + 4x.',options:['10x − 15','14x − 15','14x + 15','9x − 3'],answer:'B',explanation:'5(2x − 3) + 4x = 10x − 15 + 4x = 14x − 15.'},
  {id:20,topic:'Algebra',difficulty:'Competition',prompt:'A taxi charges ₦500 plus ₦150 per kilometre. Which expression gives the fare for k kilometres?',options:['500k + 150','150(k + 500)','500 + 150k','650k'],answer:'C',explanation:'The fixed fee is ₦500 and the distance charge is ₦150k.'},

  {id:21,topic:'Equations',difficulty:'Foundation',prompt:'Solve x + 9 = 17.',options:['6','7','8','9'],answer:'C',explanation:'Subtract 9 from both sides: x = 8.'},
  {id:22,topic:'Equations',difficulty:'Bridge',prompt:'Solve 3x + 5 = 26.',options:['5','6','7','8'],answer:'C',explanation:'3x = 21, so x = 7.'},
  {id:23,topic:'Equations',difficulty:'Bridge',prompt:'Three notebooks cost ₦450 each. Rulers cost ₦200 each. If the total is ₦1,750, how many rulers were bought?',options:['1','2','3','4'],answer:'B',explanation:'3(450) + 200r = 1,750, so 200r = 400 and r = 2.'},
  {id:24,topic:'Equations',difficulty:'Competition',prompt:'Solve 4(2x − 3) = 3x + 18.',options:['5','6','7','8'],answer:'B',explanation:'8x − 12 = 3x + 18; 5x = 30; x = 6.'},

  {id:25,topic:'Geometry & measure',difficulty:'Foundation',prompt:'Find the perimeter of a rectangle 18 m long and 11 m wide.',options:['29 m','58 m','99 m','198 m'],answer:'B',explanation:'Perimeter = 2(18 + 11) = 58 m.'},
  {id:26,topic:'Geometry & measure',difficulty:'Bridge',prompt:'A 2 m gate is left in a 58 m rectangular boundary. Three rows of wire are used. How much wire is needed?',options:['112 m','168 m','174 m','180 m'],answer:'B',explanation:'Fence length per row is 58 − 2 = 56 m; three rows require 168 m.'},
  {id:27,topic:'Geometry & measure',difficulty:'Bridge',prompt:'A rectangle has length x + 5 cm and width 4 cm. Which expression gives its perimeter?',options:['2x + 9','2x + 13','2x + 18','4x + 18'],answer:'C',explanation:'P = 2[(x + 5) + 4] = 2x + 18.'},
  {id:28,topic:'Geometry & measure',difficulty:'Competition',prompt:'The area of a square is 324 cm². A rectangle has the same perimeter and width 12 cm. Find its length.',options:['18 cm','20 cm','24 cm','30 cm'],answer:'C',explanation:'Square side is 18 cm, perimeter is 72 cm. For the rectangle, 2(L + 12) = 72, so L = 24 cm.'},

  {id:29,topic:'Rates, time & data',difficulty:'Foundation',prompt:'What is −7 + 12?',options:['−19','−5','5','19'],answer:'C',explanation:'Moving 12 steps right from −7 lands at 5.'},
  {id:30,topic:'Rates, time & data',difficulty:'Bridge',prompt:'A car travels 180 km in 3 hours. What is its average speed?',options:['45 km/h','55 km/h','60 km/h','90 km/h'],answer:'C',explanation:'Speed = distance ÷ time = 180 ÷ 3 = 60 km/h.'},
  {id:31,topic:'Rates, time & data',difficulty:'Bridge',prompt:'Convert 2.75 hours to hours and minutes.',options:['2 h 15 min','2 h 30 min','2 h 45 min','2 h 75 min'],answer:'C',explanation:'0.75 hour = 0.75 × 60 = 45 minutes.'},
  {id:32,topic:'Rates, time & data',difficulty:'Competition',prompt:'A tap fills 3/8 of a tank in 15 minutes at a constant rate. How long will it take to fill the whole tank?',options:['35 min','40 min','45 min','48 min'],answer:'B',explanation:'15 minutes corresponds to 3 parts, so 1/8 takes 5 minutes and 8/8 takes 40 minutes.'},

  {id:33,topic:'Mixed word problems',difficulty:'Foundation',prompt:'Books cost 3 × ₦2,400 and pens cost 2 × ₦350. What is the change from ₦10,000?',options:['₦1,900','₦2,000','₦2,100','₦2,300'],answer:'C',explanation:'Total = ₦7,200 + ₦700 = ₦7,900; change is ₦2,100.'},
  {id:34,topic:'Mixed word problems',difficulty:'Bridge',prompt:'3/8 of 48 pupils are girls. What is the ratio of girls to boys in simplest form?',options:['3:5','3:8','5:3','8:5'],answer:'A',explanation:'Girls = 18 and boys = 30, so 18:30 simplifies to 3:5.'},
  {id:35,topic:'Mixed word problems',difficulty:'Bridge',prompt:'A recipe uses 300 g of flour for 4 trays. How much flour is needed for 10 trays?',options:['600 g','700 g','750 g','800 g'],answer:'C',explanation:'300 ÷ 4 = 75 g per tray; 75 × 10 = 750 g.'},
  {id:36,topic:'Mixed word problems',difficulty:'Competition',prompt:'Flour is sold in 500 g bags. If 750 g is needed, how many bags must be bought and how much will remain?',options:['1 bag, 250 g left','2 bags, 250 g left','2 bags, 500 g left','3 bags, 750 g left'],answer:'B',explanation:'Two bags provide 1,000 g; 1,000 − 750 = 250 g remains.'},
];

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
