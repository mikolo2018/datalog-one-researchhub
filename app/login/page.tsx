'use client'
import { FormEvent, useState } from 'react'
import { createSupabaseBrowserClient } from '../../lib/supabase-browser'

export default function LoginPage() {
  const [mode, setMode] = useState<'login'|'signup'>('login')
  const [message, setMessage] = useState('')
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setMessage('')
    const fd = new FormData(e.currentTarget)
    const email = String(fd.get('email') || '')
    const password = String(fd.get('password') || '')
    const fullName = String(fd.get('fullName') || '')
    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setMessage('Demo mode: add Supabase environment variables to enable accounts.'); return }
    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } })
      setMessage(error ? error.message : 'Account created. Check your email if confirmation is enabled.')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setMessage(error.message); else window.location.href = '/dashboard'
    }
  }
  return <main className="shell narrow">
    <section className="card auth-card"><div className="eyebrow">DATALOG ONE</div><h1>{mode === 'login' ? 'Welcome back' : 'Create your ResearchHub account'}</h1>
      <p className="muted">Save projects, diagnostics, consultations and referral rewards in one workspace.</p>
      <form onSubmit={submit} className="stack">{mode==='signup' && <label>Full name<input name="fullName" required /></label>}<label>Email<input name="email" type="email" required /></label><label>Password<input name="password" type="password" minLength={6} required /></label><button className="btn" type="submit">{mode==='login'?'Sign in':'Create account'}</button></form>
      {message && <p className="notice">{message}</p>}
      <button className="linkbtn" onClick={()=>setMode(mode==='login'?'signup':'login')}>{mode==='login'?'New to Datalog? Create account':'Already have an account? Sign in'}</button>
    </section>
  </main>
}