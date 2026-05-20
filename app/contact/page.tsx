'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

export default function ContactPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).contact;
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '', message: '' });
  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error(locale === 'fr' ? 'Le message n’a pas pu être envoyé.' : 'Message could not be sent.');
      setStatus('sent');
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  };
  return (
    <>
      <section className="tbs-subhero tbs-subhero-dark">
        <div className="tbs-label-row"><span>{copy.heroEyebrow}</span><span>Strategy Call</span><span>24H</span></div>
        <h1>{copy.heroTitle}</h1><p>{copy.heroBody}</p>
      </section>
      <section className="tbs-contact-grid">
        <div className="tbs-contact-copy"><h2>{copy.beforeTitle}</h2><p>{copy.beforeBody}</p><dl><dt>Email</dt><dd>Agency.tobeseen@gmail.com</dd><dt>{locale === 'fr' ? 'Format' : 'Format'}</dt><dd>{locale === 'fr' ? 'Appel stratégique gratuit' : 'Free strategy session'}</dd></dl></div>
        {status === 'sent' ? <div className="tbs-contact-sent"><span>{copy.sentEyebrow}</span><h2>{copy.sentTitle}</h2><p>{copy.sentBody}</p></div> : (
          <form className="tbs-contact-form" onSubmit={submit}>
            <label>{copy.labels.name}<input name="name" value={form.name} onChange={change} placeholder={copy.placeholders.name} required /></label>
            <label>{copy.labels.email}<input name="email" type="email" value={form.email} onChange={change} placeholder={copy.placeholders.email} required /></label>
            <label>{copy.labels.business}<input name="business" value={form.business} onChange={change} placeholder={copy.placeholders.business} /></label>
            <label>{copy.labels.service}<select name="service" value={form.service} onChange={change}><option value="">{copy.select}</option>{copy.options.map((o) => <option key={o}>{o}</option>)}</select></label>
            <label className="wide">{copy.labels.message}<textarea name="message" value={form.message} onChange={change} placeholder={copy.placeholders.message} rows={6} /></label>
            {error && <p className="tbs-form-error">{error}</p>}
            <button className="tbs-pill tbs-pill-dark" disabled={status === 'sending'}>{status === 'sending' ? copy.sending : copy.send}</button>
          </form>
        )}
      </section>
    </>
  );
}
