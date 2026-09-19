'use client';
import {FormEvent,useState} from 'react';
import {CatalogItem,formatNaira} from '@/lib/catalog';

export default function CheckoutForm({item}:{item:CatalogItem}){
  const [message,setMessage]=useState('');
  const [loading,setLoading]=useState(false);
  async function pay(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setLoading(true);setMessage('');
    const form=new FormData(event.currentTarget);
    const response=await fetch('/api/paystack/initialize',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:form.get('email'),itemSlug:item.slug,customerName:form.get('name'),phone:form.get('phone'),referralCode:form.get('referralCode')})});
    const result=await response.json();
    if(result.authorization_url)window.location.href=result.authorization_url;
    else setMessage(result.error||'Unable to start payment. Please try again.');
    setLoading(false);
  }
  return <form className="card checkout-card stack" onSubmit={pay}><div className="checkout-summary"><span className="commerce-type">Secure checkout</span><h1>{item.name}</h1><p>{item.summary}</p><strong>{formatNaira(item.priceNaira)}{item.recurring&&<small> / month</small>}</strong></div><label>Full name<input name="name" autoComplete="name" required/></label><label>Email address<input name="email" type="email" autoComplete="email" required/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required/></label><label>Referral code <span className="optional">(optional)</span><input name="referralCode"/></label><button className="btn dark" disabled={loading}>{loading?'Connecting securely…':`Pay ${formatNaira(item.priceNaira)}`}</button><p className="checkout-note">Payment is processed securely by Paystack. Membership renewals are enabled when the corresponding Paystack plan is configured.</p>{message&&<p className="notice">{message}</p>}</form>
}
