import {NextResponse} from 'next/server';
import {createSupabaseServerClient} from '@/lib/supabase-server';
import {createSupabaseAdminClient} from '@/lib/supabase-admin';
import {getCatalogItem} from '@/lib/catalog';

const planEnv:Record<string,string|undefined>={'student-membership':process.env.PAYSTACK_PLAN_STUDENT,'researcher-membership':process.env.PAYSTACK_PLAN_RESEARCHER,'professional-membership':process.env.PAYSTACK_PLAN_PROFESSIONAL};
function clean(value:unknown,max=160){return String(value||'').trim().slice(0,max);}

export async function POST(request:Request){
  const body=await request.json();const item=getCatalogItem(clean(body.itemSlug,80));
  if(!item)return NextResponse.json({error:'The selected item is unavailable.'},{status:400});
  const email=clean(body.email,180).toLowerCase();if(!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:'Enter a valid email address.'},{status:400});
  const amount=item.priceNaira*100;const reference=`DATALOG-${Date.now()}-${crypto.randomUUID().slice(0,6).toUpperCase()}`;
  const supabase=await createSupabaseServerClient();const {data:{user}}=await supabase?.auth.getUser()||{data:{user:null}};
  const metadata={item_slug:item.slug,item_name:item.name,item_kind:item.kind,user_id:user?.id||null,customer_name:clean(body.customerName),phone:clean(body.phone,40),referral_code:clean(body.referralCode,30)};
  const db=createSupabaseAdminClient();if(db){const {error}=await db.from('payments').insert({user_id:user?.id||null,reference,amount_kobo:amount,purpose:item.kind,status:'pending',metadata});if(error)return NextResponse.json({error:'Unable to create the payment record.'},{status:500});}
  const secret=process.env.PAYSTACK_SECRET_KEY;if(!secret)return NextResponse.json({error:'Online payment is being configured. Please contact Datalog ICT on WhatsApp to complete this order.'},{status:503});
  const origin=process.env.NEXT_PUBLIC_APP_URL||new URL(request.url).origin;const plan=item.kind==='membership'?planEnv[item.slug]:undefined;const payload:Record<string,unknown>={email,amount,reference,metadata,callback_url:`${origin}/checkout?reference=${reference}`};if(plan)payload.plan=plan;
  const response=await fetch('https://api.paystack.co/transaction/initialize',{method:'POST',headers:{Authorization:`Bearer ${secret}`,'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();
  if(!response.ok||!result.status)return NextResponse.json({error:result.message||'Payment initialization failed.'},{status:400});return NextResponse.json({ok:true,...result.data});
}
