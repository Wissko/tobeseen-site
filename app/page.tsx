'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const featuredSystems = [
  {
    number: '01',
    title: 'Wallet-First Digital Loyalty',
    summary: 'Captures customers directly in their native Apple and Google Wallets to track visits and manage rewards.',
    details: 'Best for businesses losing retention and missing out on repeat revenue from invisible customers.',
    href: '/services#wallet-loyalty',
  },
  {
    number: '02',
    title: 'Booking Flows That Remove Friction',
    summary: 'Online scheduling designed to reduce back-and-forth, no-shows, and admin drag.',
    details: 'Built to feel simple for clients and dependable for your team.',
    href: '/services#bookings',
  },
  {
    number: '03',
    title: 'Follow-Up Systems That Bring People Back',
    summary: 'CRM journeys that re-engage past clients, request reviews, and keep revenue active.',
    details: 'Ideal when growth is already in your database but nothing is prompting action.',
    href: '/services#crm',
  },
];

const services = [
  {
    num: '01.',
    title: 'WEBSITE CREATION',
    desc: 'Fast, premium websites built to create trust and move visitors toward a clear enquiry.',
    tag: 'Web design',
    href: '/services#websites',
  },
  {
    num: '02.',
    title: 'WALLET-FIRST LOYALTY',
    desc: 'A direct connection in Apple and Google Wallets to track visits and drive predictable repeat revenue.',
    tag: 'Retention',
    href: '/services#wallet-loyalty',
  },
  {
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    desc: 'A cleaner scheduling experience across your site, search listings, and existing calendar.',
    tag: 'Scheduling',
    href: '/services#bookings',
  },
  {
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    desc: 'Structured messages and reminders that turn one-time clients into repeat business.',
    tag: 'CRM',
    href: '/services#crm',
  },
  {
    num: '05.',
    title: 'SEO & PERFORMANCE INSIGHTS',
    desc: 'Technical foundations, search visibility, and reporting that make decisions easier.',
    tag: 'SEO',
    href: '/services#seo-performance',
  },
  {
    num: '06.',
    title: 'FULL DIGITALISATION BUNDLE',
    desc: 'A complete operating layer where website, loyalty, bookings, and follow-up work as one system.',
    tag: 'Bundle',
    href: '/services#bundle',
  },
];

const faqs = [
  {
    num: '01.',
    q: 'How do we know which service to start with?',
    a: 'We start with the commercial bottleneck. For some businesses that is lack of retention. For others it is weak follow-up, poor booking flow, or a website that does not build trust. The strategy call is used to prioritise what will move revenue first.',
  },
  {
    num: '02.',
    q: 'Can this work with our current systems?',
    a: 'Usually yes. We prefer integrating into the tools you already rely on where that makes sense. If something needs replacing, we explain why and keep the transition simple.',
  },
  {
    num: '03.',
    q: 'Is this suitable for smaller businesses?',
    a: 'Yes. The whole point is to give smaller operators access to systems that usually feel reserved for larger companies. The setup is tailored to your stage rather than overloaded with unnecessary complexity.',
  },
];

function HeroSection({ ctaLabel, exploreLabel }: { ctaLabel: string; exploreLabel: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 260 : 110,
    damping: shouldReduceMotion ? 38 : 24,
    mass: shouldReduceMotion ? 0.22 : 0.32,
    restDelta: 0.0008,
  });

  const heroZoom = useTransform(smoothProgress, [0, 0.2, 0.48, 0.76, 1], shouldReduceMotion ? [1, 1.08, 1.16, 1.2, 1.24] : [1, 1.85, 4.6, 10.8, 18]);
  const heroTitleY = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? ['0%', '1%'] : ['0%', '2.8%']);
  const heroTitleX = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? ['0%', '-0.5%'] : ['0%', '-6%']);
  const heroCopyOpacity = useTransform(smoothProgress, [0, 0.08, 0.16], [1, 0.45, 0]);
  const heroCopyY = useTransform(smoothProgress, [0, 0.16], ['0%', '18%']);
  const heroVeilOpacity = useTransform(smoothProgress, [0.72, 0.92, 1], [0, 0.22, 0.86]);
  const heroVeilY = useTransform(smoothProgress, [0.72, 1], ['10%', '0%']);
  const heroGlowOpacity = useTransform(smoothProgress, [0, 0.7, 1], [0.85, 0.72, 0.5]);

  return (
    <section ref={heroRef} className="hero-section">
      <motion.div className="hero-texture-overlay" aria-hidden="true" style={{ opacity: heroGlowOpacity }} />
      <div className="hero-sticky-shell">
        <div className="hero-stage">
          <motion.div className="hero-swallow-veil" aria-hidden="true" style={{ opacity: heroVeilOpacity, y: heroVeilY }} />
          <motion.div className="hero-content-lockup hero-content-lockup-zoom" style={{ scale: heroZoom, x: heroTitleX, y: heroTitleY }}>
            <div className="hero-stack">
              <h1 className="hero-title" aria-label="TO BE SEEN">
                <span className="hero-title-line hero-title-line-top">TO BE</span>
                <span className="hero-title-line hero-title-line-bottom">SEEN</span>
              </h1>
            </div>
          </motion.div>
          <motion.div className="hero-copy hero-copy-floating" style={{ opacity: heroCopyOpacity, x: '-50%', y: heroCopyY }}>
            <div className="hero-actions">
              <Link href="/contact" className="cta-btn hero-btn-primary">{ctaLabel}</Link>
              <Link href="/services" className="hero-btn-secondary">{exploreLabel}</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).home;
  const localizedFaqs = copy.faqs.map(([q, a], index) => ({ ...faqs[index], q, a }));

  return (
    <>
      <HeroSection ctaLabel={copy.nextCta} exploreLabel={locale === 'fr' ? 'Découvrir les services' : 'Explore services'} />
      <div className="hero-overlay-stack">
        <Marquee text={copy.marquee} separator="·" dark={true} size="md" speed={20} />

        <section className="section-light hero-reveal-section" style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}>
          <div className="editorial-shell premium-grid-2" style={{ alignItems: 'end' }}>
            <AnimatedSection>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.positioningEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(42px, 7vw, 104px)', color: 'var(--black)', marginBottom: '1.5rem' }}>
                  {copy.positioningTitle}
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div style={{ maxWidth: '36rem', justifySelf: 'end' }}>
                <p style={{ fontSize: '16px', color: 'var(--muted-light)', marginBottom: '1rem' }}>
                  {copy.positioningBody1}
                </p>
                <p style={{ fontSize: '16px', color: 'var(--muted-light)', marginBottom: '1.75rem' }}>
                  {copy.positioningBody2}
                </p>
                <Link href="/about" className="link-arrow">{copy.aboutLink}</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell">
          <AnimatedSection>
            <div className="selected-systems-intro">
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.selectedEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 72px)', color: 'var(--white)', maxWidth: '12ch' }}>
                  {locale === 'fr' ? 'Quelques systèmes conçus pour des entreprises ambitieuses.' : copy.selectedTitle}
                </h2>
              </div>
              <p style={{ maxWidth: '34rem', justifySelf: 'end', color: 'var(--muted-dark)', fontSize: '16px', lineHeight: 1.7 }}>
                {copy.selectedBody}
              </p>
            </div>
          </AnimatedSection>

          <div className="premium-grid-3">
            {featuredSystems.map((system, index) => (
              <AnimatedSection key={system.title} delay={index * 0.08}>
                <Link href={system.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <article className="premium-card premium-card-dark selected-system-card">
                    <div className="selected-system-meta">
                      <span className="premium-number">{system.number}</span>
                      <span className="premium-kicker" style={{ color: 'var(--muted-dark)' }}>{locale === 'fr' ? 'Voir le service' : 'View service'}</span>
                    </div>
                    <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--white)', marginBottom: '0.15rem', maxWidth: '12ch' }}>{system.title}</h3>
                    <p className="selected-system-summary">{system.summary}</p>
                    <p className="selected-system-detail">{system.details}</p>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" style={{ padding: '0 0 clamp(4rem, 8vw, 8rem)', overflow: 'hidden' }}>
        <Marquee text={copy.servicesMarquee} separator="·" dark={false} size="md" speed={24} />
        <div className="editorial-shell" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem) 0' }}>
          <AnimatedSection>
            <div className="premium-grid-2" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)', alignItems: 'end' }}>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.servicesEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(40px, 7vw, 110px)', color: 'var(--black)' }}>
                  {locale === 'fr' ? 'Conçu pour rester cohérent du premier clic à la réservation suivante.' : copy.servicesTitle}
                </h2>
              </div>
              <p style={{ color: 'var(--muted-light)', maxWidth: '36rem', justifySelf: 'end' }}>
                {copy.servicesBody}
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {services.map((service, index) => (
              <AnimatedSection key={service.num} delay={index * 0.05}>
                <Link href={service.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="premium-card premium-card-light service-row-card">
                    <span className="premium-number">{service.num}</span>
                    <div>
                      <h3 className="heading-card" style={{ fontSize: 'clamp(24px, 4vw, 42px)', color: 'var(--black)', marginBottom: '0.25rem' }}>{service.title}</h3>
                      <p style={{ color: 'var(--muted-light)', fontSize: '15px', lineHeight: 1.7 }}>{service.desc}</p>
                    </div>
                    <span className="premium-kicker" style={{ color: 'var(--accent)' }}>{service.tag}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <AnimatedSection>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.whyEyebrow}</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1.25rem' }}>
                {copy.whyTitle}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <p style={{ color: 'var(--muted-dark)', maxWidth: '38rem' }}>
                {copy.whyBody}
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.15}>
            <div className="premium-grid-3">
              {copy.metrics.map((item, index) => (
                <div key={item} className="metric-card">
                  <div className="metric-value">{String(index + 1).padStart(2, '0')}</div>
                  <div className="stat-label" style={{ marginTop: '0.75rem' }}>{item}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light faq-premium-section" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell faq-premium-shell">
          <AnimatedSection>
            <div className="faq-premium-header">
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.faqEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(38px, 6vw, 88px)', color: 'var(--black)', marginBottom: '1rem' }}>
                  {copy.faqTitle}
                </h2>
              </div>
              <p className="faq-premium-intro">
                {copy.faqBody}
              </p>
            </div>
          </AnimatedSection>

          <div className="faq-premium-list">
            {localizedFaqs.map((faq, i) => <FAQItem key={faq.q} {...faq} delay={i * 0.05} />)}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.nextEyebrow}</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(40px, 7vw, 110px)', color: 'var(--white)', marginBottom: '1rem' }}>{copy.nextTitle}</h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '2rem' }}>
              {copy.nextBody}
            </p>
            <Link href="/contact" className="cta-btn">{copy.nextCta}</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function FAQItem({ num, q, a, delay = 0 }: { num: string; q: string; a: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedSection delay={delay}>
      <div className={`faq-premium-item${open ? ' open' : ''}`}>
        <button className="faq-premium-question" onClick={() => setOpen(!open)} aria-expanded={open}>
          <div className="faq-premium-question-main">
            <span className="faq-premium-num">{num}</span>
            <span className="faq-premium-text">{q}</span>
          </div>
          <span className={`faq-premium-icon${open ? ' open' : ''}`}>+</span>
        </button>
        <div className="faq-premium-answer" ref={contentRef} style={{ maxHeight: open ? `${contentRef.current?.scrollHeight || 320}px` : '0' }}>
          <div className="faq-premium-answer-inner">{a}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
