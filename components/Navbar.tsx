'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/pricing', key: 'pricing' },
  { href: '/results', key: 'results' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
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

  const handleNav = (href: string) => {
    close();
    router.push(href);
  };

  return (
    <>
      {/* Nav pill trigger */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label={locale === 'fr' ? 'Ouvrir la navigation' : 'Open navigation'}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '1.25rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 18px',
          background: 'linear-gradient(135deg, rgba(10,10,10,0.9), rgba(20,20,20,0.85))',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
      >
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--accent)',
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          userSelect: 'none',
        }}>
          {t.nav.menu}
        </span>
      </motion.button>

      {/* Top-right CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ position: 'fixed', top: '1.1rem', right: '1.25rem', zIndex: 50 }}
      >
        <Link
          href="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 20px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, rgba(10,10,10,0.9), rgba(20,20,20,0.85))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none',
            transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'var(--accent)';
            el.style.color = 'var(--black)';
            el.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'rgba(10,10,10,0.85)';
            el.style.color = 'rgba(255,255,255,0.8)';
            el.style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          {t.nav.bookCall}
        </Link>
      </motion.div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'var(--black)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label={locale === 'fr' ? 'Fermer la navigation' : 'Close navigation'}
              style={{
                position: 'absolute',
                top: 'clamp(1.5rem, 3vw, 2rem)',
                right: 'clamp(1.5rem, 5vw, 3.5rem)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                opacity: 0.35,
                lineHeight: 0,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.35'; }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="1" />
                <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="1" />
              </svg>
            </button>

            {/* TBS wordmark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              style={{
                position: 'absolute',
                top: 'clamp(1.5rem, 3vw, 2rem)',
                left: 'clamp(1.5rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-logo)',
                fontWeight: 600,
                fontSize: '1.875rem',
                letterSpacing: '0.02em',
                lineHeight: 1,
                textTransform: 'uppercase',
                color: 'var(--white)',
              }}
            >
              TBS
            </motion.div>

            {/* Nav links */}
            <nav
              aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 8vw, 8rem)',
              }}
            >
              {links.map((link, i) => (
                <div
                  key={link.href}
                  style={{
                    overflow: 'hidden',
                    borderBottom: '1px solid var(--border-dark)',
                  }}
                >
                  <motion.div
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '105%', opacity: 0 }}
                    transition={{ duration: 0.85, delay: i * 0.06, ease: EASE }}
                  >
                    <NavLink
                      label={t.nav[link.key]}
                      href={link.href}
                      active={pathname === link.href}
                      onClick={handleNav}
                    />
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Overlay footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 8vw, 8rem)',
                borderTop: '1px solid var(--border-dark)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
                <p style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  fontWeight: 400,
                }}>
                  {t.nav.studioTag}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.28rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                  {(['en', 'fr'] as const).map((lang) => {
                    const active = locale === lang;
                    return (
                      <button
                        key={lang}
                        onClick={() => setLocale(lang)}
                        aria-pressed={active}
                        style={{
                          border: 'none',
                          background: active ? 'rgba(222,217,204,0.92)' : 'transparent',
                          color: active ? 'var(--black)' : 'rgba(255,255,255,0.58)',
                          borderRadius: '999px',
                          padding: '0.42rem 0.72rem',
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '10px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          transition: 'all 0.22s ease',
                        }}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={close}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 22px',
                  background: 'var(--accent)',
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--black)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
              >
                {t.nav.bookCall}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick: (href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 'clamp(0.75rem, 1.8vw, 1.2rem) 0',
        textAlign: 'left',
        gap: '1rem',
      }}
    >
      {active && (
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--accent)',
          flexShrink: 0,
        }} />
      )}
      <span style={{
        fontFamily: 'Satoshi, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(2rem, 5vw, 4.25rem)',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color: (active || hovered) ? 'var(--accent)' : 'var(--white)',
        transition: 'color 0.25s ease',
      }}>
        {label}
      </span>
    </button>
  );
}
