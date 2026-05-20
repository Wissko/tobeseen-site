'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const defaultPrinciples = [
  {
    number: '01',
    title: 'Clarity before complexity',
    text: 'We design systems so owners can understand what is happening, what is working, and what the next step should be.',
  },
  {
    number: '02',
    title: 'Premium does not mean excessive',
    text: 'The visual and operational goal is composure: cleaner journeys, stronger trust, and fewer moving parts that confuse people.',
  },
  {
    number: '03',
    title: 'Technology should support reputation',
    text: 'Every touchpoint should reinforce the quality of the business behind it, not undermine it with friction or inconsistency.',
  },
];

const partners = ['Next.js', 'n8n', 'Vapi', 'ElevenLabs', 'Calendly', 'HubSpot', 'Airtable', 'Stripe'];

export default function AboutPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).about;
  const localizedPrinciples = locale === 'fr' ? [
    { number: '01', title: 'La clarté avant la complexité', text: 'Nous concevons des systèmes que les dirigeants comprennent rapidement : ce qui se passe, ce qui fonctionne, et ce qu’il faut faire ensuite.' },
    { number: '02', title: 'Premium ne veut pas dire excessif', text: 'Le but visuel et opérationnel reste la maîtrise : un parcours plus net, plus crédible, avec moins d’éléments qui brouillent la lecture.' },
    { number: '03', title: 'La technologie doit soutenir la réputation', text: 'Chaque point de contact doit renforcer la qualité perçue du business, pas l’affaiblir par de la friction ou de l’incohérence.' },
  ] : defaultPrinciples;
  const workList = locale === 'fr' ? [
    'Nous auditons toujours l’existant avant de recommander quoi que ce soit.',
    'Nous simplifions le parcours client au lieu d’ajouter des couches inutiles.',
    'Nous construisons avec des outils stables, maintenables et réalistes pour une entreprise en croissance.',
  ] : [
    'We audit the current setup before suggesting anything.',
    'We simplify the client journey rather than adding layers for the sake of automation.',
    'We build with platforms that are stable, maintainable, and realistic for growing businesses.',
  ];
  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.heroEyebrow}</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10.25em' }}>{copy.heroTitle}</h1>
          <p className="page-hero-copy">
            {copy.heroBody}
          </p>
        </div>
      </section>

      <Marquee text={locale === 'fr' ? 'Stratégie · Systèmes · Visibilité · Conversion' : 'Strategy · Systems · Visibility · Conversion'} separator="·" dark={true} size="md" speed={25} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.standsEyebrow}</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 74px)', color: 'var(--black)', marginBottom: '1.25rem' }}>
                {copy.standsTitle}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div style={{ maxWidth: '36rem', justifySelf: 'end' }}>
              <p style={{ color: 'var(--muted-light)', marginBottom: '1rem' }}>
                {copy.body1}
              </p>
              <p style={{ color: 'var(--muted-light)', marginBottom: '1.75rem' }}>
                {copy.body2}
              </p>
              <Link href="/services" className="cta-btn-light">{copy.cta}</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-3">
          {localizedPrinciples.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <article className="premium-card premium-card-dark" style={{ height: '100%' }}>
                <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{item.number}</span>
                <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--white)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted-dark)' }}>{item.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'center' }}>
          <AnimatedSection>
            <div className="premium-card premium-card-light">
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.howEyebrow}</p>
              <ul className="premium-list">
                {workList.map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.stackEyebrow}</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)', marginBottom: '1rem' }}>{copy.stackTitle}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {partners.map((partner) => (
                  <span key={partner} className="premium-card premium-card-light" style={{ padding: '0.8rem 1rem', borderRadius: '999px' }}>{partner}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.startEyebrow}</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1rem' }}>{copy.startTitle}</h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '1.75rem' }}>
              {copy.startBody}
            </p>
            <Link href="/contact" className="cta-btn">{copy.startCta}</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
