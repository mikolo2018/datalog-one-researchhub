import crypto from 'crypto';
import {NextResponse} from 'next/server';
import {createSupabaseAdminClient} from '@/lib/supabase-admin';

export async function POST(request:Request){
  const raw=await request.text();const secret=process.env.PAYSTACK_SECRET_KEY||'';const signature=request.headers.get('x-paystack-signature')||'';const expected=crypto.createHmac('sha512',secret).update(raw).digest('hex');const supplied=Buffer.from(signature);const calculated=Buffer.from(expected);
  if(!secret||supplied.length!==calculated.length||!crypto.timingSafeEqual(supplied,calculated))return new NextResponse('Invalid signature',{status:401});
  const event=JSON.parse(raw);const db=createSupabaseAdminClient();if(!db)return NextResponse.json({received:true,stored:false});
  if(event.event==='charge.success'){
    const reference=String(event.data.reference||'');const metadata=event.data.metadata||{};
    const {data:payment}=await db.from('payments').update({status:'success',metadata:{...metadata,paystack_customer:event.data.customer?.customer_code||null,paid_at:event.data.paid_at||new Date().toISOString()}}).eq('reference',reference).select('id,user_id,amount_kobo').single();
    if(payment){
      const orderNumber=`DLG-${reference.slice(-10)}`;await db.from('commerce_orders').upsert({user_id:payment.user_id,order_number:orderNumber,payment_id:payment.id,item_slug:metadata.item_slug,item_name:metadata.item_name,item_kind:metadata.item_kind,total_kobo:payment.amount_kobo,status:'paid',customer_email:event.data.customer?.email,customer_name:metadata.customer_name,phone:metadata.phone},{onConflict:'payment_id'});
      if(payment.user_id&&['digital_product','course','diagnostic','topic_pack','membership'].includes(metadata.item_kind))await db.from('entitlements').upsert({user_id:payment.user_id,item_slug:metadata.item_slug,item_kind:metadata.item_kind,status:'active',source_payment_id:payment.id},{onConflict:'user_id,item_slug'});
      if(payment.user_id&&metadata.item_kind==='course')await db.from('course_enrollments').upsert({user_id:payment.user_id,course_slug:metadata.item_slug,status:'active',payment_id:payment.id},{onConflict:'user_id,course_slug'});
      if(payment.user_id&&metadata.item_kind==='membership')await db.from('subscriptions').upsert({user_id:payment.user_id,plan:metadata.item_slug,status:'active',starts_at:new Date().toISOString()},{onConflict:'user_id,plan'});
    }
  }
  if(event.event==='invoice.payment_failed'&&event.data?.subscription?.subscription_code)await db.from('subscriptions').update({status:'attention'}).eq('provider_subscription_code',event.data.subscription.subscription_code);
  if(event.event==='subscription.disable'&&event.data?.subscription_code)await db.from('subscriptions').update({status:'cancelled'}).eq('provider_subscription_code',event.data.subscription_code);
  return NextResponse.json({received:true});
}
