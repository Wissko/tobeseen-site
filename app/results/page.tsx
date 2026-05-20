'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const defaultFeaturedResult = {
  title: 'A stronger first impression from the first scroll',
  summary:
    'For service businesses, credibility is often lost before the conversation even starts. We rebuild the digital layer so the business feels more established, easier to trust, and easier to contact.',
  outcomes: ['Sharper positioning', 'Cleaner enquiry path', 'More confident presentation'],
};

const defaultResultBlocks = [
  {
    number: '01',
    title: 'Reduced booking friction',
    text: 'Booking journeys are simplified so interest does not get lost between curiosity and action.',
  },
  {
    number: '02',
    title: 'Better repeat visibility',
    text: 'Wallet loyalty and follow-up create a clearer view of who returns, when, and why.',
  },
  {
    number: '03',
    title: 'Stronger perceived quality',
    text: 'The brand feels more structured before a call, visit, or quote request ever happens.',
  },
  {
    number: '04',
    title: 'Less admin drag',
    text: 'Clearer systems reduce manual handling, scattered follow-up, and avoidable operational noise.',
  },
];

const defaultScenarios = [
  {
    label: 'Website',
    result: 'Built to look established from the first seconds.',
  },
  {
    label: 'Bookings',
    result: 'Designed to remove hesitation and back-and-forth.',
  },
  {
    label: 'Follow-up',
    result: 'Structured to bring clients back without pressure.',
  },
];

export default function ResultsPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).results;
  const featuredResult = locale === 'fr' ? { title: 'Une première impression plus forte dès les premières secondes', summary: 'Pour beaucoup de business de service, la crédibilité se perd avant même la première conversation. Nous reconstruisons la couche digitale pour que l’entreprise paraisse plus établie, plus simple à faire confiance et plus simple à contacter.', outcomes: ['Positionnement plus net', 'Parcours de contact plus propre', 'Présentation plus sûre'] } : defaultFeaturedResult;
  const resultBlocks = locale === 'fr' ? [
    { number: '01', title: 'Moins de friction à la réservation', text: 'Le parcours de réservation est simplifié pour ne pas perdre l’intérêt entre la curiosité et l’action.' },
    { number: '02', title: 'Meilleure visibilité sur le retour client', text: 'La fidélité Wallet et le suivi offrent une lecture plus claire de qui revient, quand, et pourquoi.' },
    { number: '03', title: 'Qualité perçue plus forte', text: 'La marque paraît plus structurée avant même un appel, une visite ou une demande de devis.' },
    { number: '04', title: 'Moins de charge opérationnelle', text: 'Des systèmes plus clairs réduisent les manipulations manuelles, les relances dispersées et le bruit évitable.' },
  ] : defaultResultBlocks;
  const scenarios = locale === 'fr' ? [
    { label: 'Site', result: 'Conçu pour paraître établi dès les premières secondes.' },
    { label: 'Réservations', result: 'Pensé pour réduire l’hésitation et les allers-retours.' },
    { label: 'Suivi', result: 'Structuré pour faire revenir sans forcer.' },
  ] : defaultScenarios;
  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.heroEyebrow}</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '9.5em' }}>
            {copy.heroTitle}
          </h1>
          <p className="page-hero-copy">
            {copy.heroBody}
          </p>
        </div>
      </section>

      <Marquee text={copy.marquee} separator="·" dark={true} size="md" speed={24} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.featureEyebrow}</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 74px)', color: 'var(--black)', marginBottom: '1rem' }}>
                {featuredResult.title}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="premium-card premium-card-light">
              <p style={{ color: 'var(--muted-light)', marginBottom: '1.25rem' }}>{featuredResult.summary}</p>
              <ul className="premium-list">
                {featuredResult.outcomes.map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2">
          {resultBlocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={index * 0.06}>
              <article className="premium-card premium-card-dark" style={{ height: '100%' }}>
                <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{block.number}</span>
                <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--white)', marginBottom: '0.75rem' }}>{block.title}</h3>
                <p style={{ color: 'var(--muted-dark)' }}>{block.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-3">
          {scenarios.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.06}>
              <article className="premium-card premium-card-light" style={{ height: '100%' }}>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{item.label}</p>
                <h3 className="heading-card" style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--black)', marginBottom: '0.75rem' }}>{item.result}</h3>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.nextEyebrow}</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1rem' }}>
              {copy.nextTitle}
            </h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '1.75rem' }}>
              {copy.nextBody}
            </p>
            <Link href="/contact" className="cta-btn">{copy.nextCta}</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
