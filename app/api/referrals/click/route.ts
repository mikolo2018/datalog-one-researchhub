import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '../../../../lib/supabase-server'
export async function POST(req: Request) {
  const { code } = await req.json(); if (!code) return NextResponse.json({error:'Referral code required'},{status:400})
  const supabase = await createSupabaseServerClient(); if (!supabase) return NextResponse.json({ok:true,demo:true})
  const { data:profile } = await supabase.from('profiles').select('id').eq('referral_code',code).maybeSingle()
  if (!profile) return NextResponse.json({error:'Invalid referral code'},{status:404})
  await supabase.from('referrals').insert({referrer_id:profile.id,code,status:'clicked'})
  return NextResponse.json({ok:true})
}