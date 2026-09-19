import Link from 'next/link';

export const metadata={title:'Expert Marketplace | Datalog ICT',description:'Book verified Datalog research, analytics, qualitative, GIS and publication specialists.'};

const experts=[
  ['Michael Samuel','Research Methods & Quantitative Analysis','Research design, educational research, SPSS, Stata, Excel, EViews, R and interpretation.','proposal-review'],
  ['Datalog Qualitative Desk','Qualitative Research','Interview design, coding frameworks, thematic analysis, NVivo and ATLAS.ti support.','data-analysis-deposit'],
  ['Datalog GIS Desk','GIS & Remote Sensing','Google Earth Engine, ArcGIS, spatial analysis and research cartography.','data-analysis-deposit'],
  ['Publication Support Desk','Manuscript Readiness','Structure, reporting, references, journal targeting and reviewer-response preparation.','publication-readiness']
];

export default function ExpertsPage(){return <main><section className="commerce-hero"><div className="container"><span className="eyebrow light">Verified support</span><h1>Book the right expertise for the difficult part.</h1><p>Datalog-managed specialists provide ethical guidance, analysis and review. The researcher remains responsible for academic decisions and final submission.</p></div></section><section className="section"><div className="container commerce-grid">{experts.map(([name,area,copy,item])=><article className="commerce-card expert-card" key={name}><span className="expert-avatar">{name.split(' ').map(x=>x[0]).slice(0,2).join('')}</span><span className="commerce-type">{area}</span><h2>{name}</h2><p>{copy}</p><div className="commerce-footer"><Link className="secondary-btn" href="/consultation">Ask a question</Link><Link className="btn dark" href={`/checkout?item=${item}`}>Book</Link></div></article>)}</div></section></main>}
