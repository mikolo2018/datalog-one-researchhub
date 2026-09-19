import Link from 'next/link';

export const metadata={title:'Research Opportunities | Datalog ICT',description:'Trusted starting points for scholarships, grants, conferences, journals and research careers.'};

const opportunities=[
  ['Scholarships','Commonwealth Scholarship Commission','Official postgraduate scholarship programmes and application guidance.','https://cscuk.fcdo.gov.uk/scholarships/'],
  ['Scholarships','DAAD Scholarship Database','Searchable funding opportunities for international study and research.','https://www.daad.de/en/studying-in-germany/scholarships/daad-scholarship-database/'],
  ['Research funding','EU Funding & Tenders Portal','Official European Commission calls, grants and tender opportunities.','https://ec.europa.eu/info/funding-tenders/opportunities/portal/'],
  ['Research funding','NIH Grants & Funding','Official information about health-research funding opportunities.','https://grants.nih.gov/'],
  ['Research careers','EURAXESS Jobs & Funding','Research vacancies, hosting and funding opportunities.','https://euraxess.ec.europa.eu/jobs'],
  ['Development data','World Bank Data & Research','Open data, publications and research resources for development studies.','https://www.worldbank.org/en/research']
];

export default function OpportunitiesPage(){return <main><section className="hub-hero"><div className="container"><span className="eyebrow">Opportunity Board</span><h1>Find the next credible opportunity.</h1><p>Use these official portals as reliable starting points. Always verify eligibility, deadlines and submission rules on the source website.</p></div></section><section className="section"><div className="container opportunity-list">{opportunities.map(([type,title,copy,url])=><article className="opportunity-row" key={title}><span className="commerce-type">{type}</span><div><h2>{title}</h2><p>{copy}</p></div><a className="secondary-btn" href={url} target="_blank" rel="noreferrer">Visit official source</a></article>)}</div></section><section className="section alt"><div className="container help-panel"><div><span className="eyebrow">Need application support?</span><h2>Prepare a clearer research proposal or presentation.</h2></div><Link className="btn dark" href="/services/order">Request professional support</Link></div></section></main>}
