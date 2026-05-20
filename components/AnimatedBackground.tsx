'use client';

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Subtle dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(200,169,110,0.4) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.04,
        }}
      />

      {/* Orb 1 — top-left, warm gold */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(200,169,110,0.4) 0%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 0.11,
          animation: 'orb1 12s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — bottom-right, pale gold */}
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '6%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(232,213,163,0.35) 0%, transparent 70%)',
          filter: 'blur(65px)',
          opacity: 0.09,
          animation: 'orb2 10s ease-in-out infinite',
        }}
      />

      {/* Orb 3 — center, amber */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(180,140,80,0.3) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.08,
          animation: 'orb3 14s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes orb1 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(40px, -30px); }
          50%  { transform: translate(20px, 40px); }
          75%  { transform: translate(-30px, 20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes orb2 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-40px, 20px); }
          50%  { transform: translate(-20px, -40px); }
          75%  { transform: translate(30px, -20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes orb3 {
          0%   { transform: translate(-50%, -50%); }
          33%  { transform: translate(calc(-50% + 35px), calc(-50% + 25px)); }
          66%  { transform: translate(calc(-50% - 25px), calc(-50% + 35px)); }
          100% { transform: translate(-50%, -50%); }
        }
      `}</style>
    </div>
  );
}
