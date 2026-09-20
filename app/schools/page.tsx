import type { Metadata } from 'next';
import Link from 'next/link';

import SchoolConsultationForm from '@/components/SchoolConsultationForm';

export const metadata: Metadata = {
  title: 'School Assessment & Educational Consultancy | Datalog ICT',
  description: 'Independent assessment, scheme-of-work and lesson-note review, whole-child evaluation and school-performance reporting for primary and secondary schools.',
};

const services = [
  ['Independent pupil and student assessment', 'Curriculum-aligned tests and performance reviews that show what learners know, understand and can apply—by class, subject and learning outcome.'],
  ['Scheme-of-work coverage review', 'Compare teachers’ lesson notes, records of work and assessment evidence with the approved scheme to identify topics covered, omitted or needing reinforcement.'],
  ['Whole-child learning evaluation', 'Combine cognitive achievement with structured evidence of attitudes, participation, collaboration, responsibility, practical skills and other relevant affective or psychomotor outcomes.'],
  ['Examination and test services', 'Support for assessment blueprints, item development, moderation, administration planning, marking frameworks, analysis and secure performance reporting.'],
  ['Teacher assessment support', 'Help teachers improve lesson-note alignment, classroom assessment, item construction, record keeping, feedback and evidence-led instructional planning.'],
  ['School performance analytics', 'Clear reports and dashboards for proprietors and leaders, with class, subject and learner-group comparisons plus practical improvement priorities.'],
];

const calendar = [
  ['Baseline / beginning of term', 'Establish starting levels, learning gaps and priority areas for teaching.'],
  ['Mid-term review', 'Check progress, curriculum coverage and pupils who require early intervention.'],
  ['Terminal examination', 'Provide an independent, curriculum-aligned measure of achievement and subject performance.'],
  ['End-of-session evaluation', 'Review year-long growth, promotion readiness, programme effectiveness and priorities for the next session.'],
];

export default function SchoolsPage() {
  return <main>
    <section className="school-hero">
      <div className="container school-hero-grid">
        <div>
          <span className="eyebrow light">School Assessment & Educational Consultancy</span>
          <h1>Know what was taught. Measure what was learned. Improve what happens next.</h1>
          <p>Datalog supports school owners and leaders with independent assessment, curriculum-coverage review and actionable reporting for elementary/primary and secondary education.</p>
          <div className="hero-actions"><a className="btn" href="#school-consultation">Request a consultation</a><a className="secondary-btn secondary-light" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20would%20like%20to%20discuss%20school%20assessment%20and%20educational%20consultancy." target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>
        </div>
        <aside className="school-proof-card">
          <strong>Designed for</strong>
          <span>School proprietors and directors</span>
          <span>Head teachers and principals</span>
          <span>Academic and quality-assurance teams</span>
          <span>Primary and secondary schools</span>
        </aside>
      </div>
    </section>

    <nav className="school-subnav" aria-label="School services sections"><div className="container"><Link className="active" href="/schools">School Services</Link><Link href="/schools/resources">Sample Questions</Link><a href="#school-consultation">Consultation</a></div></nav>

    <section className="section school-resource-callout"><div className="container split"><div><span className="eyebrow">Free assessment resources</span><h2>Preview Datalog’s approach before commissioning your school programme.</h2><p className="muted">Download 20 original, watermarked sample papers across Mathematics, English and Science for Primary, JSS and introductory SSS levels. Each paper includes a teacher answer key.</p><Link className="btn" href="/schools/resources">Explore sample questions</Link></div><div className="resource-mini-grid"><span><strong>20</strong> downloadable samples</span><span><strong>3</strong> core subject areas</span><span><strong>3</strong> school levels</span><span><strong>100%</strong> original questions</span></div></div></section>

    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">What we provide</span><h2>Independent evidence for better teaching and school decisions.</h2><p className="muted">Services can be commissioned individually or combined into a termly or full-session school assessment programme.</p></div><div className="grid grid3">{services.map(([title, description]) => <article className="card school-service-card" key={title}><span className="school-card-mark" aria-hidden="true">✓</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="section alt"><div className="container"><div className="section-heading"><span className="eyebrow">Assessment across the school calendar</span><h2>Support at the points where decisions matter.</h2></div><div className="assessment-calendar">{calendar.map(([period, purpose], index) => <article key={period}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{period}</h3><p>{purpose}</p></div></article>)}</div></div></section>

    <section className="section"><div className="container split school-reporting"><div><span className="eyebrow">What school leaders receive</span><h2>Reports that move beyond marks and positions.</h2><p className="muted">Each engagement is scoped to the school’s needs, subjects, classes and calendar. Reporting may include:</p><ul className="school-deliverables"><li>Curriculum and scheme-of-work coverage summary</li><li>Class, subject and learning-outcome performance</li><li>Identification of strengths, gaps and pupils needing support</li><li>Structured affective and psychomotor evidence where appropriate</li><li>Teacher and departmental feedback for improvement</li><li>Management briefing with practical recommendations</li><li>Parent-friendly summaries or dashboards when requested</li></ul></div><aside className="card safeguarding-card"><span className="eyebrow">Professional approach</span><h3>Fair, useful and confidential</h3><p>Assessment instruments are aligned with the agreed curriculum and purpose. Findings are reported constructively and handled confidentially.</p><p>Datalog’s role is to strengthen school decision-making—not to replace teachers’ professional judgement or label learners from a single score.</p><Link className="text-link" href="/institutional">View all institutional solutions →</Link></aside></div></section>

    <section className="section school-consultation-section" id="school-consultation"><div className="container consultation-layout"><div><span className="eyebrow light">Start with a discovery discussion</span><h2>Let us design the right assessment plan for your school.</h2><p>Share your school level, approximate enrolment, preferred assessment period and current priorities. We will review the request and discuss scope, timing, deliverables and fees with you.</p><div className="school-contact-note"><strong>Datalog ICT & General Merchandise Ltd.</strong><span>Abeokuta, Ogun State</span><span>+234 816 641 4241</span></div></div><SchoolConsultationForm /></div></section>
  </main>;
}
