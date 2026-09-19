'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {createSupabaseBrowserClient} from '@/lib/supabase-browser';

type ReferralState={code:string;clicks:number;conversions:number;rewards:number;loading:boolean};

export default function ReferralDashboard(){
  const [state,setState]=useState<ReferralState>({code:'',clicks:0,conversions:0,rewards:0,loading:true});const [copied,setCopied]=useState(false);
  useEffect(()=>{(async()=>{const db=createSupabaseBrowserClient();const {data}=await db?.auth.getUser()||{data:{user:null}};if(!db||!data.user){setState(s=>({...s,loading:false}));return;}const [profile,referrals,rewards]=await Promise.all([db.from('profiles').select('referral_code').eq('id',data.user.id).single(),db.from('referrals').select('status').eq('referrer_id',data.user.id),db.from('rewards').select('amount_kobo,status').eq('user_id',data.user.id)]);setState({code:profile.data?.referral_code||'',clicks:referrals.data?.length||0,conversions:referrals.data?.filter(x=>x.status==='converted').length||0,rewards:(rewards.data||[]).filter(x=>x.status!=='declined').reduce((sum,x)=>sum+Number(x.amount_kobo||0),0),loading:false});})();},[]);
  if(state.loading)return <div className="card"><p>Loading your referral account…</p></div>;
  if(!state.code)return <div className="card"><h2>Sign in to activate referrals</h2><p>Your unique referral link, verified conversions and rewards will be stored in your account.</p><Link className="btn dark" href="/login">Sign in or create account</Link></div>;
  const link=`https://datalogict.com/r/${state.code}`;
  return <><div className="grid grid4"><div className="card"><h3>Your referral link</h3><p className="referral-link">{link}</p><button className="btn" onClick={()=>{navigator.clipboard?.writeText(link);setCopied(true)}}>{copied?'Copied!':'Copy link'}</button></div><div className="card"><h3>Tracked visits</h3><div className="kpi">{state.clicks}</div></div><div className="card"><h3>Conversions</h3><div className="kpi">{state.conversions}</div></div><div className="card"><h3>Recorded rewards</h3><div className="kpi">₦{(state.rewards/100).toLocaleString()}</div></div></div><div className="card referral-terms"><h2>How rewards work</h2><p>Share your personal link. Eligible rewards are recorded after a referred customer completes a verified payment. Reversed or refunded transactions do not qualify.</p></div></>;
}
