'use client';
import {FormEvent,useState} from 'react';
import {createSupabaseBrowserClient} from '@/lib/supabase-browser';
import {getCatalogByKind} from '@/lib/catalog';

const services=getCatalogByKind('service');

export default function ServiceOrderForm(){
  const [message,setMessage]=useState('');
  const [loading,setLoading]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setLoading(true);setMessage('');
    const form=new FormData(event.currentTarget);const file=form.get('file') as File;let filePath:string|undefined;
    if(file?.size){
      if(file.size>10*1024*1024){setMessage('Please upload a file smaller than 10 MB.');setLoading(false);return;}
      const supabase=createSupabaseBrowserClient();const {data}=await supabase?.auth.getUser()||{data:{user:null}};
      if(!supabase||!data.user){setMessage('Please sign in before attaching a confidential project file. You can submit the order without the file.');setLoading(false);return;}
      const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,'-');filePath=`${data.user.id}/${crypto.randomUUID()}-${safeName}`;
      const {error}=await supabase.storage.from('client-files').upload(filePath,file,{upsert:false});
      if(error){setMessage(error.message);setLoading(false);return;}
    }
    const payload={serviceSlug:form.get('serviceSlug'),name:form.get('name'),email:form.get('email'),phone:form.get('phone'),projectTitle:form.get('projectTitle'),description:form.get('description'),deadline:form.get('deadline'),budgetRange:form.get('budgetRange'),filePath};
    const response=await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();
    setMessage(result.error||`Request ${result.orderNumber} received. We will review it and send the final scope and balance.`);if(response.ok)event.currentTarget.reset();setLoading(false);
  }
  return <form className="card stack order-form" onSubmit={submit}><label>Service<select name="serviceSlug" required>{services.map(service=><option value={service.slug} key={service.slug}>{service.name}</option>)}</select></label><div className="form-two"><label>Full name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label></div><div className="form-two"><label>Phone<input name="phone" type="tel" required/></label><label>Preferred completion date<input name="deadline" type="date"/></label></div><label>Project title or organisation<input name="projectTitle" required/></label><label>Describe the work required<textarea name="description" rows={6} required/></label><label>Expected budget<select name="budgetRange"><option>₦15,000–₦50,000</option><option>₦50,001–₦150,000</option><option>₦150,001–₦300,000</option><option>Above ₦300,000</option></select></label><label>Supporting file <span className="optional">(optional; sign-in required)</span><input name="file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.sav,.dta,.zip"/></label><button className="btn dark" disabled={loading}>{loading?'Submitting…':'Submit project request'}</button>{message&&<p className="notice">{message}</p>}</form>
}
