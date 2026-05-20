'use client';

import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const systems = {
  en: [
    ['01', 'Website Creation', 'A sharp digital front door: fast, credible, mobile-first and built to turn attention into enquiries.', 'Visibility'],
    ['02', 'Wallet Loyalty', 'Native Apple and Google Wallet passes that keep customers connected after the first visit.', 'Retention'],
    ['03', 'Automated Bookings', 'A smoother scheduling layer across your site, search presence and calendars.', 'Flow'],
    ['04', 'Follow-up CRM', 'Messages, reminders and review requests that bring warm clients back into motion.', 'Return'],
  ],
  fr: [
    ['01', 'Création de site', 'Une vitrine digitale nette : rapide, crédible, mobile-first et pensée pour convertir l’attention.', 'Visibilité'],
    ['02', 'Fidélité Wallet', 'Des pass Apple et Google Wallet natifs pour garder le lien après la première visite.', 'Rétention'],
    ['03', 'Réservations automatisées', 'Une couche de planning plus fluide entre site, présence search et calendriers.', 'Flux'],
    ['04', 'CRM de suivi', 'Messages, rappels et demandes d’avis pour remettre les clients chauds en mouvement.', 'Retour'],
  ],
} as const;

const proof = {
  en: [
    ['FIRST CLICK', 'Premium enough to be trusted before the first call.'],
    ['CLIENT LOOP', 'Booking, loyalty and follow-up designed as one connected rhythm.'],
    ['OPERATIONS', 'Less manual friction, clearer next actions, cleaner reporting.'],
  ],
  fr: [
    ['PREMIER CLIC', 'Assez premium pour inspirer confiance avant le premier appel.'],
    ['BOUCLE CLIENT', 'Réservation, fidélité et suivi pensés comme un seul rythme.'],
    ['OPÉRATIONS', 'Moins de friction manuelle, prochaines actions claires, suivi plus propre.'],
  ],
} as const;

function Hero({ cta, explore }: { cta: string; explore: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });
  const logoScale = useTransform(p, [0, 0.42, 1], reduced ? [1, 1.04, 1.08] : [1, 1.9, 4.8]);
  const logoY = useTransform(p, [0, 1], ['0%', '-8%']);
  const sideOpacity = useTransform(p, [0, 0.18, 0.36], [1, 0.65, 0]);
  const veil = useTransform(p, [0.55, 1], [0, 1]);

  return (
    <section ref={ref} className="tbs-hero">
      <div className="tbs-noise" aria-hidden />
      <motion.div className="tbs-hero-veil" style={{ opacity: veil }} aria-hidden />
      <div className="tbs-hero-sticky">
        <motion.p className="tbs-hero-side tbs-hero-side-left" style={{ opacity: sideOpacity }}>
          Digital systems<br />for businesses<br />that need to be chosen.
        </motion.p>
        <motion.p className="tbs-hero-side tbs-hero-side-right" style={{ opacity: sideOpacity }}>
          Website<br />Wallet loyalty<br />Bookings & follow-up
        </motion.p>
        <motion.h1 className="tbs-hero-logo" style={{ scale: logoScale, y: logoY }} aria-label="TO BE SEEN">
          <span>TO BE</span><span>SEEN</span>
        </motion.h1>
        <div className="tbs-hero-actions">
          <Link href="/contact" className="tbs-pill tbs-pill-light">{cta}</Link>
          <Link href="/services" className="tbs-pill">{explore}</Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).home;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const serviceRows = systems[locale];
  const proofRows = proof[locale];
  const faqs = copy.faqs;

  return (
    <>
      <Hero cta={copy.nextCta} explore={locale === 'fr' ? 'Découvrir' : 'Explore'} />

      <section className="tbs-intro tbs-light">
        <AnimatedSection>
          <div className="tbs-label-row"><span>01</span><span>{copy.positioningEyebrow}</span><span>TO BE SEEN</span></div>
          <h2 className="tbs-statement">{copy.positioningTitle}</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="tbs-two-copy">
            <p>{copy.positioningBody1}</p>
            <p>{copy.positioningBody2}</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="tbs-wordmark-section">
        <div className="tbs-kicker-strip"><span>WEBSITE</span><span>WALLET</span><span>BOOKINGS</span><span>CRM</span></div>
        <h2 className="tbs-split-title"><span>DIGITAL</span><span>SYSTEMS</span></h2>
        <p className="tbs-corner-copy">{copy.servicesBody}</p>
      </section>

      <section className="tbs-benefits" id="services-preview">
        <div className="tbs-benefits-title"><span>{locale === 'fr' ? 'ACCÈS À' : 'ACCESS TO'}</span><strong>{locale === 'fr' ? 'OFFRES' : 'OFFERS'}</strong></div>
        {serviceRows.map(([num, title, desc, tag], index) => (
          <Link href="/services" className={`tbs-benefit-card tbs-benefit-${index}`} key={num}>
            <div className="tbs-benefit-media"><span>{tag}</span></div>
            <div className="tbs-benefit-text">
              <p>{`System${num}`}</p>
              <h3>{title}</h3>
              <span>{desc}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="tbs-proof tbs-light">
        <div className="tbs-label-row"><span>03</span><span>{copy.whyEyebrow}</span><span>OPERATING LAYER</span></div>
        <div className="tbs-proof-grid">
          <h2>{copy.whyTitle}</h2>
          <div>
            <p className="tbs-proof-lead">{copy.whyBody}</p>
            {proofRows.map(([title, text]) => (
              <div className="tbs-proof-line" key={title}><span>{title}</span><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="tbs-faq">
        <div className="tbs-faq-head"><span>{copy.faqEyebrow}</span><h2>{copy.faqTitle}</h2><p>{copy.faqBody}</p></div>
        <div className="tbs-faq-list">
          {faqs.map(([q, a], index) => (
            <div className="tbs-faq-item" key={q}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{String(index + 1).padStart(2, '0')}</span>{q}<b>{openFaq === index ? '−' : '+'}</b></button>
              {openFaq === index && <p>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="tbs-final tbs-light">
        <h2>{copy.nextTitle}</h2>
        <p>{copy.nextBody}</p>
        <Link href="/contact" className="tbs-pill tbs-pill-dark">{copy.nextCta}</Link>
      </section>
    </>
  );
}
