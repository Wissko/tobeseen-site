'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const planData = {
  en: [
    ['01', 'Website Creation', '$199/mo', '$1,490', 'Premium website system', ['Design direction', 'Responsive build', 'Contact path']],
    ['02', 'Wallet Loyalty', '$149/mo', '$1,890', 'Retention and wallet pass setup', ['Wallet pass', 'Reward logic', 'Client connection']],
    ['03', 'Automated Bookings', '$79/mo', '$690', 'Scheduling and reminders', ['Booking flow', 'Calendar sync', 'Reminders']],
    ['04', 'Client Follow-up CRM', '$119/mo', '$990', 'Lead and client journeys', ['Lead capture', 'Follow-up flows', 'Reporting']],
  ],
  fr: [
    ['01', 'Création de site', '199 $/mois', '1 490 $', 'Système de site premium', ['Direction design', 'Build responsive', 'Parcours contact']],
    ['02', 'Fidélité Wallet', '149 $/mois', '1 890 $', 'Rétention et pass Wallet', ['Pass Wallet', 'Logique récompense', 'Lien client']],
    ['03', 'Réservations automatisées', '79 $/mois', '690 $', 'Planning et rappels', ['Parcours réservation', 'Sync calendrier', 'Rappels']],
    ['04', 'CRM de suivi client', '119 $/mois', '990 $', 'Parcours prospects et clients', ['Capture lead', 'Flows de suivi', 'Reporting']],
  ],
} as const;

export default function PricingPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).pricing;
  const [mode, setMode] = useState<'monthly' | 'onetime'>('monthly');
  const featured = locale === 'fr'
    ? ['05', 'Digitalisation complète', '449 $/mois', '4 490 $', 'Toutes les couches connectées en un parcours.', ['Site', 'Wallet', 'Réservations', 'CRM']]
    : ['05', 'Full Growth Bundle', '$449/mo', '$4,490', 'All layers connected as one operating system.', ['Website', 'Wallet', 'Bookings', 'CRM']];
  return (
    <>
      <section className="tbs-subhero tbs-subhero-dark">
        <div className="tbs-label-row"><span>{copy.heroEyebrow}</span><span>Pricing</span><span>AUD</span></div>
        <h1>{copy.heroTitle}</h1>
        <p>{copy.heroBody}</p>
        <div className="tbs-toggle"><button className={mode==='monthly' ? 'active' : ''} onClick={() => setMode('monthly')}>{copy.monthly}</button><button className={mode==='onetime' ? 'active' : ''} onClick={() => setMode('onetime')}>{copy.onetime}</button></div>
      </section>
      <section className="tbs-price-board">
        <div className="tbs-price-stack">
          {planData[locale].map(([num, title, monthly, onetime, summary, includes]) => (
            <article className="tbs-price-panel" key={num}>
              <div className="tbs-price-num">{num}</div>
              <div className="tbs-price-copy"><h2>{title}</h2><p>{summary}</p></div>
              <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="tbs-price-action"><strong>{mode === 'monthly' ? monthly : onetime}</strong><Link href="/contact" className="tbs-pill tbs-pill-dark">{copy.guidanceCta}</Link></div>
            </article>
          ))}
        </div>
        <article className="tbs-price-panel tbs-price-panel-featured">
          <div className="tbs-price-num">{featured[0]}</div>
          <div className="tbs-price-copy"><span>{locale === 'fr' ? 'Bundle prioritaire' : 'Priority bundle'}</span><h2>{featured[1]}</h2><p>{featured[4]}</p></div>
          <ul>{(featured[5] as readonly string[]).map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="tbs-price-action"><strong>{mode === 'monthly' ? featured[2] : featured[3]}</strong><Link href="/contact" className="tbs-pill tbs-pill-light">{copy.guidanceCta}</Link></div>
        </article>
      </section>
      <section className="tbs-final tbs-light"><h2>{copy.nextTitle}</h2><p>{copy.nextBody}</p><Link href="/contact" className="tbs-pill tbs-pill-dark">{copy.nextCta}</Link></section>
    </>
  );
}
