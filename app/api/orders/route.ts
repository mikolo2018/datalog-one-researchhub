import {NextResponse} from 'next/server';
import {createSupabaseServerClient} from '@/lib/supabase-server';
import {createSupabaseAdminClient} from '@/lib/supabase-admin';
import {getCatalogItem} from '@/lib/catalog';

const clean=(value:unknown,max=2000)=>String(value||'').trim().slice(0,max);
export async function POST(request:Request){
  const body=await request.json();const service=getCatalogItem(clean(body.serviceSlug,80));if(!service||service.kind!=='service')return NextResponse.json({error:'Select a valid service.'},{status:400});
  const email=clean(body.email,180).toLowerCase();if(!/^\S+@\S+\.\S+$/.test(email)||!clean(body.name)||!clean(body.description))return NextResponse.json({error:'Complete the required contact and project fields.'},{status:400});
  const supabase=await createSupabaseServerClient();const {data:{user}}=await supabase?.auth.getUser()||{data:{user:null}};const filePath=clean(body.filePath,500)||null;if(filePath&&(!user||!filePath.startsWith(`${user.id}/`)))return NextResponse.json({error:'The attached file could not be verified.'},{status:403});
  const db=createSupabaseAdminClient();const orderNumber=`DLG-${Date.now().toString(36).toUpperCase()}`;if(!db)return NextResponse.json({error:'Project ordering is temporarily unavailable. Please contact Datalog ICT by WhatsApp.'},{status:503});
  const {error}=await db.from('service_orders').insert({user_id:user?.id||null,order_number:orderNumber,service_slug:service.slug,customer_name:clean(body.name,160),customer_email:email,phone:clean(body.phone,40),project_title:clean(body.projectTitle,240),description:clean(body.description),deadline:body.deadline||null,budget_range:clean(body.budgetRange,80),file_path:filePath,status:'submitted'});
  if(error)return NextResponse.json({error:'Unable to submit this request.'},{status:500});return NextResponse.json({ok:true,orderNumber});
}
