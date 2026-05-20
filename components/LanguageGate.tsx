'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function LanguageGate() {
  const { isReady, needsChoice, setLocale, t } = useLanguage();

  if (!isReady || !needsChoice) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="language-gate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-gate-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="language-gate-card"
        >
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{t.launcher.eyebrow}</p>
          <h2 id="language-gate-title" className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 60px)', color: 'var(--white)', marginBottom: '1rem' }}>{t.launcher.title}</h2>
          <p className="language-gate-copy">{t.launcher.body}</p>
          <div className="language-gate-actions">
            <button className="cta-btn" onClick={() => setLocale('en')}>{t.launcher.en}</button>
            <button className="cta-btn-accent" onClick={() => setLocale('fr')}>{t.launcher.fr}</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
