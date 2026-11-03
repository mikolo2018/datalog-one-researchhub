'use client';

import { FormEvent, useState } from 'react';

type RequestMode = 'access_code' | 'subscription';
type Success = { reference: string; message: string };

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  institutionName: '',
  roleTitle: '',
  applicantType: 'teacher',
  plan: 'teacher',
  billingCycle: 'termly',
  estimatedLearners: '',
  message: '',
  website: '',
};

export default function MathoepediaAccessRequest() {
  const [mode, setMode] = useState<RequestMode>('access_code');
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState<Success | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function update(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function switchMode(next: RequestMode) {
    setMode(next);
    setSuccess(null);
    setError('');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(null);
    try {
      const response = await fetch('/api/mathoepedia/access-requests', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, requestType: mode }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Your request could not be submitted.');
      setSuccess({ reference: data.reference, message: data.message });
      setForm(initialForm);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Your request could not be submitted.');
    } finally {
      setLoading(false);
    }
  }

  return <div className="matho-access-shell">
    <div className="matho-access-tabs" role="tablist" aria-label="Teacher access options">
      <button type="button" role="tab" aria-selected={mode === 'access_code'} className={mode === 'access_code' ? 'active' : ''} onClick={() => switchMode('access_code')}>
        Request an access code
      </button>
      <button type="button" role="tab" aria-selected={mode === 'subscription'} className={mode === 'subscription' ? 'active' : ''} onClick={() => switchMode('subscription')}>
        Teacher or institution subscription
      </button>
    </div>

    <div className="matho-access-layout">
      <aside className="matho-access-summary">
        <span className="eyebrow light">{mode === 'access_code' ? 'Approved access' : 'Mathoepedia subscription'}</span>
        <h2>{mode === 'access_code' ? 'Request your teacher access key.' : 'Bring measured mathematics practice to your learners.'}</h2>
        {mode === 'access_code'
          ? <p>Use this route if Datalog ICT has invited you, your school is already participating, or you need approval to host a Mathoepedia quiz.</p>
          : <p>Choose an individual-teacher or school/institution plan. We will confirm onboarding, payment and activation details after reviewing your request.</p>}
        <ul>
          <li>Create timed mathematics quiz sessions</li>
          <li>Choose categories, difficulty and question timing</li>
          <li>Recover results using the pupils’ session code</li>
          <li>Export Excel results and revision papers</li>
        </ul>
      </aside>

      <form className="matho-access-form" onSubmit={submit}>
        <span className="eyebrow">{mode === 'access_code' ? 'Access request' : 'Subscription request'}</span>
        <h2>{mode === 'access_code' ? 'Teacher verification details' : 'Select the best access type'}</h2>

        {mode === 'subscription' && <div className="matho-plan-choice">
          <label className={form.plan === 'teacher' ? 'selected' : ''}>
            <input type="radio" name="plan" value="teacher" checked={form.plan === 'teacher'} onChange={(event) => { update('plan', event.target.value); update('applicantType', 'teacher'); }} />
            <strong>Individual teacher</strong>
            <span>For personal classroom and tutorial use.</span>
          </label>
          <label className={form.plan === 'institution' ? 'selected' : ''}>
            <input type="radio" name="plan" value="institution" checked={form.plan === 'institution'} onChange={(event) => { update('plan', event.target.value); update('applicantType', 'institution'); }} />
            <strong>School or institution</strong>
            <span>For multiple classes, teachers or learning groups.</span>
          </label>
        </div>}

        <div className="live-form-grid">
          <label>Full name<input value={form.fullName} onChange={(event) => update('fullName', event.target.value)} maxLength={120} required /></label>
          <label>Role or position<input value={form.roleTitle} onChange={(event) => update('roleTitle', event.target.value)} maxLength={100} placeholder="Mathematics teacher" /></label>
          <label>Email address<input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} maxLength={160} required /></label>
          <label>Phone or WhatsApp number<input type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} maxLength={30} placeholder="+234…" required /></label>
        </div>

        <label>School, institution or learning centre<input value={form.institutionName} onChange={(event) => update('institutionName', event.target.value)} maxLength={180} placeholder="Optional for independent teachers" /></label>

        {mode === 'access_code' && <label>Applicant type<select value={form.applicantType} onChange={(event) => update('applicantType', event.target.value)}><option value="teacher">Individual teacher</option><option value="institution">School or institution</option></select></label>}

        {mode === 'subscription' && <div className="live-form-grid">
          <label>Preferred billing cycle<select value={form.billingCycle} onChange={(event) => update('billingCycle', event.target.value)}><option value="monthly">Monthly</option><option value="termly">Termly</option><option value="annual">Annual</option></select></label>
          <label>Estimated number of learners<input type="number" min={1} max={100000} value={form.estimatedLearners} onChange={(event) => update('estimatedLearners', event.target.value)} placeholder="e.g. 60" /></label>
        </div>}

        <label>{mode === 'access_code' ? 'Why do you need access?' : 'Tell us about your intended use'}<textarea value={form.message} onChange={(event) => update('message', event.target.value)} maxLength={1200} rows={4} placeholder="Classes, learner level, expected use or questions…" /></label>
        <label className="matho-honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update('website', event.target.value)} /></label>

        <button className="btn" disabled={loading}>{loading ? 'Submitting…' : mode === 'access_code' ? 'Request access code' : 'Request subscription'}</button>
        <p className="matho-form-note">Submitting a request does not activate paid access automatically. Datalog ICT will verify the details and contact you about approval, payment and activation.</p>
        {success && <div className="matho-access-success" role="status"><strong>Request received — {success.reference}</strong><span>{success.message}</span></div>}
        {error && <p className="live-error" role="alert">{error}</p>}
      </form>
    </div>
  </div>;
}
