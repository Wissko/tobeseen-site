'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const footerLinks = {
  services: [
    { href: '/services#websites' },
    { href: '/services#wallet-loyalty' },
    { href: '/services#bookings' },
    { href: '/services#crm' },
    { href: '/services#bundle' },
  ],
  company: [
    { href: '/about' },
    { href: '/results' },
    { href: '/pricing' },
    { href: '/contact' },
  ],
};

function AnimatedLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{ height: '1px', background: 'var(--border-dark)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay, ease: EASE }}
      />
    </div>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t, locale } = useLanguage();

  return (
    <footer ref={ref} style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>

      {/* Wave SVG separator - gloss effect */}
      <div style={{ position: 'relative', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '60px', display: 'block' }}
          fill="none"
        >
          {/* Gloss wave 1 */}
          <motion.path
            d="M0,80 L0,45 C180,70 360,15 540,40 C720,65 900,20 1080,38 C1260,56 1380,28 1440,42 L1440,80 Z"
            fill="rgba(222,217,204,0.045)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
          {/* Gloss wave 2 */}
          <motion.path
            d="M0,80 L0,55 C200,72 400,30 600,50 C800,70 1000,35 1200,48 C1350,57 1420,40 1440,52 L1440,80 Z"
            fill="rgba(122,99,134,0.035)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          {/* Main wave edge */}
          <path
            d="M0,80 L0,65 C240,78 480,50 720,60 C960,70 1200,52 1440,62 L1440,80 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* Gloss shimmer effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-50%',
        width: '200%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(222,217,204,0.18), transparent)',
        animation: 'shimmer 4s ease-in-out infinite',
      }} />

      {/* Ticker */}
      <div className="ticker-wrap" style={{ overflow: 'hidden', padding: '2rem 0' }}>
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            gap: '0',
            '--marquee-speed': '25s',
          } as React.CSSProperties}
        >
          {Array(12).fill(t.footer.ticker).concat(Array(12).fill(t.footer.ticker)).map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--white)',
                paddingRight: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>•</span>
              {item}
              <span style={{ color: 'var(--accent)', marginLeft: '0.5rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <AnimatedLine />

      {/* Footer body */}
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div style={{
              fontFamily: 'var(--font-logo)',
              fontWeight: 600,
              fontSize: '3rem',
              letterSpacing: '0.03em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '1rem',
              position: 'relative',
              display: 'inline-block',
            }}>
              TBS
              {/* Gloss accent dot */}
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-12px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 12px rgba(222,217,204,0.34)',
              }} />
            </div>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--muted-dark)',
              lineHeight: 1.75,
              maxWidth: '320px',
              marginBottom: '1.5rem',
            }}>
              {t.footer.excellence}
            </p>
            <Link href="/contact" className="cta-btn">
              {t.footer.cta}
            </Link>
          </motion.div>

          {/* Links */}
          {([
            { category: t.footer.servicesLabel, items: footerLinks.services, labels: t.footer.services },
            { category: t.footer.companyLabel, items: footerLinks.company, labels: t.footer.company },
          ] as const).map(({ category, items, labels }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + ci * 0.1, ease: EASE }}
            >
              <h3 className="heading-card" style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted-dark)',
                marginBottom: '1.25rem',
              }}>
                {category}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {items.map((item, index) => (
                  <li key={item.href} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--muted-dark)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted-dark)'; }}
                    >
                      {labels[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <AnimatedLine delay={0.3} />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.2)',
          }}>
            &copy; 2026 To Be Seen. {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.2)',
          }}>
            {t.footer.growth}
          </p>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.2)',
          }}>
            {t.footer.email}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
