import { NextResponse } from 'next/server'
export async function GET(request: Request, context: { params: Promise<{code:string}> }) {
  const {code}=await context.params
  try { await fetch(new URL('/api/referrals/click', request.url),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code})}) } catch {}
  const response=NextResponse.redirect(new URL(`/?ref=${encodeURIComponent(code)}`,request.url))
  response.cookies.set('datalog_ref',code,{maxAge:60*60*24*30,httpOnly:false,sameSite:'lax'})
  return response
}