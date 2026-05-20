'use client';

import { motion } from 'framer-motion';

// ── Website Creation ──────────────────────────────────────────────────────────
export function WebsiteIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Browser frame */}
      <rect x="4" y="10" width="52" height="40" rx="5" stroke="#c8a96e" strokeWidth="1.5" />
      {/* Top bar */}
      <line x1="4" y1="21" x2="56" y2="21" stroke="#c8a96e" strokeWidth="1" opacity="0.5" />
      {/* Traffic lights */}
      <circle cx="12" cy="16" r="2" fill="#c8a96e" opacity="0.4" />
      <circle cx="19" cy="16" r="2" fill="#c9a96e" opacity="0.4" />
      <circle cx="26" cy="16" r="2" fill="#c8a96e" opacity="0.4" />

      {/* Code lines — animated stroke-dashoffset */}
      <line
        x1="12" y1="30" x2="48" y2="30"
        stroke="#c8a96e" strokeWidth="2" strokeLinecap="round"
        style={{
          strokeDasharray: 36,
          strokeDashoffset: 36,
          animation: 'codeLine1 2.4s ease-out infinite',
        }}
      />
      <line
        x1="12" y1="37" x2="38" y2="37"
        stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"
        style={{
          strokeDasharray: 26,
          strokeDashoffset: 26,
          animation: 'codeLine2 2.4s ease-out infinite 0.4s',
        }}
      />
      <line
        x1="12" y1="44" x2="30" y2="44"
        stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"
        opacity="0.6"
        style={{
          strokeDasharray: 18,
          strokeDashoffset: 18,
          animation: 'codeLine3 2.4s ease-out infinite 0.8s',
        }}
      />

      <style>{`
        @keyframes codeLine1 {
          0%   { stroke-dashoffset: 36; opacity: 0; }
          20%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; }
          80%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes codeLine2 {
          0%   { stroke-dashoffset: 26; opacity: 0; }
          20%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; }
          80%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes codeLine3 {
          0%   { stroke-dashoffset: 18; opacity: 0; }
          20%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; }
          80%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

// ── Phone AI Automation ───────────────────────────────────────────────────────
export function PhoneAIIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Phone outline */}
      <rect x="18" y="6" width="24" height="42" rx="4" stroke="#c8a96e" strokeWidth="1.5" opacity="0.5" />
      <circle cx="30" cy="44" r="2" fill="#c8a96e" opacity="0.4" />

      {/* Equalizer bars */}
      <rect
        x="13" y="32" width="4" height="12"
        rx="2" fill="#c8a96e" opacity="0.8"
        style={{ transformOrigin: '15px 44px', animation: 'bar1 1.8s ease-in-out infinite' }}
      />
      <rect
        x="20" y="26" width="4" height="18"
        rx="2" fill="#c8a96e"
        style={{ transformOrigin: '22px 44px', animation: 'bar2 1.8s ease-in-out infinite 0.3s' }}
      />
      <rect
        x="27" y="22" width="4" height="22"
        rx="2" fill="#c9a96e"
        style={{ transformOrigin: '29px 44px', animation: 'bar3 1.8s ease-in-out infinite 0.15s' }}
      />
      <rect
        x="34" y="28" width="4" height="16"
        rx="2" fill="#c8a96e"
        style={{ transformOrigin: '36px 44px', animation: 'bar4 1.8s ease-in-out infinite 0.45s' }}
      />
      <rect
        x="41" y="34" width="4" height="10"
        rx="2" fill="#c8a96e" opacity="0.8"
        style={{ transformOrigin: '43px 44px', animation: 'bar5 1.8s ease-in-out infinite 0.6s' }}
      />

      <style>{`
        @keyframes bar1 {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1); }
        }
        @keyframes bar2 {
          0%, 100% { transform: scaleY(0.5); }
          50%       { transform: scaleY(1); }
        }
        @keyframes bar3 {
          0%, 100% { transform: scaleY(0.6); }
          50%       { transform: scaleY(1); }
        }
        @keyframes bar4 {
          0%, 100% { transform: scaleY(0.55); }
          50%       { transform: scaleY(1); }
        }
        @keyframes bar5 {
          0%, 100% { transform: scaleY(0.35); }
          50%       { transform: scaleY(1); }
        }
      `}</style>
    </svg>
  );
}

// ── Automated Bookings ────────────────────────────────────────────────────────
export function BookingsIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Calendar frame */}
      <rect x="8" y="12" width="44" height="40" rx="4" stroke="#c8a96e" strokeWidth="1.5" />
      <line x1="8" y1="22" x2="52" y2="22" stroke="#c8a96e" strokeWidth="1" opacity="0.5" />
      {/* Binder holes */}
      <line x1="20" y1="8" x2="20" y2="16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="8" x2="40" y2="16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" />
      {/* Grid of day dots */}
      {[0,1,2,3,4,5].map((col) =>
        [0,1,2].map((row) => (
          <circle
            key={`${col}-${row}`}
            cx={18 + col * 6}
            cy={30 + row * 8}
            r="1.5"
            fill="#c8a96e"
            opacity="0.2"
          />
        ))
      )}
      {/* Highlighted day */}
      <rect x="27" y="27" width="8" height="8" rx="2" fill="rgba(200,169,110,0.2)" stroke="#c8a96e" strokeWidth="1" />

      {/* Checkmark — animated stroke */}
      <path
        d="M29 31 L31 33 L35 28"
        stroke="#c9a96e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 12,
          strokeDashoffset: 12,
          animation: 'checkmark 2.2s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes checkmark {
          0%   { stroke-dashoffset: 12; opacity: 0; }
          30%  { opacity: 1; }
          60%  { stroke-dashoffset: 0; }
          85%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

// ── Client Follow-up CRM ─────────────────────────────────────────────────────
export function CRMIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Connection lines */}
      <line x1="15" y1="30" x2="30" y2="20" stroke="#c8a96e" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <line x1="30" y1="20" x2="45" y2="30" stroke="#c8a96e" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
      <line x1="15" y1="30" x2="45" y2="30" stroke="#c8a96e" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />

      {/* Node 1 — top center */}
      <circle cx="30" cy="20" r="6" fill="rgba(200,169,110,0.15)" stroke="#c8a96e" strokeWidth="1.5"
        style={{ animation: 'pulse1 2s ease-in-out infinite' }}
      />
      <circle cx="30" cy="20" r="2.5" fill="#c8a96e"
        style={{ animation: 'pulse1 2s ease-in-out infinite' }}
      />

      {/* Node 2 — bottom left */}
      <circle cx="15" cy="40" r="6" fill="rgba(200,169,110,0.15)" stroke="#c9a96e" strokeWidth="1.5"
        style={{ animation: 'pulse2 2s ease-in-out infinite 0.65s' }}
      />
      <circle cx="15" cy="40" r="2.5" fill="#c9a96e"
        style={{ animation: 'pulse2 2s ease-in-out infinite 0.65s' }}
      />

      {/* Node 3 — bottom right */}
      <circle cx="45" cy="40" r="6" fill="rgba(200,169,110,0.15)" stroke="#c8a96e" strokeWidth="1.5"
        style={{ animation: 'pulse3 2s ease-in-out infinite 1.3s' }}
      />
      <circle cx="45" cy="40" r="2.5" fill="#c8a96e"
        style={{ animation: 'pulse3 2s ease-in-out infinite 1.3s' }}
      />

      <style>{`
        @keyframes pulse1 {
          0%, 100% { opacity: 0.6; r: 6px; }
          50%       { opacity: 1; r: 7.5px; }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.6; r: 6px; }
          50%       { opacity: 1; r: 7.5px; }
        }
        @keyframes pulse3 {
          0%, 100% { opacity: 0.6; r: 6px; }
          50%       { opacity: 1; r: 7.5px; }
        }
      `}</style>
    </svg>
  );
}

// ── Full Bundle ───────────────────────────────────────────────────────────────
export function BundleIcon() {
  const icons = [
    { x: 8,  y: 8,  color: '#c8a96e', label: 'W' },
    { x: 32, y: 8,  color: '#c9a96e', label: 'P' },
    { x: 8,  y: 32, color: '#c9a96e', label: 'B' },
    { x: 32, y: 32, color: '#c8a96e', label: 'C' },
  ];

  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {icons.map((icon, i) => (
        <motion.g
          key={icon.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1.2,
            repeatType: 'loop',
          }}
        >
          <rect
            x={icon.x}
            y={icon.y}
            width="20"
            height="20"
            rx="4"
            fill={`${icon.color}22`}
            stroke={icon.color}
            strokeWidth="1.2"
          />
          <text
            x={icon.x + 10}
            y={icon.y + 13}
            textAnchor="middle"
            fill={icon.color}
            fontSize="8"
            fontFamily="monospace"
            fontWeight="600"
          >
            {icon.label}
          </text>
        </motion.g>
      ))}
    </motion.svg>
  );
}
