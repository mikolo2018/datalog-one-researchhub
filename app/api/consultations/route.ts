import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '../../../lib/supabase-server'
export async function POST(req: Request) {
  const body = await req.json(); const supabase = await createSupabaseServerClient()
  if (!supabase) return NextResponse.json({ ok:true, demo:true, consultation:{...body,id:'demo-'+Date.now()} })
  const { data:{ user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error:'Authentication required' }, { status:401 })
  const { data,error } = await supabase.from('consultations').insert({user_id:user.id,type:body.type||'research-review',notes:body.notes,scheduled_at:body.scheduledAt||null}).select().single()
  if (error) return NextResponse.json({error:error.message},{status:400})
  return NextResponse.json({ok:true,consultation:data})
}