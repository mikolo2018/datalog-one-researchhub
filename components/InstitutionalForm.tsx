'use client';

import { FormEvent, useState } from 'react';

export default function InstitutionalForm() {
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/institutional', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    const result = await response.json();
    setMessage(result.error || 'Your institutional request has been received. Datalog will contact you to arrange a discovery discussion.');
    if (response.ok) event.currentTarget.reset();
  }

  return <form className="card stack" onSubmit={submit}>
    <h2>Request an institutional proposal</h2>
    <label>Organisation<input name="organisation" required /></label>
    <label>Contact person<input name="contactName" required /></label>
    <label>Work email<input name="email" type="email" required /></label>
    <label>Phone<input name="phone" type="tel" required /></label>
    <label>Organisation type<select name="organisationType"><option>School</option><option>Tertiary institution</option><option>Business</option><option>Government agency</option><option>NGO</option><option>Other</option></select></label>
    <label>What support is required?<textarea name="needs" rows={5} required /></label>
    <button className="btn dark">Request proposal</button>
    {message ? <p className="notice">{message}</p> : null}
  </form>;
}
