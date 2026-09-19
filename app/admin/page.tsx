import {notFound,redirect} from 'next/navigation';
import {createSupabaseServerClient} from '@/lib/supabase-server';
import {createSupabaseAdminClient} from '@/lib/supabase-admin';

export const dynamic='force-dynamic';
export default async function AdminPage(){
  const auth=await createSupabaseServerClient();const {data:{user}}=await auth?.auth.getUser()||{data:{user:null}};if(!user)redirect('/login');if(user.app_metadata?.role!=='admin')notFound();
  const db=createSupabaseAdminClient();if(!db)notFound();const [payments,serviceOrders,leads,subscribers]=await Promise.all([db.from('payments').select('amount_kobo,status').eq('status','success'),db.from('service_orders').select('id',{count:'exact',head:true}),db.from('institutional_enquiries').select('id',{count:'exact',head:true}).eq('status','new'),db.from('newsletter_subscribers').select('id',{count:'exact',head:true}).eq('status','active')]);const revenue=(payments.data||[]).reduce((sum,row)=>sum+Number(row.amount_kobo||0),0);
  const metrics=[['Verified revenue',`₦${(revenue/100).toLocaleString()}`],['Service requests',String(serviceOrders.count||0)],['Institutional leads',String(leads.count||0)],['Subscribers',String(subscribers.count||0)]];
  return <main className="section"><div className="container"><span className="eyebrow">Private administration</span><h1>Business Overview</h1><div className="grid grid4">{metrics.map(([label,value])=><div className="card" key={label}><h3>{label}</h3><div className="kpi">{value}</div></div>)}</div></div></main>;
}
