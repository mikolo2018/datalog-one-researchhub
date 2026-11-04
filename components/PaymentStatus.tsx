'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type State = { status: string; itemName?: string; message?: string };

export default function PaymentStatus({ reference }: { reference: string }) {
  const [state, setState] = useState<State>({ status: 'checking' });
  useEffect(() => {
    let active = true;
    fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`, { cache: 'no-store' })
      .then(async (response) => ({ response, data: await response.json() }))
      .then(({ data }) => { if (active) setState(data); })
      .catch(() => { if (active) setState({ status: 'pending', message: 'Confirmation is taking longer than expected.' }); });
    return () => { active = false; };
  }, [reference]);

  const success = state.status === 'success';
  return <main className="shell narrow"><section className="card auth-card success-card">
    <span className="success-mark">{success ? '✓' : state.status === 'checking' ? '…' : '!'}</span>
    <h1>{success ? 'Payment confirmed' : state.status === 'checking' ? 'Confirming your payment' : 'Payment confirmation pending'}</h1>
    <p>{success ? `${state.itemName || 'Your purchase'} has been recorded successfully. Paid access and linked service records have now been updated.` : state.message || `Paystack is confirming reference ${reference}.`}</p>
    <p className="muted">Reference: <strong>{reference}</strong></p>
    <div className="hero-actions"><Link className="btn dark" href="/dashboard">Open dashboard</Link><Link className="secondary-btn" href="/marketplace">Continue browsing</Link></div>
  </section></main>;
}
