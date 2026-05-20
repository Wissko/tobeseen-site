'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        // Accelerate: slow at start, fast in middle, slow at end
        const speed = prev < 30 ? 3 : prev < 80 ? 7 : 2;
        return Math.min(prev + speed, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontWeight: 200,
              fontSize: 'clamp(72px, 15vw, 160px)',
              letterSpacing: '-0.06em',
              color: '#ffffff',
              lineHeight: 1,
              position: 'relative',
            }}
          >
            {String(count).padStart(3, '0')}
            <motion.span
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                height: '2px',
                background: '#c8f000',
                borderRadius: '1px',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontWeight: 400,
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
              marginTop: '2rem',
            }}
          >
            Loading experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
