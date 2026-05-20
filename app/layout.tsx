import type { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import LanguageGate from '@/components/LanguageGate';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tobeseen.agency';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TO BE SEEN | Systèmes digitaux premium / Premium Business Systems',
    template: '%s | TO BE SEEN',
  },
  description:
    'TO BE SEEN conçoit des systèmes digitaux premium : sites web, fidélité Wallet, réservations, suivi client et structure digitale pensés pour inspirer confiance et convertir proprement.',
  keywords: ['TO BE SEEN', 'systèmes digitaux premium', 'premium business systems', 'création de site', 'website creation', 'fidélité wallet', 'wallet loyalty', 'réservations', 'bookings', 'suivi client', 'follow-up'],
  authors: [{ name: 'TO BE SEEN' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-AU': '/',
      fr: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    alternateLocale: ['fr_FR'],
    url: '/',
    siteName: 'TO BE SEEN',
    title: 'TO BE SEEN | Systèmes digitaux premium / Premium Business Systems',
    description:
      'Sites web premium, fidélité Wallet, réservations, suivi client et systèmes digitaux conçus pour la confiance et la conversion.',
    images: [{ url: '/fontsite.png', width: 1200, height: 630, alt: 'TO BE SEEN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TO BE SEEN | Systèmes digitaux premium / Premium Business Systems',
    description:
      'Sites web premium, fidélité Wallet, réservations, suivi client et systèmes digitaux conçus pour la confiance et la conversion.',
    images: ['/fontsite.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&f[]=teko@700,600,500,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <LanguageGate />
          <Suspense fallback={null}><Navbar /></Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={null}><Footer /></Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
