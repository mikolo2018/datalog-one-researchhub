import type { Metadata } from 'next';
import Link from 'next/link';
import MathoepediaAdminDashboard from '@/components/MathoepediaAdminDashboard';

export const metadata: Metadata = {
  title: 'Mathoepedia Administration | Datalog ICT',
  description: 'Protected administration for Mathoepedia teacher requests and subscription access.',
  robots: { index: false, follow: false },
};

export default function MathoepediaAdminPage(){
  return <main>
    <section className="matho-admin-hero"><div className="container"><span className="eyebrow light">Datalog ICT Administration</span><h1>Review requests and control Mathoepedia teacher access.</h1><p>Verify applicants, issue private teacher codes, set expiry dates and suspend or renew access from one protected dashboard.</p></div></section>
    <nav className="school-subnav" aria-label="Mathoepedia administration navigation"><div className="container"><Link href="/schools/mathoepedia">Question Library</Link><Link href="/schools/mathoepedia/live">Live Quiz</Link><Link href="/schools/mathoepedia/access">Teacher Access</Link><Link className="active" href="/schools/mathoepedia/admin">Admin Requests</Link></div></nav>
    <section className="section"><div className="container"><MathoepediaAdminDashboard /></div></section>
  </main>;
}
