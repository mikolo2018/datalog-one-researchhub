'use client';

import {useState} from 'react';

const topicMap:Record<string,string[]> = {
  Education:['Digital learning readiness and academic engagement among tertiary students','Teacher technological-pedagogical competence and classroom innovation','Mathematics anxiety, self-efficacy and achievement among secondary school students'],
  'Business & Management':['Data-driven decision-making and operational performance of SMEs','Digital marketing capability and customer retention in service firms','Employee analytics adoption and organisational performance'],
  'Economics & Finance':['Digital financial services and financial inclusion in emerging economies','Macroeconomic volatility and commercial bank performance','Financial technology adoption and household savings behaviour'],
  'Health Sciences':['Digital health literacy and preventive health-seeking behaviour','Patient waiting time, service quality and satisfaction in public facilities','Health information access and medication adherence among adults'],
  'Environmental Science':['Urban growth, land-use change and environmental vulnerability','Climate variability and agricultural productivity using secondary data','Waste-management practices and pro-environmental behaviour'],
  'Geology & GIS':['GIS-based assessment of land-use change and environmental risk','Remote-sensing analysis of urban expansion and surface temperature','Geospatial modelling of flood susceptibility using open datasets'],
  ICT:['Artificial intelligence adoption and productivity in knowledge work','Cybersecurity awareness and safe digital behaviour among students','Cloud technology adoption and performance of small enterprises']
};

const datasetMap:Record<string,[string,string,string][]> = {
  'Economics & Finance':[['World Bank Open Data','https://data.worldbank.org/','Macroeconomic, development and finance indicators'],['IMF Data','https://www.imf.org/en/Data','Fiscal, monetary and external-sector indicators'],['Central Bank of Nigeria','https://www.cbn.gov.ng/','Nigeria banking, monetary and economic statistics'],['National Bureau of Statistics Nigeria','https://www.nigerianstat.gov.ng/','Official Nigerian economic and household statistics']],
  Health:[['WHO Global Health Observatory','https://www.who.int/data/gho','Health outcomes, systems and risk factors'],['DHS Program','https://dhsprogram.com/data/','Population and health survey microdata']],
  Education:[['UNESCO UIS','https://uis.unesco.org/','International education indicators'],['World Bank Education Statistics','https://databank.worldbank.org/','Cross-country education indicators']],
  'Environment & Climate':[['NASA Earthdata','https://earthdata.nasa.gov/','Satellite and earth-observation data'],['Copernicus Climate Data Store','https://cds.climate.copernicus.eu/','Climate reanalysis and environmental data']],
  Agriculture:[['FAOSTAT','https://www.fao.org/faostat/','Agriculture, food, land and production statistics'],['World Bank Open Data','https://data.worldbank.org/','Agriculture and rural-development indicators']],
  Geospatial:[['USGS EarthExplorer','https://earthexplorer.usgs.gov/','Landsat and remote-sensing products'],['Copernicus Data Space','https://dataspace.copernicus.eu/','Sentinel satellite data'],['OpenStreetMap','https://www.openstreetmap.org/','Open roads, places and infrastructure data']]
};

export default function ResearchHubTools(){
  const [tab,setTab]=useState('topics');
  const [discipline,setDiscipline]=useState('Education');
  const [level,setLevel]=useState('Undergraduate');
  const [method,setMethod]=useState('Quantitative');
  const [topics,setTopics]=useState<string[]>([]);
  const [field,setField]=useState('Economics & Finance');
  const [showDatasets,setShowDatasets]=useState(false);
  const [goal,setGoal]=useState('difference2');
  const [outcome,setOutcome]=useState('continuous');
  const [test,setTest]=useState('');
  const [population,setPopulation]=useState('');
  const [confidence,setConfidence]=useState('1.96');
  const [margin,setMargin]=useState('5');
  const [sample,setSample]=useState<number|null>(null);

  function recommend(){
    let r='';
    if(goal==='difference2') r=outcome==='continuous'?'Independent-samples t-test; use a paired t-test for repeated measurements.':'Chi-square test; consider binary logistic regression when adjustment is needed.';
    if(goal==='difference3') r=outcome==='continuous'?'One-way ANOVA; consider Kruskal–Wallis when assumptions are unsuitable.':'Chi-square test; consider multinomial or binary logistic regression for adjusted modelling.';
    if(goal==='association') r='Chi-square test of independence; Fisher’s exact test may be preferable with small expected cell counts.';
    if(goal==='correlation') r='Pearson correlation for approximately linear continuous relationships; Spearman correlation for ordinal, non-normal or monotonic relationships.';
    if(goal==='prediction') r=outcome==='continuous'?'Multiple linear regression.':'Binary logistic regression for two categories; multinomial or ordinal logistic regression for suitable multi-category outcomes.';
    setTest(r);
  }

  function calculate(){
    const z=Number(confidence),e=Number(margin)/100,p=.5,N=Number(population);
    const n0=(z*z*p*(1-p))/(e*e);
    const n=N>0?n0/(1+(n0-1)/N):n0;
    setSample(Math.ceil(n));
  }

  return <section className="section"><div className="container">
    <div className="tool-tabs">{[['topics','Project Topics'],['datasets','Dataset Finder'],['tests','Test Selector'],['sample','Sample Size'],['methods','Methodology Guide'],['help','Research Assistance']].map(([id,label])=><button key={id} className={'tool-tab '+(tab===id?'active':'')} onClick={()=>setTab(id)}>{label}</button>)}</div>
    <div className="tool-shell">
      {tab==='topics'&&<div className="tool-grid"><div className="form"><label>Discipline<select value={discipline} onChange={e=>setDiscipline(e.target.value)}>{Object.keys(topicMap).map(x=><option key={x}>{x}</option>)}</select></label><label>Level<select value={level} onChange={e=>setLevel(e.target.value)}><option>Undergraduate</option><option>Postgraduate</option><option>Master's</option><option>PhD</option></select></label><label>Method<select value={method} onChange={e=>setMethod(e.target.value)}><option>Quantitative</option><option>Qualitative</option><option>Mixed Methods</option><option>Secondary Data</option></select></label><button className="btn dark" onClick={()=>setTopics(topicMap[discipline])}>Generate Topics</button></div><div className="result-box"><h3>Suggested topics</h3>{topics.length?<ol>{topics.map((x,i)=><li key={i}>{x} — a {method.toLowerCase()} study suitable for {level.toLowerCase()} research.</li>)}</ol>:<p>Select your preferences and generate a research-ready starting list.</p>}<p><strong>Next step:</strong> refine location, population, variables, feasibility and data access before approval.</p></div></div>}
      {tab==='datasets'&&<div className="tool-grid"><div className="form"><label>Field<select value={field} onChange={e=>{setField(e.target.value);setShowDatasets(false)}}>{Object.keys(datasetMap).map(x=><option key={x}>{x}</option>)}</select></label><button className="btn dark" onClick={()=>setShowDatasets(true)}>Find Datasets</button></div><div className="result-box"><h3>Open-access data sources</h3>{showDatasets?<ul>{datasetMap[field].map(([n,u,d])=><li key={n}><a href={u} target="_blank" rel="noreferrer"><strong>{n}</strong></a> — {d}</li>)}</ul>:<p>Choose a field to see reliable repositories and possible research uses.</p>}<p>Review variable definitions, licences, coverage and missing-data patterns before selecting a dataset.</p></div></div>}
      {tab==='tests'&&<div className="tool-grid"><div className="form"><label>Main research goal<select value={goal} onChange={e=>setGoal(e.target.value)}><option value="difference2">Compare two groups</option><option value="difference3">Compare three or more groups</option><option value="association">Association between categorical variables</option><option value="correlation">Relationship between numeric variables</option><option value="prediction">Predict an outcome</option></select></label><label>Outcome type<select value={outcome} onChange={e=>setOutcome(e.target.value)}><option value="continuous">Continuous / scale</option><option value="categorical">Categorical</option></select></label><button className="btn dark" onClick={recommend}>Recommend Test</button></div><div className="result-box"><h3>Statistical test recommendation</h3><p>{test||'Answer the questions to get a suitable starting recommendation.'}</p><p>Final choice still depends on design, independence, distribution, measurement level, sample size and model assumptions.</p></div></div>}
      {tab==='sample'&&<div className="tool-grid"><div className="form"><label>Population size (optional)<input type="number" min="1" value={population} onChange={e=>setPopulation(e.target.value)} placeholder="e.g. 5000"/></label><label>Confidence level<select value={confidence} onChange={e=>setConfidence(e.target.value)}><option value="1.96">95%</option><option value="2.576">99%</option><option value="1.645">90%</option></select></label><label>Margin of error (%)<input type="number" min="1" max="20" value={margin} onChange={e=>setMargin(e.target.value)}/></label><button className="btn dark" onClick={calculate}>Calculate</button></div><div className="result-box"><h3>{sample?'Estimated minimum sample: '+sample:'Sample size estimate'}</h3><p>Uses Cochran's formula for proportions with p = .50 and applies finite population correction when population size is supplied.</p><p>Add an allowance for non-response and use power analysis when the planned inferential model requires it.</p></div></div>}
      {tab==='methods'&&<div className="grid grid3"><div className="card"><h3>Quantitative</h3><p>For measuring variables, testing hypotheses, estimating effects or comparing groups using numerical data.</p><strong>Typical designs</strong><p>Survey, experiment, quasi-experiment, correlational and panel/secondary-data studies.</p></div><div className="card"><h3>Qualitative</h3><p>For understanding meanings, experiences, processes and context in depth.</p><strong>Typical designs</strong><p>Case study, phenomenology, interviews, focus groups and document analysis.</p></div><div className="card"><h3>Mixed Methods</h3><p>Combines numerical patterns with contextual explanation when one data type alone is insufficient.</p><strong>Typical designs</strong><p>Convergent, explanatory sequential and exploratory sequential.</p></div></div>}
      {tab==='help'&&<div className="help-panel"><div><span className="eyebrow">Need expert support?</span><h2>Turn the free tool result into a defensible research project.</h2><p>Datalog can support topic refinement, proposal development, methodology, data analysis, interpretation, presentation and publication preparation.</p></div><a className="btn dark" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20used%20the%20Research%20Hub%20and%20would%20like%20professional%20research%20assistance." target="_blank" rel="noreferrer">Request Research Assistance</a></div>}
    </div>
  </div></section>
}