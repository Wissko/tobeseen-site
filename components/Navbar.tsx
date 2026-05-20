'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { href: '/', key: 'home', index: '01' },
  { href: '/services', key: 'services', index: '02' },
  { href: '/pricing', key: 'pricing', index: '03' },
  { href: '/results', key: 'results', index: '04' },
  { href: '/about', key: 'about', index: '05' },
  { href: '/contact', key: 'contact', index: '06' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const carouselItems = [...links, ...links];

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        aria-label={locale === 'fr' ? 'Ouvrir la navigation' : 'Open navigation'}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        className="tbs-menu-trigger"
      >
        <span className="tbs-menu-trigger-dot" />
        <span>{t.nav.menu}</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        className="tbs-top-cta"
      >
        <Link href="/contact">{t.nav.bookCall}</Link>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="tbs-menu-overlay"
          >
            <button
              onClick={close}
              aria-label={locale === 'fr' ? 'Fermer la navigation' : 'Close navigation'}
              className="tbs-menu-close"
            >
              <span />
              <span />
            </button>

            <div className="tbs-menu-brand" aria-hidden="true">TO BE SEEN</div>

            <div className="tbs-menu-meta">
              <span>{locale === 'fr' ? 'Navigation' : 'Navigation'}</span>
              <span>{locale === 'fr' ? 'Faites glisser ou sélectionnez' : 'Drag or select'}</span>
              <span>{links.length.toString().padStart(2, '0')} items</span>
            </div>

            <nav className="tbs-menu-carousel" aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}>
              <motion.div
                className="tbs-menu-track"
                initial={{ x: '8%' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                drag="x"
                dragConstraints={{ left: -1200, right: 240 }}
                dragElastic={0.08}
                whileTap={{ cursor: 'grabbing' }}
              >
                {carouselItems.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={`${link.href}-${i}`}
                      href={link.href}
                      onClick={close}
                      className={`tbs-menu-card${active ? ' is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="tbs-menu-card-index">{link.index}</span>
                      <strong>{t.nav[link.key]}</strong>
                      <span className="tbs-menu-card-line" />
                    </Link>
                  );
                })}
              </motion.div>
            </nav>

            <div className="tbs-menu-footer">
              <p>{t.nav.studioTag}</p>
              <div className="tbs-menu-lang" aria-label={locale === 'fr' ? 'Choix de langue' : 'Language choice'}>
                {(['en', 'fr'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    aria-pressed={locale === lang}
                    className={locale === lang ? 'is-active' : ''}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <Link href="/contact" onClick={close} className="tbs-menu-footer-cta">{t.nav.bookCall}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
