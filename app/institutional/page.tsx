import type { Metadata } from 'next';
import Link from 'next/link';

import InstitutionalForm from '@/components/InstitutionalForm';

export const metadata: Metadata = {
  title: 'Institutional Research & Training | Datalog ICT',
  description: 'Research, assessment, analytics, dashboards and staff development for schools, businesses, government agencies and NGOs.',
};

export default function InstitutionalPage() {
  return <main>
    <section className="commerce-hero"><div className="container"><span className="eyebrow light">Schools & organisations</span><h1>Institutional evidence and capacity solutions.</h1><p>External assessment, staff training, research, dashboards and decision support designed around your organisation.</p></div></section>
    <section className="section"><div className="container split"><div className="institution-list"><h2>Available solutions</h2><p><strong>School assessment:</strong> curriculum-based external evaluation, scheme-of-work review and performance reporting for primary and secondary schools.</p><p><strong>Staff development:</strong> Excel, SPSS, Power BI, research methods and responsible AI.</p><p><strong>Organisational research:</strong> surveys, monitoring, evaluation and analytical reporting.</p><p><strong>Dashboards:</strong> practical performance indicators for leadership decisions.</p><Link className="btn dark" href="/schools">View complete school services</Link></div><InstitutionalForm /></div></section>
  </main>;
}
