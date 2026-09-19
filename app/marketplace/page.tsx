import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata={title:'Marketplace | Datalog ICT',description:'Research resources, professional services, courses, memberships and opportunities from Datalog ICT.'};

const sections=[
  ['Digital Shop','Editable research templates, analysis workbooks and defence resources.','/shop','Buy and download'],
  ['Professional Services','Submit a project, attach files securely and receive a reviewed quotation.','/services/order','Start an order'],
  ['Courses & Certificates','Learn practical research, analytics and dashboard skills.','/courses','View courses'],
  ['Premium Membership','Get recurring access to tools, clinics, templates and discounts.','/membership','Compare plans'],
  ['Expert Marketplace','Book a verified Datalog specialist or service desk.','/experts','Find an expert'],
  ['Opportunity Board','Find trusted scholarship, grant, conference and research portals.','/opportunities','Explore opportunities'],
  ['Institutional Solutions','Assessment, training, research and analytics for schools and organisations.','/institutional','Request a proposal'],
  ['Referral Circle','Recommend Datalog and earn verified referral rewards.','/referrals','View referrals']
];

export default function MarketplacePage(){return <main><section className="commerce-hero"><div className="container hero-grid"><div><span className="eyebrow light">Datalog Marketplace</span><h1>Research tools, expertise and learning—together.</h1><p>Purchase practical resources, commission professional work, build new skills and access ongoing research support from one trusted platform.</p><div className="hero-actions"><Link className="btn" href="/shop">Visit the digital shop</Link><Link className="secondary-light" href="/services/order">Submit a project</Link></div></div><div className="revenue-stack"><span>Small, useful digital products</span><span>Secure professional service orders</span><span>Recurring membership and training</span></div></div></section><section className="section"><div className="container commerce-grid portal-grid">{sections.map(([title,copy,href,action])=><article className="commerce-card portal-card" key={title}><h2>{title}</h2><p>{copy}</p><Link className="text-link blog-link" href={href}>{action} →</Link></article>)}</div></section><section className="newsletter"><div className="container split"><div><span className="eyebrow light">Research opportunity alerts</span><h2>Receive useful resources and verified opportunities.</h2><p>Periodic updates on training, new templates, datasets, calls and Datalog events.</p></div><NewsletterForm/></div></section></main>}
