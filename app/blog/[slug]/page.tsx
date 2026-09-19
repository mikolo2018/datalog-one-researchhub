import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {articles,getArticle} from '@/lib/articles';

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const article=getArticle(slug);
  if(!article)return {title:'Article not found | Datalog ICT'};
  return {title:`${article.title} | Datalog ICT`,description:article.excerpt};
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=getArticle(slug);
  if(!article)notFound();
  const schema={'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.excerpt,datePublished:article.publishedISO,author:{'@type':'Organization',name:article.author},publisher:{'@type':'Organization',name:'Datalog ICT & General Merchandise Ltd.'},mainEntityOfPage:`https://datalogict.com/blog/${article.slug}`};
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><article><header className="article-hero"><div className="container article-width"><Link className="back-link" href="/blog">← All articles</Link><span className="article-category">{article.category}</span><h1>{article.title}</h1><p className="article-deck">{article.excerpt}</p><div className="article-meta"><span>{article.author}</span><span>{article.published}</span><span>{article.readTime}</span></div></div></header><div className="container article-width article-body">{article.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.points&&<ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul>}</section>)}<section className="article-references"><h2>Useful references</h2><ul>{article.references.map(reference=><li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a></li>)}</ul></section><aside className="article-cta"><div><strong>Apply this guidance to your research.</strong><p>Datalog ICT provides research support, data analysis and publication assistance.</p></div><Link className="btn" href="/services/order">Discuss your project</Link></aside></div></article></main>
}
