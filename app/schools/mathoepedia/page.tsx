import type { Metadata } from 'next';
import Link from 'next/link';

import MathoepediaPractice from '@/components/MathoepediaPractice';
import { mathoepediaQuestions, mathoepediaTopics, MATHOEPEDIA_RIGHTS } from '@/lib/mathoepedia-questions';

export const metadata: Metadata = {
  title: 'Mathoepedia Question Library | Datalog ICT',
  description: 'Explore the unified Datalog ICT Mathoepedia bank for Primary 6 and JSS 1 competition preparation, class practice and independent learning.',
};

const strands = [
  ['Number sense', 'Whole numbers, place value, estimation and operations'],
  ['Factors & multiples', 'Prime numbers, divisibility, HCF and LCM'],
  ['Fractions & decimals', 'Conversion, ordering, operations and number lines'],
  ['Percentages & ratio', 'Money, savings, sharing, proportion and unitary method'],
  ['Algebra', 'Expressions, substitution, patterns and function machines'],
  ['Equations', 'One-step, multi-step, brackets, fractions and word models'],
  ['Geometry & measure', 'Perimeter, area, angles, units and solid shapes'],
  ['Rates & data', 'Time, speed, signed numbers, tables and interpretation'],
];

export default function MathoepediaPage() {
  return <main>
    <section className="matho-hero">
      <div className="container matho-hero-grid">
        <div>
          <span className="eyebrow light">Mathoepedia by Datalog ICT</span>
          <h1>Build competition confidence from one unified mathematics bank.</h1>
          <p>The Datalog ICT Mathoepedia Master Bank combines every live-quiz collection into one professionally edited Primary 6–JSS 1 pathway with consistent topics, notation, answer keys and explanations.</p>
          <div className="hero-actions">
            <Link className="btn" href="/schools/mathoepedia/live">Launch live quiz</Link>\n            <Link className="secondary-btn secondary-light" href="/schools/mathoepedia/access">Teacher access</Link>
            <a className="secondary-btn secondary-light" href="#practice">Start a practice set</a>
            <a className="secondary-btn secondary-light" href="#master-bank">Browse the master bank</a>
          </div>
          <div className="matho-proof">
            <span><strong>{mathoepediaQuestions.length}</strong> verified questions</span>
            <span><strong>{mathoepediaTopics.length}</strong> unified strands</span>
            <span><strong>27</strong> planned sessions</span>
          </div>
        </div>
        <aside className="matho-hero-card">
          <span className="eyebrow light">Designed for progression</span>
          <h2>Foundation → Bridge → Competition</h2>
          <ul>
            <li>Primary 6 foundations and JSS 1 preview</li>
            <li>Easy, intermediate and difficult practice</li>
            <li>Objective and structured-response tasks</li>
            <li>Real-life Nigerian contexts and reasoning</li>
            <li>Printable full banks with teacher keys</li>
          </ul>
        </aside>
      </div>
    </section>

    <nav className="school-subnav" aria-label="School resources sections"><div className="container">
      <Link href="/schools">School Services</Link>
      <Link href="/schools/resources">Assessment Samples</Link>
      <Link className="active" href="/schools/mathoepedia">Mathoepedia</Link>
      <Link href="/schools/mathoepedia/live">Live Quiz</Link>
      <Link href="/schools#school-consultation">Consultation</Link>
    </div></nav>

    <section className="section" id="practice"><div className="container">
      <div className="section-heading"><span className="eyebrow">Interactive practice sampler</span><h2>Search, filter and solve by topic.</h2><p className="muted">Attempt each question first, then reveal the answer and a short explanation. Use the full banks below for complete timed papers.</p></div>
      <MathoepediaPractice />
    </div></section>

    <section className="section alt"><div className="container">
      <div className="section-heading"><span className="eyebrow">Coverage map</span><h2>Eight strands in one progressive learning pathway.</h2></div>
      <div className="matho-strand-grid">{strands.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="section" id="master-bank"><div className="container">
      <div className="section-heading"><span className="eyebrow">Datalog ICT Mathoepedia Master Bank</span><h2>One verified bank—consistent from practice to live quiz.</h2><p className="muted">All {mathoepediaQuestions.length} questions now use branded DLM question codes, unified topic names, consistent mathematical notation, standard difficulty levels and checked answer mappings. Use the searchable practice area above or create a timed live session from the same master source.</p></div>
      <article className="matho-bank-card featured">
        <div className="matho-bank-meta"><span>{mathoepediaQuestions.length} MCQs</span><span>Primary 6 → JSS 1</span></div>
        <h3>Unified Mathoepedia Question Bank</h3><p>{mathoepediaTopics.join(' • ')}</p>
        <div className="resource-actions"><a className="btn" href="#practice">Search the full bank</a><Link className="secondary-btn" href="/schools/mathoepedia/live">Create a live quiz</Link></div>
        <p className="muted"><small>{MATHOEPEDIA_RIGHTS} Questions may be used through authorised Mathoepedia practice, teaching and assessment services.</small></p>
      </article>
    </div></section>

    <section className="section matho-programme"><div className="container split">
      <div><span className="eyebrow light">For schools and parents</span><h2>Turn question practice into a measured learning programme.</h2><p>Mathoepedia combines diagnostic assessment, progressive practice, error correction, learner feedback and competition preparation. Datalog can adapt the programme to your school calendar, pupil level and competition target.</p></div>
      <div className="resource-actions"><Link className="btn" href="/schools#school-consultation">Request Mathoepedia for your school</Link><a className="secondary-btn secondary-light" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20would%20like%20to%20discuss%20the%20Mathoepedia%20programme." target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>
    </div></section>
  </main>;
}
