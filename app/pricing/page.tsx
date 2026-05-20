'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, marginTop: '2px' }}
  >
    <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.1" opacity="0.32" />
    <path d="M4.6 8.2L6.95 10.55L11.45 5.85" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    id: 'websites',
    num: '01.',
    title: 'WEBSITE CREATION',
    summary: 'A sharp first impression, structured clearly for trust, enquiries, and conversion.',
    monthly: {
      price: 199,
      desc: '12-month minimum · hosting, updates, and support included',
      includes: [
        'Custom design with mobile-first layouts',
        'Up to 8 premium pages',
        'Contact forms, analytics, and SEO foundations',
        'Hosting, maintenance, and monthly updates',
        'Post-launch support and refinement',
      ],
    },
    onetime: {
      price: 1490,
      desc: 'Single build fee · full handover and ownership',
      includes: [
        'Custom design with mobile-first layouts',
        'Up to 8 premium pages',
        'Contact forms, analytics, and SEO foundations',
        'Full source code handover and ownership',
        'Training session and launch support',
      ],
    },
  },
  {
    id: 'wallet-loyalty',
    num: '02.',
    title: 'WALLET-FIRST LOYALTY',
    summary: 'A direct connection to your customers via Apple and Google Wallets to drive retention and repeat revenue.',
    monthly: {
      price: 149,
      desc: 'Active wallet passes · seamless tracking and rewards',
      includes: [
        'Native Apple and Google Wallet passes',
        'Automated point and reward tracking',
        'Direct push notification access',
        'Customer behavior and visit analytics',
        'Ongoing strategy and campaign support',
      ],
    },
    onetime: {
      price: 1890,
      desc: 'Setup fee · full system integration included',
      includes: [
        'Full loyalty system architecture and setup',
        'Custom pass design and branding',
        'Integration with existing point of sale',
        'Staff training and rollout strategy',
        '12 months of technical support',
      ],
    },
  },
  {
    id: 'bookings',
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    summary: 'A calmer scheduling experience that reduces friction, no-shows, and manual back-and-forth.',
    monthly: {
      price: 79,
      desc: 'Unlimited bookings · reminders and calendar sync',
      includes: [
        'Booking system setup and optimisation',
        'Calendar sync and rescheduling flows',
        'Automated reminders and confirmations',
        'Waitlist logic and no-show reduction',
        'Monthly visibility into booking performance',
      ],
    },
    onetime: {
      price: 690,
      desc: 'Setup fee · integration and training included',
      includes: [
        'Booking system setup and optimisation',
        'Calendar sync and rescheduling flows',
        'Automated reminder sequences',
        'Waitlist configuration and support',
        'Training and handover session',
      ],
    },
  },
  {
    id: 'crm',
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    summary: 'Structured follow-up that keeps leads warm, revives past clients, and drives repeat revenue.',
    monthly: {
      price: 119,
      desc: 'Automated flows · reporting included each month',
      includes: [
        'Lead capture and follow-up automations',
        'Email and SMS client journeys',
        'Review request and reactivation campaigns',
        'CRM dashboard and reporting view',
        'Monthly performance review',
      ],
    },
    onetime: {
      price: 990,
      desc: 'Full setup fee · training and support included',
      includes: [
        'CRM structure and automation build',
        'Email and SMS client journeys',
        'Review request and reactivation campaigns',
        'Training session for your team',
        'Support during rollout',
      ],
    },
  },
];

const bundle = {
  title: 'FULL GROWTH BUNDLE',
  badge: 'Preferred setup',
  summary: 'The full operating layer for businesses that want website, wallet loyalty, bookings, and follow-up working as one premium client journey.',
  monthly: {
    price: 449,
    desc: 'All 4 services · priority support · strategic oversight',
    saving: 'Save $97/mo compared with buying separately',
    includes: [
      'Everything in all four services',
      'Shared strategy across website, loyalty, bookings, and CRM',
      'Priority support and monthly optimisation reviews',
      'Cross-system integration and reporting visibility',
      'A stronger, more coherent client experience end-to-end',
    ],
  },
  onetime: {
    price: 4490,
    desc: 'Complete delivery fee · full system setup and handover',
    saving: 'Save $580 compared with buying separately',
    includes: [
      'Everything in all four services',
      'Full build, integration, and premium implementation',
      'Ownership handover and staff training sessions',
      'Priority support during rollout',
      'A cohesive operating layer built to scale with you',
    ],
  },
};

const faqs = [
  {
    q: 'How should we choose between monthly and one-time pricing?',
    a: 'Monthly suits businesses that want a lower entry point with ongoing support included. One-time suits teams that prefer to invest upfront and own the full setup immediately.',
  },
  {
    q: 'Can you tailor a package if we do not need every service?',
    a: 'Yes. The listed pricing creates clarity, but we can shape a custom combination when your business only needs certain systems or a phased rollout.',
  },
  {
    q: 'What makes the bundle the best-value option?',
    a: 'The bundle is not only cheaper than buying each service separately. It also creates better commercial results because the website, call handling, booking flow, and follow-up logic are designed together.',
  },
  {
    q: 'Are there hidden fees, software markups, or surprise extras?',
    a: 'No hidden fees. If a third-party tool is required, we explain it clearly before anything is approved. The goal is clarity, not inflated retainers.',
  },
  {
    q: 'What happens after the initial build or setup?',
    a: 'We either continue supporting and refining the system on a monthly basis, or we hand everything over cleanly if you choose a one-time engagement. Both paths are designed to feel straightforward.',
  },
  {
    q: 'Do these prices include strategy and guidance?',
    a: 'Yes. This is not template work dropped into your business. The pricing includes direction on structure, positioning, and the flow that will be most commercially useful for your stage.',
  },
];


const frPlans = [
  {
    id: 'websites', num: '01.', title: 'CRÉATION DE SITE', summary: 'Une première impression nette, structurée pour la confiance, les demandes et la conversion.',
    monthly: { price: 199, desc: 'Engagement 12 mois · hébergement, mises à jour et support inclus', includes: ['Design sur mesure pensé mobile', 'Jusqu’à 8 pages premium', 'Formulaires, analytics et bases SEO', 'Hébergement, maintenance et mises à jour mensuelles', 'Support et ajustements post-lancement'] },
    onetime: { price: 1490, desc: 'Frais de création uniques · livraison et propriété complètes', includes: ['Design sur mesure pensé mobile', 'Jusqu’à 8 pages premium', 'Formulaires, analytics et bases SEO', 'Remise complète du code source et propriété', 'Session de formation et support au lancement'] },
  },
  {
    id: 'wallet-loyalty', num: '02.', title: 'FIDÉLITÉ WALLET', summary: 'Une connexion directe à vos clients via Apple et Google Wallet pour renforcer la rétention et le revenu récurrent.',
    monthly: { price: 149, desc: 'Pass Wallet actifs · suivi et récompenses fluides', includes: ['Pass Apple et Google Wallet natifs', 'Suivi automatisé des points et récompenses', 'Accès aux notifications directes', 'Analytics visites et comportement client', 'Support stratégique et campagnes en continu'] },
    onetime: { price: 1890, desc: 'Frais de configuration · intégration complète incluse', includes: ['Architecture et configuration du système fidélité', 'Design et branding du pass', 'Intégration au point de vente existant', 'Formation équipe et stratégie de lancement', '12 mois de support technique'] },
  },
  {
    id: 'bookings', num: '03.', title: 'RÉSERVATIONS AUTOMATISÉES', summary: 'Une expérience de planning plus calme qui réduit la friction, les absences et les allers-retours manuels.',
    monthly: { price: 79, desc: 'Réservations illimitées · rappels et synchronisation calendrier', includes: ['Configuration et optimisation du système de réservation', 'Synchronisation calendrier et parcours de reprogrammation', 'Rappels et confirmations automatisés', 'Liste d’attente et réduction des absences', 'Visibilité mensuelle sur la performance des réservations'] },
    onetime: { price: 690, desc: 'Frais de configuration · intégration et formation incluses', includes: ['Configuration et optimisation du système de réservation', 'Synchronisation calendrier et parcours de reprogrammation', 'Séquences de rappels automatisées', 'Configuration liste d’attente et support', 'Session de formation et passation'] },
  },
  {
    id: 'crm', num: '04.', title: 'CRM DE SUIVI CLIENT', summary: 'Un suivi structuré qui garde les prospects actifs, réactive les anciens clients et stimule le retour.',
    monthly: { price: 119, desc: 'Flux automatisés · suivi inclus chaque mois', includes: ['Capture de prospects et automatisations de suivi', 'Parcours e-mail et SMS client', 'Demandes d’avis et campagnes de réactivation', 'Tableau de bord CRM et vue suivi', 'Revue mensuelle des performances'] },
    onetime: { price: 990, desc: 'Frais de configuration complets · formation et support inclus', includes: ['Structure CRM et automatisations', 'Parcours e-mail et SMS client', 'Demandes d’avis et campagnes de réactivation', 'Session de formation pour votre équipe', 'Support pendant le déploiement'] },
  },
];

const frBundle = {
  title: 'OFFRE CROISSANCE COMPLÈTE',
  badge: 'Configuration recommandée',
  summary: 'La couche opérationnelle complète pour les entreprises qui veulent un site, une fidélité Wallet, des réservations et un suivi réunis dans un parcours client premium.',
  monthly: { price: 449, desc: '4 services · support prioritaire · pilotage stratégique', saving: 'Économisez 97 $/mois par rapport aux services séparés', includes: ['Tout ce qui est inclus dans les quatre services', 'Stratégie commune entre site, fidélité, réservations et CRM', 'Support prioritaire et optimisations mensuelles', 'Intégration inter-systèmes et visibilité du suivi', 'Une expérience client plus forte et cohérente de bout en bout'] },
  onetime: { price: 4490, desc: 'Frais de livraison complets · configuration et passation inclus', saving: 'Économisez 580 $ par rapport aux services séparés', includes: ['Tout ce qui est inclus dans les quatre services', 'Création complète, intégration et implémentation premium', 'Transfert de propriété et formations équipe', 'Support prioritaire pendant le déploiement', 'Une couche opérationnelle cohérente, pensée pour évoluer'] },
};

const frFaqs = [
  { q: 'Comment choisir entre le mensuel et le paiement unique ?', a: 'Le mensuel convient aux entreprises qui veulent un point d’entrée plus souple avec du support continu. Le paiement unique convient aux équipes qui préfèrent investir au départ et posséder la configuration complète immédiatement.' },
  { q: 'Pouvez-vous adapter un package si nous n’avons pas besoin de tout ?', a: 'Oui. Les tarifs publiés apportent de la clarté, mais nous pouvons construire une combinaison sur mesure si votre entreprise a seulement besoin de certains systèmes ou d’un déploiement progressif.' },
  { q: 'Pourquoi l’offre complète est-elle l’option la plus rentable ?', a: 'L’offre complète n’est pas seulement moins chère que des services séparés. Elle produit aussi de meilleurs résultats commerciaux car le site, les réservations et le suivi sont pensés ensemble.' },
  { q: 'Y a-t-il des frais cachés ou des surprises ?', a: 'Non. Si un outil tiers est nécessaire, nous l’expliquons clairement avant validation. L’objectif est la clarté, pas des coûts gonflés.' },
  { q: 'Que se passe-t-il après la création ou la configuration initiale ?', a: 'Nous pouvons continuer à soutenir et affiner le système au mois, ou tout vous remettre proprement si vous choisissez un engagement unique. Les deux options sont pensées pour rester simples.' },
  { q: 'Les prix incluent-ils la stratégie et le conseil ?', a: 'Oui. Ce n’est pas un template déposé dans votre activité. Les tarifs incluent la direction sur la structure, le positionnement et le parcours le plus utile commercialement.' },
];

const valuePoints = [
  'Clear scope and published pricing',
  'Premium build quality without agency bloat',
  'Systems designed to work together, not in silos',
];

export default function PricingPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).pricing;
  const [billing, setBilling] = useState<'monthly' | 'onetime'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const localizedPlans = locale === 'fr' ? frPlans : plans;
  const localizedBundle = locale === 'fr' ? frBundle : bundle;
  const localizedFaqs = locale === 'fr' ? frFaqs : faqs;
  const bundlePlan = billing === 'monthly' ? localizedBundle.monthly : localizedBundle.onetime;

  return (
    <>
      <section
        className="section-dark page-hero-shell"
        style={{
          minHeight: '72vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="page-hero-gradient" />
        <div className="editorial-shell pricing-hero-grid" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem', color: 'rgba(222, 217, 204, 0.78)' }}>{copy.heroEyebrow}</p>
              <h1
                className="heading-display"
                style={{
                  fontSize: 'clamp(68px, 13vw, 156px)',
                  color: 'var(--white)',
                  marginBottom: '1.5rem',
                }}
              >
                {copy.heroTitle}
              </h1>
              <p className="page-hero-copy" style={{ maxWidth: '36rem' }}>
                {copy.heroBody}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="pricing-hero-panel">
              <span className="pricing-panel-label">{copy.panelLabel}</span>
              <ul className="pricing-hero-points">
                {copy.panelPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="pricing-hero-note">
                {copy.panelNote}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee text={locale === 'fr' ? 'Systèmes premium · Tarifs publiés · Pensés pour la croissance' : 'Premium Systems · Published Pricing · Built for Growth'} separator="·" dark={true} size="sm" speed={28} />

      <section className="section-light" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell">
          <AnimatedSection>
            <div className="pricing-overview-header">
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.chooseEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(38px, 6vw, 96px)', color: 'var(--black)' }}>
                  {copy.chooseTitle}
                </h2>
              </div>
              <div>
                <p className="pricing-intro-copy">
                  {copy.chooseBody}
                </p>
                <div className="pricing-toggle-shell" role="tablist" aria-label={locale === 'fr' ? 'Choix de facturation' : 'Billing choice'}>
                  {(['monthly', 'onetime'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBilling(opt)}
                      className={`pricing-toggle-btn${billing === opt ? ' active' : ''}`}
                      role="tab"
                      aria-selected={billing === opt}
                    >
                      {opt === 'monthly' ? copy.monthly : copy.onetime}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="pricing-bundle-card">
              <div className="pricing-bundle-topline">
                <span className="pricing-bundle-badge">{localizedBundle.badge}</span>
                <span className="pricing-bundle-saving">{bundlePlan.saving}</span>
              </div>

              <div className="pricing-bundle-grid">
                <div>
                  <p className="pricing-plan-number">{locale === 'fr' ? 'Offre complète' : 'Bundle'}</p>
                  <h3 className="heading-section" style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--black)', marginBottom: '0.85rem' }}>
                    {localizedBundle.title}
                  </h3>
                  <p className="pricing-bundle-summary">{localizedBundle.summary}</p>
                  <p className="pricing-bundle-desc">{bundlePlan.desc}</p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.24 }}
                    className="pricing-bundle-priceblock"
                  >
                    <div className="pricing-price-hero">
                      ${bundlePlan.price}
                      {billing === 'monthly' && <span>{locale === 'fr' ? '/mois' : '/mo'}</span>}
                    </div>
                    <p className="pricing-price-caption">
                      {billing === 'monthly'
                        ? (locale === 'fr' ? 'Pour les entreprises qui veulent du support et des optimisations en continu.' : 'For businesses wanting continuous support and refinement.')
                        : (locale === 'fr' ? 'Pour les entreprises qui veulent une implémentation premium complète dès le départ.' : 'For businesses wanting a full premium implementation upfront.')}
                    </p>
                    <Link href="/contact" className="cta-btn-light">
                      {locale === 'fr' ? 'Réserver l’offre complète' : 'Book the bundle'}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pricing-bundle-includes">
                {(billing === 'monthly' ? localizedBundle.monthly.includes : localizedBundle.onetime.includes).map((item) => (
                  <div key={item} className="pricing-feature-row">
                    <span className="pricing-feature-icon"><CheckIcon /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="pricing-section-label-row">
              <p className="premium-eyebrow">{copy.servicesLabel}</p>
              <p className="pricing-section-meta">{copy.servicesMeta}</p>
            </div>
          </AnimatedSection>

          <div className="pricing-plan-grid">
            {localizedPlans.map((plan, i) => {
              const current = billing === 'monthly' ? plan.monthly : plan.onetime;

              return (
                <AnimatedSection key={plan.id} delay={i * 0.06}>
                  <article className="pricing-plan-card">
                    <div className="pricing-plan-head">
                      <span className="pricing-plan-number">{plan.num}</span>
                      <h3 className="heading-card" style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--black)' }}>
                        {plan.title}
                      </h3>
                      <p className="pricing-plan-summary">{plan.summary}</p>
                    </div>

                    <div className="pricing-plan-divider" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${plan.id}-${billing}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className="pricing-price-row">
                          <div className="pricing-plan-price">
                            ${current.price}
                            {billing === 'monthly' && <span>{locale === 'fr' ? '/mois' : '/mo'}</span>}
                          </div>
                          <p className="pricing-plan-desc">{current.desc}</p>
                        </div>

                        <div className="pricing-plan-features">
                          {current.includes.map((item) => (
                            <div key={item} className="pricing-feature-row subtle">
                              <span className="pricing-feature-icon"><CheckIcon /></span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <Link href="/contact" className="cta-btn-light" style={{ width: 'fit-content' }}>
                      {locale === 'fr' ? 'Faire une demande' : 'Enquire now'}
                    </Link>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="pricing-guidance-card">
              <div>
                <p className="pricing-guidance-title">{copy.guidanceTitle}</p>
                <p className="pricing-guidance-copy">
                  {copy.guidanceBody}
                </p>
              </div>
              <Link href="/contact" className="cta-btn-light">
                {copy.guidanceCta}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell pricing-faq-shell">
          <AnimatedSection>
            <div className="pricing-faq-header">
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem', color: 'rgba(222, 217, 204, 0.72)' }}>{copy.faqEyebrow}</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 72px)', color: 'var(--white)' }}>
                  {copy.faqTitle}
                </h2>
              </div>
              <p className="pricing-faq-intro">
                {copy.faqBody}
              </p>
            </div>
          </AnimatedSection>

          <div className="pricing-faq-list">
            {localizedFaqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <div className={`pricing-faq-item${openFaq === i ? ' open' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="pricing-faq-button"
                    aria-expanded={openFaq === i}
                  >
                    <span className="pricing-faq-question">{faq.q}</span>
                    <span className="pricing-faq-icon">+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: 'easeInOut' }}
                      >
                        <p className="pricing-faq-answer">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem', color: 'rgba(222, 217, 204, 0.72)' }}>{copy.nextEyebrow}</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(40px, 7vw, 110px)', color: 'var(--white)', marginBottom: '1rem' }}>
              {copy.nextTitle}
            </h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '38rem', marginBottom: '2rem' }}>
              {copy.nextBody}
            </p>
            <Link href="/contact" className="cta-btn">
              {copy.nextCta}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
