'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getCopy } from '@/lib/site-copy';

const offers = {
  en: [
    ['01', 'Website Creation', 'Fast premium sites built around trust, clarity and enquiries.', ['Custom visual direction', 'Mobile-first page system', 'Conversion path and contact flow'], 'A front door that looks established before the first call.', 'websites'],
    ['02', 'Wallet-First Loyalty', 'Apple and Google Wallet passes that make retention visible and repeatable.', ['Wallet pass design', 'Visit/reward logic', 'Push-ready customer connection'], 'A retention object your clients keep in their pocket.', 'wallet-loyalty'],
    ['03', 'Automated Bookings', 'Scheduling journeys that remove back-and-forth and missed opportunities.', ['Booking setup', 'Calendar sync', 'Reminders and rescheduling'], 'A cleaner route from interest to confirmed appointment.', 'bookings'],
    ['04', 'Client Follow-up CRM', 'Structured follow-up for leads, reviews and client reactivation.', ['Lead capture', 'Email/SMS journeys', 'Reporting dashboard'], 'A measured loop for every warm contact.', 'crm'],
    ['05', 'SEO & Performance', 'Technical foundations and visibility signals that make growth easier to read.', ['Technical cleanup', 'Speed baseline', 'Search reporting'], 'A stronger base for discovery and trust.', 'seo-performance'],
    ['06', 'Full Digitalisation Bundle', 'Website, loyalty, bookings and CRM built as one operating layer.', ['Integrated journey', 'Shared reporting', 'Priority implementation'], 'One controlled system instead of disconnected tools.', 'bundle'],
  ],
  fr: [
    ['01', 'Création de site', 'Des sites premium rapides, pensés pour la confiance, la clarté et les demandes.', ['Direction visuelle sur mesure', 'Système mobile-first', 'Parcours de conversion et contact'], 'Une porte d’entrée digitale crédible avant le premier appel.', 'websites'],
    ['02', 'Fidélité Wallet', 'Des pass Apple et Google Wallet pour rendre la rétention visible et répétable.', ['Design du pass', 'Logique visites/récompenses', 'Lien client activable'], 'Un objet de fidélité que vos clients gardent en poche.', 'wallet-loyalty'],
    ['03', 'Réservations automatisées', 'Des parcours de planning qui réduisent les échanges et les opportunités manquées.', ['Configuration réservation', 'Synchronisation calendrier', 'Rappels et reprogrammation'], 'Un chemin plus net entre intérêt et rendez-vous confirmé.', 'bookings'],
    ['04', 'CRM de suivi client', 'Un suivi structuré pour prospects, avis et réactivation client.', ['Capture de leads', 'Parcours e-mail/SMS', 'Tableau de bord'], 'Une boucle mesurable pour chaque contact chaud.', 'crm'],
    ['05', 'SEO & performance', 'Des bases techniques et signaux de visibilité pour mieux lire la croissance.', ['Nettoyage technique', 'Base vitesse', 'Reporting search'], 'Une base plus solide pour découverte et confiance.', 'seo-performance'],
    ['06', 'Digitalisation complète', 'Site, fidélité, réservations et CRM comme une seule couche opérationnelle.', ['Parcours intégré', 'Reporting commun', 'Implémentation prioritaire'], 'Un système contrôlé au lieu d’outils dispersés.', 'bundle'],
  ],
} as const;

export default function ServicesPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale).services;
  return (
    <>
      <section className="tbs-subhero tbs-services-hero">
        <div className="tbs-label-row"><span>Services</span><span>{copy.heroEyebrow}</span><span>01 / 06</span></div>
        <h1>{copy.heroTitle}</h1>
        <p>{copy.heroBody}</p>
      </section>
      <section className="tbs-service-manifesto">
        <div className="tbs-service-manifesto-title"><span>{locale === 'fr' ? 'Six couches' : 'Six layers'}</span><strong>{locale === 'fr' ? 'Un système' : 'One system'}</strong></div>
        <p>{locale === 'fr' ? 'Chaque offre est traitée comme une pièce éditoriale et technique : claire, visible, intégrée au parcours client.' : 'Each offer is treated as an editorial and technical piece: clear, visible and connected to the client journey.'}</p>
      </section>
      <section className="tbs-offer-index">
        {offers[locale].map(([num, title, summary, includes, outcome, id]) => (
          <article className="tbs-offer-row" id={id} key={id}>
            <div className="tbs-offer-num">{num}</div>
            <div className="tbs-offer-main"><h2>{title}</h2><p>{summary}</p></div>
            <div className="tbs-offer-outcome"><span>{locale === 'fr' ? 'Résultat' : 'Outcome'}</span><p>{outcome}</p></div>
            <ul>{includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href="/contact" className="tbs-pill tbs-pill-dark">{copy.cta}</Link>
          </article>
        ))}
      </section>
      <section className="tbs-final tbs-light"><h2>{copy.endTitle}</h2><p>{copy.endBody}</p><Link href="/contact" className="tbs-pill tbs-pill-dark">{copy.endCta}</Link></section>
    </>
  );
}
