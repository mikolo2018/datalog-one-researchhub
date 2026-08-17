import { NextResponse } from 'next/server'
import { scoreDiagnostic } from '../../../lib/diagnostic'
import { createSupabaseServerClient } from '../../../lib/supabase-server'
export async function POST(req: Request){
  const body=await req.json(); const result=scoreDiagnostic(body)
  const supabase=await createSupabaseServerClient()
  if (supabase) {
    const {data:{user}}=await supabase.auth.getUser()
    if (user) await supabase.from('diagnostics').insert({user_id:user.id,input:body,total_score:result.total,scores:result,issues:result.issues})
  }
  return NextResponse.json(result)
}