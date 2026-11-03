import type { Metadata } from 'next';
import Link from 'next/link';
import MathoepediaAccessRequest from '@/components/MathoepediaAccessRequest';

export const metadata: Metadata = {
  title: 'Mathoepedia Teacher Access & Subscription | Datalog ICT',
  description: 'Request a Mathoepedia teacher access code or register interest in an individual teacher or institution subscription.',
};

export default function MathoepediaAccessPage() {
  return <main>
    <section className="matho-access-hero"><div className="container"><span className="eyebrow light">Mathoepedia Teacher Access</span><h1>Host better mathematics practice with secure teacher access.</h1><p>Request an approved teacher code or register your school, tutorial centre or institution for continued Mathoepedia access.</p></div></section>
    <nav className="school-subnav" aria-label="School resources sections"><div className="container"><Link href="/schools">School Services</Link><Link href="/schools/resources">Assessment Samples</Link><Link href="/schools/mathoepedia">Question Library</Link><Link href="/schools/mathoepedia/live">Live Quiz</Link><Link className="active" href="/schools/mathoepedia/access">Teacher Access</Link><Link href="/schools/mathoepedia/admin">Admin Requests</Link></div></nav>
    <section className="section"><div className="container"><MathoepediaAccessRequest /></div></section>
    <section className="section alt"><div className="container"><div className="section-heading"><span className="eyebrow">How approval works</span><h2>From request to active Mathoepedia access.</h2></div><div className="grid grid3"><article className="card"><span className="matho-step">01</span><h3>Submit your details</h3><p>Choose access-code approval or a teacher/institution subscription and provide a reachable contact.</p></article><article className="card"><span className="matho-step">02</span><h3>Verification and plan confirmation</h3><p>Datalog ICT verifies the teacher or institution and confirms the appropriate access, billing and onboarding arrangement.</p></article><article className="card"><span className="matho-step">03</span><h3>Activate and host</h3><p>Use the approved teacher key to create timed quizzes, monitor performance and export Excel and PDF records.</p></article></div></div></section>
  </main>;
}
