import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '../../../../lib/supabase-server'
export async function POST(req: Request) {
  const { email, amountNaira, purpose='subscription', metadata={} } = await req.json()
  const secret = process.env.PAYSTACK_SECRET_KEY
  if (!secret) return NextResponse.json({ok:true,demo:true,authorization_url:'/checkout?demo=success',reference:'demo-'+Date.now()})
  const amount = Math.round(Number(amountNaira)*100)
  const reference = `DATALOG-${Date.now()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`
  const res = await fetch('https://api.paystack.co/transaction/initialize',{method:'POST',headers:{Authorization:`Bearer ${secret}`,'Content-Type':'application/json'},body:JSON.stringify({email,amount,reference,metadata:{...metadata,purpose},callback_url:`${process.env.NEXT_PUBLIC_APP_URL || ''}/checkout?reference=${reference}`})})
  const payload = await res.json()
  if (!res.ok || !payload.status) return NextResponse.json({error:payload.message||'Payment initialization failed'},{status:400})
  const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase?.auth.getUser() || {data:{user:null}}
  if (supabase) await supabase.from('payments').insert({user_id:user?.id||null,reference,amount_kobo:amount,purpose,status:'pending',metadata})
  return NextResponse.json({ok:true,...payload.data})
}