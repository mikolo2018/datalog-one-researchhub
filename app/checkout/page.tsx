import Link from 'next/link';
import CheckoutForm from '@/components/CheckoutForm';
import {getCatalogItem} from '@/lib/catalog';

export const metadata={title:'Secure Checkout | Datalog ICT',description:'Complete a secure payment for a Datalog ICT resource, course, membership or professional service.'};

export default async function CheckoutPage({searchParams}:{searchParams:Promise<{item?:string;reference?:string}>}){
  const {item:slug,reference}=await searchParams;
  if(reference)return <main className="shell narrow"><section className="card auth-card success-card"><span className="success-mark">✓</span><h1>Payment received for verification</h1><p>Paystack is confirming reference <strong>{reference}</strong>. Your purchase or service access will appear in your dashboard after verification.</p><div className="hero-actions"><Link className="btn dark" href="/dashboard">Open dashboard</Link><Link className="secondary-btn" href="/marketplace">Continue browsing</Link></div></section></main>;
  const item=slug?getCatalogItem(slug):undefined;
  if(!item)return <main className="shell narrow"><section className="card auth-card"><h1>Select an item first</h1><p>Choose a resource, course, membership or service from the Datalog Marketplace.</p><Link className="btn dark" href="/marketplace">Open marketplace</Link></section></main>;
  return <main className="section"><div className="container checkout-layout"><div><Link className="back-link" href="/marketplace">← Back to marketplace</Link><span className="eyebrow">Datalog secure payment</span><h2>Complete your order</h2><ul className="checkout-benefits">{item.features.map(feature=><li key={feature}>✓ {feature}</li>)}</ul><p className="muted">Need clarification before paying? <Link className="inline-link" href="/consultation">Speak with a consultant.</Link></p></div><CheckoutForm item={item}/></div></main>;
}
