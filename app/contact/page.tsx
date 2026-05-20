'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const details = [
  ['Email', 'Agency.tobeseen@gmail.com'],
  ['Location', 'International Operations'],
  ['Response window', 'Within 24 hours'],
  ['Call format', 'Free strategy session'],
];

const expectations = [
  'A focused review of your current setup',
  'A recommendation on the most valuable next move',
  'Clear scope if you decide to proceed',
];

export default function ContactPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).contact;
  const localizedDetails = locale === 'fr'
    ? [
        ['Courriel', 'Agency.tobeseen@gmail.com'],
        ['Zone', 'France et international'],
        ['Délai de réponse', 'Sous 24 heures'],
        ['Format de l’appel', 'Appel stratégique gratuit'],
      ]
    : details;
  const localizedExpectations = locale === 'fr'
    ? [
        'Une revue ciblée de votre système actuel',
        'Une recommandation sur le prochain mouvement le plus utile',
        'Un périmètre clair si vous décidez d’avancer',
      ]
    : expectations;

  const localizeError = (message?: string) => {
    if (locale !== 'fr') return message || 'Message could not be sent.';
    if (!message || message === 'Message could not be sent.') return 'Le message n’a pas pu être envoyé.';
    if (message === 'Please provide a valid name and email.') return 'Veuillez indiquer un nom et une adresse courriel valides.';
    if (message === 'Contact form is not configured yet.') return 'Le formulaire de contact n’est pas encore configuré.';
    if (message === 'Invalid request.') return 'La demande est invalide.';
    return message;
  };

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(localizeError(data.error));
      }

      setStatus('sent');
    } catch (err) {
      setError(localizeError(err instanceof Error ? err.message : undefined));
      setStatus('error');
    }
  };

  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.heroEyebrow}</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10em' }}>{copy.heroTitle}</h1>
          <p className="page-hero-copy">
            {copy.heroBody}
          </p>
        </div>
      </section>

      <Marquee text={copy.marquee} separator="·" dark={true} size="md" speed={22} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.beforeEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)', marginBottom: '1rem' }}>{copy.beforeTitle}</h2>
                <p style={{ color: 'var(--muted-light)', maxWidth: '34rem' }}>
                  {copy.beforeBody}
                </p>
              </div>

              <div className="premium-card premium-card-light">
                <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>{copy.detailsTitle}</p>
                <div style={{ display: 'grid', gap: '0.9rem' }}>
                  {localizedDetails.map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBottom: '0.9rem', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                      <span className="premium-kicker" style={{ color: 'var(--muted-light)' }}>{label}</span>
                      <span style={{ color: 'var(--black)', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card premium-card-light">
                <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>{copy.expectTitle}</p>
                <ul className="premium-list">
                  {localizedExpectations.map((item) => (
                    <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="contact-form-shell">
              {status === 'sent' ? (
                <div>
                  <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.sentEyebrow}</p>
                  <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--black)', marginBottom: '0.75rem' }}>{copy.sentTitle}</h3>
                  <p style={{ color: 'var(--muted-light)' }}>{copy.sentBody}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                  {status === 'error' && (
                    <p role="alert" style={{ color: 'var(--accent-strong)', background: 'rgba(122,99,134,0.1)', border: '1px solid rgba(122,99,134,0.2)', borderRadius: '1rem', padding: '0.9rem 1rem' }}>
                      {error}
                    </p>
                  )}
                  <div>
                    <label className="contact-label">{copy.labels.name}</label>
                    <input className="contact-input" name="name" type="text" value={form.name} onChange={handleChange} placeholder={copy.placeholders.name} required />
                  </div>
                  <div>
                    <label className="contact-label">{copy.labels.email}</label>
                    <input className="contact-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder={copy.placeholders.email} required />
                  </div>
                  <div>
                    <label className="contact-label">{copy.labels.business}</label>
                    <input className="contact-input" name="business" type="text" value={form.business} onChange={handleChange} placeholder={copy.placeholders.business} />
                  </div>
                  <div>
                    <label className="contact-label">{copy.labels.service}</label>
                    <select className="contact-input" name="service" value={form.service} onChange={handleChange}>
                      <option value="">{copy.select}</option>
                      <option value="website">{copy.options[0]}</option>
                      <option value="wallet-loyalty">{copy.options[1]}</option>
                      <option value="bookings">{copy.options[2]}</option>
                      <option value="crm">{copy.options[3]}</option>
                      <option value="bundle">{copy.options[4]}</option>
                      <option value="unsure">{copy.options[5]}</option>
                    </select>
                  </div>
                  <div>
                    <label className="contact-label">{copy.labels.message}</label>
                    <textarea className="contact-input" name="message" rows={6} value={form.message} onChange={handleChange} placeholder={copy.placeholders.message} />
                  </div>
                  <button type="submit" className="cta-btn-light" disabled={status === 'sending'} style={{ justifyContent: 'center', width: '100%' }}>
                    {status === 'sending' ? copy.sending : copy.send}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
