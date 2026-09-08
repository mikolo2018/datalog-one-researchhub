import Link from 'next/link';

const services = [
  ['Data Analysis','SPSS, Stata, Excel, EViews, R, Python, Power BI, NVivo and related quantitative or qualitative workflows.'],
  ['Research Assistance','Topic refinement, proposal support, methodology, instruments, results interpretation and academic presentation guidance.'],
  ['Journal & Publication Support','Manuscript preparation, formatting, reference management, journal targeting and reviewer-response support.'],
  ['ICT & Analytics Training','Practical individual and group training in data tools, research methods, dashboards and responsible AI use.'],
  ['Business Analytics','Survey analysis, dashboards, reporting and evidence-based decision support for organisations and SMEs.'],
  ['Consultancy','Custom research, technical documentation, digital strategy, presentations and analytical solutions.']
];

export default function Home(){
  return <main>
    <section className="hero corporate-hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Research • Data • Training • Digital Solutions</span>
          <h1>Research. Analyse. Publish. <span>Grow.</span></h1>
          <p>Professional research support, data analysis, academic training and digital solutions for students, researchers, institutions and businesses.</p>
          <div className="hero-actions"><Link className="btn dark" href="/research-hub">Explore Research Hub</Link><Link className="btn" href="/consultation">Start a Project</Link></div>
          <div className="trust-row"><span>✓ Practical guidance</span><span>✓ Confidential support</span><span>✓ Evidence-led analysis</span></div>
        </div>
        <aside className="hero-card">
          <span className="badge">DATALOG RESEARCH HUB</span>
          <h2>Free tools for better research decisions.</h2>
          <p>Find topics, identify datasets, choose statistical tests, estimate sample sizes and plan your methodology.</p>
          <Link className="text-link" href="/research-hub">Open the Research Hub →</Link>
        </aside>
      </div>
    </section>
    <section className="section" id="services"><div className="container"><div className="section-heading"><span className="eyebrow">What we do</span><h2>Professional support from idea to insight.</h2></div><div className="grid grid3">{services.map(([h,p])=><article className="card service-card" key={h}><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section alt" id="research"><div className="container split"><div><span className="eyebrow">Datalog Research Hub</span><h2>One research platform inside the Datalog website.</h2><p className="muted">Use free research tools, save work through your account, run a diagnostic, then escalate difficult decisions to a Datalog consultant when needed.</p><Link className="btn dark" href="/research-hub">Explore all research tools</Link></div><div className="grid grid2"><Link className="card" href="/topic-finder"><h3>Project Topic Finder</h3><p>Discover focused, researchable starting points.</p></Link><Link className="card" href="/diagnostic"><h3>Research Diagnostic</h3><p>Check alignment and identify weaknesses early.</p></Link><Link className="card" href="/dashboard"><h3>Research Dashboard</h3><p>Access your saved research workspace.</p></Link><Link className="card" href="/consultation"><h3>Expert Consultation</h3><p>Get professional support for complex work.</p></Link></div></div></section>
    <section className="section" id="training"><div className="container split"><div><span className="eyebrow">Training</span><h2>Learn practical data and research skills.</h2><p className="muted">Training can cover Excel, SPSS, Stata, EViews, R, Python, Power BI, qualitative analysis, research methods and responsible AI for students, researchers and professionals.</p><Link className="btn dark" href="/consultation">Enquire about training</Link></div><div className="card feature-list"><strong>Practical-first</strong><span>Examples, exercises and real research workflows.</span><strong>Flexible delivery</strong><span>Online individual or group training options.</span><strong>Research-to-consultancy</strong><span>Build skills that transfer into academic and professional work.</span></div></div></section>
    <section className="section dark-section" id="about"><div className="container split"><div><span className="eyebrow light">About Datalog ICT</span><h2>Evidence, clarity and practical digital solutions.</h2></div><div><p>Datalog ICT & General Merchandise Ltd is a Nigerian company providing professional data analysis, research support, ICT training and business consultancy services.</p><p>We support students, researchers, academic institutions, professionals and organisations in transforming research questions and raw data into meaningful evidence for decision-making.</p><p><strong>Abeokuta, Ogun State, Nigeria</strong></p></div></div></section>
    <section className="section" id="contact"><div className="container contact-block"><div><span className="eyebrow">Contact</span><h2>Tell us what you are working on.</h2><p className="muted">Research assistance, data analysis, training, consultancy and institutional support.</p></div><div className="contact-actions"><a className="btn dark" href="https://wa.me/2348166414241?text=Hello%20Datalog%20ICT%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">WhatsApp Datalog</a><a className="secondary-btn" href="mailto:milkyades18@gmail.com">milkyades18@gmail.com</a><span>+234 816 641 4241</span></div></div></section>
  </main>
}