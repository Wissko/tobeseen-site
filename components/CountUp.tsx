'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  value: string; // e.g. "500+", "98%", "0s", "3x"
  duration?: number; // ms
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/);
  if (!match) return { num: 0, prefix: '', suffix: raw };
  return {
    prefix: match[1] || '',
    num: parseFloat(match[2]),
    suffix: match[3] || '',
  };
}

export default function CountUp({ value, duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  const { num, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    const isFloat = String(num).includes('.');

    function frame(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(isFloat ? current.toFixed(1) : String(Math.round(current)));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, [inView, num, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
