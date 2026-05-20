'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const defaultServices = [
  {
    id: 'websites',
    number: '01',
    title: 'Website Creation',
    summary: 'Fast, premium websites designed to establish trust quickly and move visitors toward a clear next step.',
    why: 'For businesses that do strong work offline but still look inconsistent, dated, or generic online.',
    includes: ['Custom conversion-led design', 'Mobile-first build quality', 'Enquiry and booking pathways', 'Clean launch-ready performance setup'],
    outcome: 'Your brand feels more established, more credible, and easier to choose from the first visit.',
    tone: 'light',
  },
  {
    id: 'wallet-loyalty',
    number: '02',
    title: 'Wallet-First Loyalty',
    summary: 'Capture customers directly in their native Apple and Google Wallets to track visits, issue rewards, and drive repeat revenue.',
    why: 'For businesses losing invisible customers and missing out on the massive retention opportunity of direct wallet connection.',
    includes: ['Native Apple and Google Wallet integration', 'Seamless point and visit tracking', 'Automated reward management', 'Direct push notification access'],
    outcome: 'Your business stays in the pocket of every customer, turning casual visits into predictable, repeat revenue.',
    tone: 'dark',
  },
  {
    id: 'bookings',
    number: '03',
    title: 'Automated Bookings',
    summary: 'A cleaner scheduling journey built to reduce friction, remove admin loops, and protect the calendar from unnecessary gaps.',
    why: 'For businesses that are losing conversions between interest and confirmed appointment.',
    includes: ['Website booking flows', 'Reminder sequences', 'Reschedule and cancellation logic', 'Calendar sync with existing tools'],
    outcome: 'Clients can book faster, and your team spends less time coordinating simple appointments.',
    tone: 'light',
  },
  {
    id: 'crm',
    number: '04',
    title: 'Client Follow-Up CRM',
    summary: 'Structured follow-up systems that keep past clients warm, encourage repeat bookings, and build stronger retention.',
    why: 'For businesses with a valuable client base that is not being reactivated consistently.',
    includes: ['Post-visit follow-up', 'Review requests', 'Reactivation campaigns', 'Segmented messaging journeys'],
    outcome: 'The database becomes a growth channel rather than a static contact list.',
    tone: 'dark',
  },
  {
    id: 'seo-performance',
    number: '05',
    title: 'SEO & Performance Insights',
    summary: 'Technical visibility, performance tuning, and reporting that help the right clients find you and trust the experience.',
    why: 'For businesses that need better discovery and cleaner data before they invest more heavily in growth.',
    includes: ['Technical SEO foundations', 'Core performance optimisation', 'Conversion tracking setup', 'Reporting that stays commercially useful'],
    outcome: 'Search visibility improves, site friction drops, and decisions get easier because the signal is clearer.',
    tone: 'dark',
  },
  {
    id: 'bundle',
    number: '06',
    title: 'Full Digitalisation Bundle',
    summary: 'A fully connected setup where website, calls, bookings, follow-up, and reporting are designed as one coherent system.',
    why: 'For owners who want a complete front-end and back-end digital layer instead of isolated fixes.',
    includes: ['Website and conversion path', 'Wallet loyalty and bookings', 'CRM follow-up logic', 'Reporting and optimisation rhythm'],
    outcome: 'Your operation feels more premium, more organised, and much easier to scale with confidence.',
    tone: 'light',
  },
];

export default function ServicesPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).services;
  const localizedServices = locale === 'fr'
    ? [
        {
          id: 'websites', number: '01', title: 'Création de site', summary: 'Des sites rapides et premium pensés pour inspirer confiance et guider vers une prochaine étape claire.', why: 'Pour les entreprises qui travaillent bien hors ligne mais paraissent encore datées, floues ou génériques en ligne.', includes: ['Design sur mesure orienté conversion', 'Qualité pensée mobile', 'Parcours de contact et de réservation', 'Base propre pour un lancement performant'], outcome: 'Votre marque paraît plus établie, plus crédible et plus simple à choisir dès la première visite.', tone: 'light'
        },
        {
          id: 'wallet-loyalty', number: '02', title: 'Fidélité Wallet', summary: 'Une connexion directe dans Apple et Google Wallet pour suivre les visites, gérer les récompenses et stimuler le retour client.', why: 'Pour les entreprises qui perdent des clients invisibles et n’exploitent pas encore le vrai potentiel de la rétention.', includes: ['Intégration native Apple et Google Wallet', 'Suivi fluide des visites et points', 'Gestion automatisée des récompenses', 'Accès aux notifications directes'], outcome: 'Votre entreprise reste dans la poche du client et transforme des visites occasionnelles en revenu répétitif.', tone: 'dark'
        },
        {
          id: 'bookings', number: '03', title: 'Réservations automatisées', summary: 'Un parcours de réservation plus propre, conçu pour réduire les frictions, les échanges inutiles et les trous dans l’agenda.', why: 'Pour les entreprises qui perdent des conversions entre l’intérêt et la réservation confirmée.', includes: ['Parcours de réservation sur le site', 'Séquences de rappel', 'Logique de report et d’annulation', 'Synchronisation avec les outils existants'], outcome: 'Les clients réservent plus vite et votre équipe passe moins de temps sur la coordination manuelle.', tone: 'light'
        },
        {
          id: 'crm', number: '04', title: 'CRM de suivi client', summary: 'Des systèmes de suivi structurés pour garder les anciens clients actifs, encourager les retours et renforcer la rétention.', why: 'Pour les entreprises qui ont déjà une base client précieuse mais pas de relance cohérente.', includes: ['Suivi post-visite', 'Demandes d’avis', 'Campagnes de réactivation', 'Messages segmentés'], outcome: 'La base client devient un canal de croissance au lieu d’une simple liste statique.', tone: 'dark'
        },
        {
          id: 'seo-performance', number: '05', title: 'SEO et performance', summary: 'Visibilité technique, optimisation des performances et suivi clair pour attirer les bons clients et améliorer l’expérience.', why: 'Pour les entreprises qui ont besoin d’une meilleure découverte et de données plus propres avant d’investir davantage en croissance.', includes: ['Fondations SEO techniques', 'Optimisation des performances', 'Mise en place du tracking', 'Suivi utile commercialement'], outcome: 'La visibilité progresse, les frictions baissent et les décisions deviennent plus simples.', tone: 'dark'
        },
        {
          id: 'bundle', number: '06', title: 'Digitalisation complète', summary: 'Un système connecté où site, appels, réservations, suivi et reporting fonctionnent ensemble.', why: 'Pour les dirigeants qui veulent une vraie couche digitale complète et non une série de correctifs isolés.', includes: ['Site et parcours de conversion', 'Fidélité Wallet et réservations', 'Logique CRM et suivi', 'Suivi et optimisation'], outcome: 'Votre activité paraît plus premium, mieux organisée et plus simple à faire évoluer.', tone: 'light'
        },
      ]
    : defaultServices;

  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.heroEyebrow}</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10.5em' }}>{copy.heroTitle}</h1>
          <p className="page-hero-copy">
            {copy.heroBody}
          </p>
        </div>
      </section>

      <Marquee text={copy.marquee} separator="·" dark={true} size="md" speed={22} />

      <section className="section-light" style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.introEyebrow}</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)' }}>
                {copy.introTitle}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="premium-card premium-card-light">
              <p style={{ color: 'var(--muted-light)', marginBottom: '0.85rem' }}>
                {copy.introBody}
              </p>
              <ul className="premium-list">
                {copy.introList.map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {localizedServices.map((service, index) => {
        const light = service.tone === 'light';
        const text = light ? 'var(--black)' : 'var(--white)';
        const muted = light ? 'var(--muted-light)' : 'var(--muted-dark)';
        const border = light ? 'var(--border-light)' : 'var(--border-dark)';
        const panelBg = light ? 'rgba(255,255,255,0.58)' : 'rgba(255,255,255,0.03)';

        return (
          <section key={service.id} id={service.id} className={light ? 'section-light service-band' : 'section-dark service-band'} style={{ padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 5rem)', borderTopColor: border }}>
            <div className="editorial-shell service-layout">
              <AnimatedSection delay={0.04}>
                <div>
                  <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{service.number}</span>
                  <h2 className="heading-section" style={{ fontSize: 'clamp(42px, 6vw, 82px)', color: text, marginBottom: '1rem' }}>{service.title}</h2>
                  <p style={{ fontSize: '18px', lineHeight: 1.6, color: muted, maxWidth: '32rem', marginBottom: '1.5rem' }}>{service.summary}</p>
                  <div className={light ? 'premium-card premium-card-light' : 'premium-card premium-card-dark'}>
                    <p className="premium-kicker" style={{ color: light ? 'var(--accent)' : 'var(--accent)', marginBottom: '0.5rem' }}>{copy.whyChoose}</p>
                    <p style={{ color: text }}>{service.why}</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="service-panel" style={{ borderColor: border, background: panelBg }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.6rem' }}>{copy.included}</p>
                    <div className="service-feature-grid">
                      {service.includes.map((item) => (
                        <div key={item} className="service-feature-card" style={{ borderColor: border, background: light ? 'rgba(255,255,255,0.64)' : 'rgba(255,255,255,0.02)' }}>
                          <span className="premium-dot" style={{ marginBottom: '1rem', display: 'block' }} />
                          <p style={{ color: text, lineHeight: 1.65 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ paddingTop: '1.5rem', borderTop: `1px solid ${border}`, display: 'grid', gap: '1.25rem' }}>
                    <div>
                      <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{copy.outcome}</p>
                      <p style={{ color: muted }}>{service.outcome}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link href="/contact" className={light ? 'cta-btn-light' : 'cta-btn'}>{copy.cta}</Link>
                      {index < localizedServices.length - 1 ? <Link href={`#${localizedServices[index + 1].id}`} className="link-arrow">{copy.nextService}</Link> : <Link href="/contact" className="link-arrow">{copy.discuss}</Link>}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{copy.endEyebrow}</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--white)', marginBottom: '1rem' }}>{copy.endTitle}</h2>
            <p style={{ maxWidth: '36rem', color: 'var(--muted-dark)', marginBottom: '1.8rem' }}>
              {copy.endBody}
            </p>
            <Link href="/contact" className="cta-btn">{copy.endCta}</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
