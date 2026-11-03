'use client';

import { FormEvent, useMemo, useState } from 'react';

type Access = { id:string;status:string;plan:string;expires_at:string;issued_at:string;last_used_at?:string|null };
type RequestItem = {
  id:string;reference:string;request_type:string;applicant_type:string;full_name:string;email:string;phone:string;
  institution_name?:string|null;role_title?:string|null;plan?:string|null;billing_cycle?:string|null;estimated_learners?:number|null;
  message?:string|null;status:string;decision_note?:string|null;created_at:string;reviewed_at?:string|null;access?:Access|null;
};
type Issued = { code:string;expiresAt:string;request:RequestItem };

const nice = (value:string) => value.replaceAll('_',' ').replace(/\b\w/g,(letter)=>letter.toUpperCase());
const date = (value?:string|null) => value ? new Date(value).toLocaleString('en-NG',{timeZone:'Africa/Lagos',dateStyle:'medium',timeStyle:'short'}) : '—';

export default function MathoepediaAdminDashboard(){
  const [adminKey,setAdminKey]=useState('');
  const [requests,setRequests]=useState<RequestItem[]>([]);
  const [filter,setFilter]=useState('all');
  const [loading,setLoading]=useState(false);
  const [authenticated,setAuthenticated]=useState(false);
  const [error,setError]=useState('');
  const [issued,setIssued]=useState<Issued|null>(null);
  const [expiryDays,setExpiryDays]=useState('90');

  const counts=useMemo(()=>requests.reduce((total,item)=>{total.all++;total[item.status]=(total[item.status]||0)+1;return total},{all:0} as Record<string,number>),[requests]);

  async function api(method:'POST'|'PATCH',body:Record<string,unknown>){
    const response=await fetch('/api/mathoepedia/admin/requests',{method,headers:{'content-type':'application/json'},body:JSON.stringify({adminKey,...body})});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||'Administrative request failed.');
    return data;
  }

  async function load(event?:FormEvent){
    event?.preventDefault();setLoading(true);setError('');
    try{const data=await api('POST',{filter});setRequests(data.requests);setAuthenticated(true)}
    catch(cause){setError(cause instanceof Error?cause.message:'Unable to load requests.');setAuthenticated(false)}
    finally{setLoading(false)}
  }

  async function act(item:RequestItem,action:string,status?:string){
    setLoading(true);setError('');
    try{
      const data=await api('PATCH',{requestId:item.id,action,status,expiryDays:Number(expiryDays)});
      if(data.code)setIssued({code:data.code,expiresAt:data.expiresAt,request:item});
      await load();
    }catch(cause){setError(cause instanceof Error?cause.message:'Unable to update request.')}finally{setLoading(false)}
  }

  async function copyCode(){if(issued)await navigator.clipboard.writeText(issued.code)}
  const whatsapp=(item:RequestItem,code?:string)=>'https://wa.me/'+item.phone.replace(/\D/g,'')+'?text='+encodeURIComponent(code
    ? 'Hello '+item.full_name+', your Mathoepedia teacher access has been approved. Your private teacher code is '+code+'. It expires on '+new Date(issued!.expiresAt).toLocaleDateString('en-NG')+'. Open https://datalogict.com/schools/mathoepedia/live and keep this code private.'
    : 'Hello '+item.full_name+', we are reviewing your Mathoepedia request '+item.reference+'.');

  if(!authenticated)return <form className="matho-admin-login" onSubmit={load}><span className="eyebrow">Restricted administration</span><h2>Open the Mathoepedia request dashboard</h2><p>Enter the administrator key. Applicant records and teacher codes are never loaded until the key is verified.</p><label>Administrator key<input type="password" value={adminKey} onChange={(event)=>setAdminKey(event.target.value)} required autoComplete="current-password" /></label><button className="btn" disabled={loading}>{loading?'Verifying…':'Open dashboard'}</button>{error&&<p className="live-error">{error}</p>}</form>;

  return <section className="matho-admin-shell">
    <div className="matho-admin-head"><div><span className="eyebrow">Mathoepedia administration</span><h2>Teacher access requests</h2></div><div><select aria-label="Filter requests" value={filter} onChange={(event)=>setFilter(event.target.value)}><option value="all">All requests</option><option value="pending">Pending</option><option value="contacted">Contacted</option><option value="approved">Approved</option><option value="active">Active</option><option value="declined">Declined</option></select><button type="button" className="secondary-btn" onClick={()=>load()} disabled={loading}>Refresh</button><button type="button" className="secondary-btn" onClick={()=>{setAuthenticated(false);setAdminKey('');setRequests([])}}>Lock dashboard</button></div></div>
    <div className="matho-admin-metrics"><article><span>Loaded</span><strong>{counts.all||0}</strong></article><article><span>Pending</span><strong>{counts.pending||0}</strong></article><article><span>Active</span><strong>{counts.active||0}</strong></article><article><span>Contacted</span><strong>{counts.contacted||0}</strong></article></div>
    <div className="matho-admin-filter"><button className={filter==='all'?'active':''} onClick={()=>setFilter('all')}>All</button>{['pending','contacted','approved','active','declined'].map(status=><button key={status} className={filter===status?'active':''} onClick={()=>setFilter(status)}>{nice(status)}</button>)}<button className="btn" onClick={()=>load()} disabled={loading}>Apply filter</button></div>
    {issued&&<div className="matho-issued-code"><div><span>Teacher code generated</span><strong>{issued.code}</strong><p>Expires {date(issued.expiresAt)}. Copy it now; only its secure hash is retained.</p></div><div><button className="secondary-btn" onClick={copyCode}>Copy code</button><a className="btn" href={whatsapp(issued.request,issued.code)} target="_blank" rel="noreferrer">Send by WhatsApp</a><button className="secondary-btn" onClick={()=>setIssued(null)}>Close</button></div></div>}
    {error&&<p className="live-error">{error}</p>}
    <div className="matho-request-list">{requests.length===0?<div className="matho-empty">No requests match this filter.</div>:requests.map(item=><article className="matho-request-card" key={item.id}>
      <header><div><span>{item.reference}</span><h3>{item.full_name}</h3><p>{item.role_title||nice(item.applicant_type)}{item.institution_name?' · '+item.institution_name:''}</p></div><b className={'status-'+item.status}>{nice(item.status)}</b></header>
      <div className="matho-request-grid"><dl><dt>Request</dt><dd>{nice(item.request_type)}</dd><dt>Plan</dt><dd>{item.plan?nice(item.plan):'Access code'}{item.billing_cycle?' · '+nice(item.billing_cycle):''}</dd><dt>Learners</dt><dd>{item.estimated_learners||'Not stated'}</dd><dt>Submitted</dt><dd>{date(item.created_at)}</dd></dl><div><a href={'mailto:'+item.email}>{item.email}</a><a href={'tel:'+item.phone}>{item.phone}</a>{item.message&&<p>{item.message}</p>}</div></div>
      {item.access&&<div className="matho-access-record"><span>Access: <strong>{nice(item.access.status)}</strong></span><span>Expires: <strong>{date(item.access.expires_at)}</strong></span><span>Last used: <strong>{date(item.access.last_used_at)}</strong></span></div>}
      <footer><a className="secondary-btn" href={whatsapp(item)} target="_blank" rel="noreferrer">Contact</a><button className="secondary-btn" onClick={()=>act(item,'set_status','contacted')} disabled={loading}>Mark contacted</button><select aria-label="Code validity" value={expiryDays} onChange={(event)=>setExpiryDays(event.target.value)}><option value="30">30 days</option><option value="90">90 days</option><option value="180">180 days</option><option value="365">1 year</option></select><button className="btn" onClick={()=>act(item,'issue_code')} disabled={loading}>{item.access?'Replace code':'Approve & generate code'}</button>{item.access?.status==='active'?<button className="danger-btn" onClick={()=>act(item,'suspend')} disabled={loading}>Suspend</button>:item.access&&<button className="secondary-btn" onClick={()=>act(item,'activate')} disabled={loading}>Reactivate</button>}<button className="danger-link" onClick={()=>act(item,'set_status','declined')} disabled={loading}>Decline</button></footer>
    </article>)}</div>
  </section>;
}
