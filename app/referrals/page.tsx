import ReferralDashboard from '@/components/ReferralDashboard';

export const metadata={title:'Referral Circle | Datalog ICT',description:'Share Datalog ICT services and track verified referral activity and rewards.'};

export default function ReferralsPage(){return <main><section className="hub-hero"><div className="container"><span className="eyebrow">Datalog Referral Circle</span><h1>Share useful support. Earn verified rewards.</h1><p>Recommend Datalog resources, courses and professional services with your unique account link.</p></div></section><section className="section"><div className="container"><ReferralDashboard/></div></section></main>}
