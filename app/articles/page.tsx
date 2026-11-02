import Link from 'next/link';
import Script from 'next/script';
import styles from './articles.module.css';

export const metadata={
  title:'Articles on X | Datalog ICT',
  description:'Read the latest research, education, data analysis and digital transformation articles published by Datalog ICT on X.',
  alternates:{canonical:'/articles'},
  openGraph:{
    title:'Datalog ICT Articles',
    description:'Research, education, analytics and digital transformation insights from Datalog ICT.',
    url:'/articles',
    type:'website'
  }
};

const xArticles=[
  {id:'2117255298163327138',url:'https://x.com/datalogict/status/2117255298163327138',label:'Featured publication 01'},
  {id:'2083969056877510683',url:'https://x.com/datalogict/status/2083969056877510683',label:'Featured publication 02'}
];

export default function ArticlesPage(){
  return <main>
    <section className={styles.hero}>
      <div className="container">
        <span className="eyebrow">Datalog ICT on X</span>
        <h1>Ideas, evidence and practical insight.</h1>
        <p>Explore Datalog ICT publications on research, education, data analysis and digital transformation. Each article opens directly on X for the complete reading experience and conversation.</p>
        <div className={styles.heroActions}>
          <a className="btn" href="https://x.com/datalogict" target="_blank" rel="noreferrer">Follow @datalogict on X</a>
          <Link className={styles.secondaryAction} href="/blog">Browse the Datalog blog</Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className={styles.sectionHeading}>
          <div><span className="eyebrow">Latest publications</span><h2>From our X account</h2></div>
          <p>Official posts from <strong>@datalogict</strong>. If an embed is unavailable, use the direct “Read on X” link.</p>
        </div>
        <div className={styles.grid}>
          {xArticles.map((article)=><article className={styles.card} key={article.id}>
            <header><span>{article.label}</span><a href="https://x.com/datalogict" target="_blank" rel="noreferrer">@datalogict</a></header>
            <div className={styles.embed}>
              <blockquote className="twitter-tweet" data-theme="light" data-dnt="true" data-align="center">
                <a href={article.url}>View this Datalog ICT publication on X</a>
              </blockquote>
            </div>
            <footer>
              <a className="btn dark" href={article.url} target="_blank" rel="noreferrer">Read on X ↗</a>
              <span>Opens the original publication</span>
            </footer>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container help-panel">
        <div><span className="eyebrow">Research and analytical support</span><h2>Turn a useful idea into defensible work.</h2><p className="muted">Discuss your research design, data analysis, publication or professional training needs with Datalog ICT.</p></div>
        <Link className="btn dark" href="/consultation">Book a consultation</Link>
      </div>
    </section>
    <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
  </main>;
}
