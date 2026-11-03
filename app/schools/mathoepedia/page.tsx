import type { Metadata } from 'next';
import Link from 'next/link';

import MathoepediaPractice from '@/components/MathoepediaPractice';

export const metadata: Metadata = {
  title: 'Mathoepedia Question Library | Datalog ICT',
  description: 'Explore 1,200 Primary 6 and JSS 1 mathematics questions for competition preparation, class practice and independent learning.',
};

const banks = [
  { title: 'Week 2 Competition Readiness', count: '675 MCQs', level: 'Primary 6 → JSS 1', coverage: 'Percentages, money, ratio, algebra machines, units, time, signed numbers and rates', href: '/downloads/schools/mathoepedia/week-2-675-competition-mcqs.html', featured: true },
  { title: 'Algebra Question Bank', count: '125 tasks', level: 'Primary 6 → JSS 1', coverage: 'Variables, expressions, substitution, brackets, patterns and modelling', href: '/downloads/schools/mathoepedia/algebra-question-bank.html' },
  { title: 'Equations Question Bank', count: '125 tasks', level: 'Primary 6 → JSS 1', coverage: 'Unknowns, one-step and multi-step equations, fractions and applications', href: '/downloads/schools/mathoepedia/equations-question-bank.html' },
  { title: 'Primary 6 Offline Challenge', count: '120 MCQs', level: 'Primary 6', coverage: 'Difficult mixed competition practice designed for focused revision', href: '/downloads/schools/mathoepedia/primary-6-120-offline-mcqs.html' },
  { title: 'Whole Number Sense', count: '75 tasks', level: 'Primary 6', coverage: 'Place value, operations, estimation and competition reasoning', href: '/downloads/schools/mathoepedia/whole-number-sense.html' },
  { title: 'Factors, Multiples, HCF & LCM', count: '75 tasks', level: 'Primary 6', coverage: 'Prime structure, factors, multiples, HCF, LCM and word problems', href: '/downloads/schools/mathoepedia/factors-multiples-hcf-lcm.html' },
  { title: 'Wednesday Word-Problem Challenge', count: '5 deep tasks', level: 'Primary 6 → JSS 1', coverage: 'Money, fractions, perimeter, equations and proportion with clear working', href: '/downloads/schools/mathoepedia/wednesday-word-problem-challenge.html' },
];

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
          <h1>Build competition confidence with 1,200 mathematics questions.</h1>
          <p>A growing Primary 6–JSS 1 bridge library built from Mathoepedia classroom sessions, challenge cards, question banks and competition-readiness projects.</p>
          <div className="hero-actions">
            <Link className="btn" href="/schools/mathoepedia/live">Launch live quiz</Link>\n            <Link className="secondary-btn secondary-light" href="/schools/mathoepedia/access">Teacher access</Link>
            <a className="secondary-btn secondary-light" href="#practice">Start a practice set</a>
            <a className="secondary-btn secondary-light" href="#question-banks">Open full question banks</a>
          </div>
          <div className="matho-proof">
            <span><strong>1,200</strong> question tasks</span>
            <span><strong>8</strong> core strands</span>
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

    <section className="section" id="question-banks"><div className="container">
      <div className="section-heading"><span className="eyebrow">Complete Mathoepedia archive</span><h2>Open the full 1,200-question collection.</h2><p className="muted">Each resource opens as a clean, searchable page that can be printed or saved as PDF. Full banks may include teacher answer keys; pupils should attempt questions before checking them.</p></div>
      <div className="matho-bank-grid">{banks.map((bank) => <article className={bank.featured ? 'matho-bank-card featured' : 'matho-bank-card'} key={bank.title}>
        <div className="matho-bank-meta"><span>{bank.count}</span><span>{bank.level}</span></div>
        <h3>{bank.title}</h3><p>{bank.coverage}</p>
        <a className="btn" href={bank.href}>Open full bank →</a>
      </article>)}</div>
    </div></section>

    <section className="section matho-programme"><div className="container split">
      <div><span className="eyebrow light">For schools and parents</span><h2>Turn question practice into a measured learning programme.</h2><p>Mathoepedia combines diagnostic assessment, progressive practice, error correction, learner feedback and competition preparation. Datalog can adapt the programme to your school calendar, pupil level and competition target.</p></div>
      <div className="resource-actions"><Link className="btn" href="/schools#school-consultation">Request Mathoepedia for your school</Link><a className="secondary-btn secondary-light" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20would%20like%20to%20discuss%20the%20Mathoepedia%20programme." target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>
    </div></section>
  </main>;
}
