'use client';

import { FormEvent, useState } from 'react';

const supportOptions = [
  'Pupil/student assessment and performance reporting',
  'Scheme-of-work coverage and lesson-note review',
  'Mid-term assessment',
  'Terminal examination support',
  'End-of-session evaluation',
  'Affective and psychomotor-domain assessment',
  'Teacher development and assessment training',
  'School performance dashboard and consultancy',
];

export default function SchoolConsultationForm() {
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage('');

    const form = new FormData(event.currentTarget);
    const selectedSupport = form.getAll('support').map(String);
    const needs = [
      `School level: ${form.get('schoolLevel') || 'Not specified'}`,
      `Approximate enrolment: ${form.get('enrolment') || 'Not specified'}`,
      `Preferred assessment period: ${form.get('assessmentPeriod') || 'Not specified'}`,
      `Requested services: ${selectedSupport.length ? selectedSupport.join(', ') : 'General school consultation'}`,
      `School priorities or challenges: ${form.get('details') || 'Not supplied'}`,
    ].join('\n');

    const response = await fetch('/api/institutional', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        organisation: form.get('organisation'),
        contactName: form.get('contactName'),
        email: form.get('email'),
        phone: form.get('phone'),
        organisationType: `School — ${form.get('schoolLevel') || 'Elementary/Secondary'}`,
        needs,
      }),
    });

    const result = await response.json();
    setMessage(result.error || 'Thank you. Your school consultation request has been received. Datalog will contact you to discuss the assessment scope and next steps.');
    if (response.ok) event.currentTarget.reset();
    setSubmitting(false);
  }

  return <form className="card stack school-consultation-form" onSubmit={submit}>
    <div>
      <span className="eyebrow">For proprietors and school leaders</span>
      <h2>Request a school consultation</h2>
      <p className="muted">Tell us what your school needs. We will recommend an assessment and reporting plan suited to your calendar.</p>
    </div>
    <div className="form-two">
      <label>School name<input name="organisation" required /></label>
      <label>Contact person<input name="contactName" required /></label>
      <label>Email address<input name="email" type="email" required /></label>
      <label>Phone/WhatsApp<input name="phone" type="tel" required /></label>
      <label>School level<select name="schoolLevel" required defaultValue="Primary and secondary"><option>Elementary/primary</option><option>Secondary</option><option>Primary and secondary</option><option>Early years and primary</option></select></label>
      <label>Approximate enrolment<input name="enrolment" type="number" min="1" placeholder="e.g. 450" /></label>
    </div>
    <label>Preferred assessment period<select name="assessmentPeriod" defaultValue="Multiple periods across the school year"><option>Beginning-of-term baseline</option><option>Mid-term</option><option>Terminal examination</option><option>End of session</option><option>Multiple periods across the school year</option><option>Not sure — please advise</option></select></label>
    <fieldset className="service-checklist">
      <legend>Services of interest</legend>
      <div className="check-grid">{supportOptions.map((option) => <label key={option}><input type="checkbox" name="support" value={option} /> <span>{option}</span></label>)}</div>
    </fieldset>
    <label>School priorities, concerns or challenges<textarea name="details" rows={5} placeholder="For example: inconsistent scheme coverage, weak performance in selected subjects, the need for independent examinations, or better reports for parents." /></label>
    <button className="btn dark" disabled={submitting}>{submitting ? 'Sending request…' : 'Request school consultation'}</button>
    {message ? <p className="notice" role="status">{message}</p> : null}
  </form>;
}
