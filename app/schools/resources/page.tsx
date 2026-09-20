import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SchoolResourceLibrary from '@/components/SchoolResourceLibrary';

export const metadata: Metadata = {
  title: 'Free School Assessment Samples | Datalog ICT',
  description: 'Download 20 branded Mathematics, English and Science sample assessment papers for Primary, JSS and SSS learners, complete with teacher answer keys.',
};

export default function SchoolResourcesPage() {
  return <main>
    <section className="resource-hero">
      <div className="container resource-hero-grid">
        <div>
          <span className="eyebrow light">Free school assessment samples</span>
          <h1>Ready-to-use questions for Mathematics, English and Science.</h1>
          <p>Explore 20 original sample assessment papers across Primary, Junior Secondary and introductory Senior Secondary levels. Every PDF includes objective questions, structured-response tasks, a teacher answer key and Datalog’s layered watermark.</p>
          <div className="hero-actions">
            <a className="btn" href="/downloads/schools/datalog-school-sample-assessments.zip" download>Download all 20 samples</a>
            <Link className="secondary-btn secondary-light" href="/schools#school-consultation">Request a customised assessment</Link>
          </div>
        </div>
        <Image src="/school-resources-banner.webp" alt="Nigerian pupils and students completing assessment activities with a teacher" width={1536} height={1024} priority sizes="(max-width: 900px) 100vw, 45vw" />
      </div>
    </section>

    <nav className="school-subnav" aria-label="School services sections"><div className="container"><Link href="/schools">School Services</Link><Link className="active" href="/schools/resources">Sample Questions</Link><Link href="/schools#school-consultation">Consultation</Link></div></nav>

    <section className="section"><div className="container">
      <div className="section-heading"><span className="eyebrow">Download library</span><h2>Choose a class and subject.</h2><p className="muted">These samples demonstrate the structure and quality of Datalog assessments. Schools can commission versions aligned precisely to their approved curriculum, scheme of work and assessment calendar.</p></div>
      <SchoolResourceLibrary />
    </div></section>

    <section className="section alt"><div className="container split"><div><span className="eyebrow">Need more than a sample?</span><h2>Commission a complete school assessment programme.</h2><p className="muted">Datalog can develop moderated question papers, marking guides, secure administration plans, item analysis, class and subject reports, and management recommendations for mid-term, terminal or end-of-session use.</p></div><div className="resource-actions"><Link className="btn" href="/schools#school-consultation">Discuss your school’s needs</Link><a className="secondary-btn" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20have%20reviewed%20the%20school%20sample%20questions%20and%20would%20like%20a%20customised%20assessment." target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></div></section>
  </main>;
}

