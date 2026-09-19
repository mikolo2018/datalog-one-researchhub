'use client';
import {FormEvent,useState} from 'react';

export default function NewsletterForm(){
  const [message,setMessage]=useState('');
  async function subscribe(event:FormEvent<HTMLFormElement>){
    event.preventDefault();const form=new FormData(event.currentTarget);
    const response=await fetch('/api/newsletter',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:form.get('email'),name:form.get('name')})});
    const result=await response.json();setMessage(result.error||'You are subscribed to Datalog research updates.');
    if(response.ok)event.currentTarget.reset();
  }
  return <form className="newsletter-form" onSubmit={subscribe}><div><label htmlFor="newsletter-name">Name</label><input id="newsletter-name" name="name" required/></div><div><label htmlFor="newsletter-email">Email</label><input id="newsletter-email" name="email" type="email" required/></div><button className="btn">Subscribe</button>{message&&<p>{message}</p>}</form>
}
