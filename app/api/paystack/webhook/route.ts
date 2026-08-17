import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
export async function POST(req: Request) {
  const raw = await req.text(); const secret = process.env.PAYSTACK_SECRET_KEY || ''
  const signature = req.headers.get('x-paystack-signature') || ''
  const expected = crypto.createHmac('sha512', secret).update(raw).digest('hex')
  const a=Buffer.from(signature), b=Buffer.from(expected); if (!secret || a.length!==b.length || !crypto.timingSafeEqual(a,b)) return new NextResponse('Invalid signature',{status:401})
  const event = JSON.parse(raw)
  if (event.event === 'charge.success') {
    const url=process.env.NEXT_PUBLIC_SUPABASE_URL, service=process.env.SUPABASE_SERVICE_ROLE_KEY
    if (url && service) { const db=createClient(url,service); await db.from('payments').update({status:'success'}).eq('reference',event.data.reference) }
  }
  return NextResponse.json({received:true})
}