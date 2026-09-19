import Link from 'next/link';
import {CatalogItem,formatNaira,kindLabels} from '@/lib/catalog';

export default function CatalogGrid({items,action='Get access'}:{items:CatalogItem[];action?:string}){
  return <div className="commerce-grid">{items.map(item=><article className="commerce-card" key={item.slug}>{item.badge&&<span className="commerce-badge">{item.badge}</span>}<span className="commerce-type">{kindLabels[item.kind]}</span><h2>{item.name}</h2><p>{item.summary}</p><ul>{item.features.map(feature=><li key={feature}>{feature}</li>)}</ul><div className="commerce-footer"><strong>{formatNaira(item.priceNaira)}{item.recurring&&<small> / {item.recurring==='monthly'?'month':'year'}</small>}</strong><Link className="btn dark" href={`/checkout?item=${item.slug}`}>{action}</Link></div></article>)}</div>
}
