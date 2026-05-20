'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Locale = 'en' | 'fr';

type Dictionary = {
  nav: { home: string; services: string; pricing: string; results: string; about: string; contact: string; menu: string; bookCall: string; studioTag: string };
  footer: { ticker: string; excellence: string; cta: string; growth: string; email: string; services: string[]; company: string[]; servicesLabel: string; companyLabel: string };
  launcher: { eyebrow: string; title: string; body: string; en: string; fr: string };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home', services: 'Services', pricing: 'Pricing', results: 'Results', about: 'About', contact: 'Contact', menu: 'Menu', bookCall: 'Book a free call', studioTag: 'To Be Seen · Independent Studio'
    },
    footer: {
      ticker: 'Built to be trusted', excellence: 'Excellence deserves an audience.', cta: 'Book a strategy call', growth: 'Structured for better growth.', email: 'Agency.tobeseen@gmail.com',
      services: ['Website Creation', 'Wallet Loyalty', 'Automated Bookings', 'Client Follow-up', 'Full Digitalisation'],
      company: ['About', 'Results', 'Pricing', 'Contact'],
      servicesLabel: 'Services',
      companyLabel: 'Company'
    },
    launcher: {
      eyebrow: 'Choose language',
      title: 'Select your version of the site',
      body: 'Choose English or French before entering. Your preference will be remembered on the next visit.',
      en: 'View English version',
      fr: 'Voir la version française'
    }
  },
  fr: {
    nav: {
      home: 'Accueil', services: 'Services', pricing: 'Tarifs', results: 'Résultats', about: 'À propos', contact: 'Contact', menu: 'Menu', bookCall: 'Réserver un appel gratuit', studioTag: 'To Be Seen · Studio indépendant'
    },
    footer: {
      ticker: 'Conçu pour inspirer confiance', excellence: 'L’excellence mérite d’être vue.', cta: 'Réserver un appel stratégique', growth: 'Structuré pour une meilleure croissance.', email: 'Agency.tobeseen@gmail.com',
      services: ['Création de site', 'Fidélité Wallet', 'Réservations automatisées', 'Suivi client', 'Digitalisation complète'],
      company: ['À propos', 'Résultats', 'Tarifs', 'Contact'],
      servicesLabel: 'Services',
      companyLabel: 'Studio'
    },
    launcher: {
      eyebrow: 'Choix de langue',
      title: 'Sélectionnez la version du site',
      body: 'Choisissez le français ou l’anglais avant d’entrer. Votre préférence sera mémorisée pour la prochaine visite.',
      en: 'Entrer en anglais',
      fr: 'Voir la version française'
    }
  }
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  isReady: boolean;
  needsChoice: boolean;
};

export type { Locale };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isReady, setIsReady] = useState(false);
  const [needsChoice, setNeedsChoice] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('tbs-locale');
    if (stored === 'en' || stored === 'fr') {
      setLocaleState(stored);
      document.documentElement.lang = stored === 'fr' ? 'fr' : 'en-AU';
      setNeedsChoice(false);
    } else {
      document.documentElement.lang = 'en-AU';
      window.localStorage.setItem('tbs-locale', 'en');
      setNeedsChoice(false);
    }
    setIsReady(true);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem('tbs-locale', next);
    document.documentElement.lang = next === 'fr' ? 'fr' : 'en-AU';
    setNeedsChoice(false);
  };

  const value = useMemo(() => ({ locale, setLocale, t: dictionaries[locale], isReady, needsChoice }), [locale, isReady, needsChoice]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
