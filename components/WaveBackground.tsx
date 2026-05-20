'use client'

export default function WaveBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <style>{`
            @keyframes wave1 {
              0%   { d: path("M0,500 C200,420 400,580 600,500 C800,420 1000,580 1200,500 C1320,440 1400,480 1440,460 L1440,900 L0,900 Z"); }
              50%  { d: path("M0,520 C200,460 400,540 600,480 C800,440 1000,560 1200,480 C1320,420 1400,500 1440,440 L1440,900 L0,900 Z"); }
              100% { d: path("M0,500 C200,420 400,580 600,500 C800,420 1000,580 1200,500 C1320,440 1400,480 1440,460 L1440,900 L0,900 Z"); }
            }
            @keyframes wave2 {
              0%   { d: path("M0,560 C240,490 480,620 720,550 C960,480 1200,620 1440,540 L1440,900 L0,900 Z"); }
              50%  { d: path("M0,540 C240,510 480,590 720,530 C960,500 1200,600 1440,520 L1440,900 L0,900 Z"); }
              100% { d: path("M0,560 C240,490 480,620 720,550 C960,480 1200,620 1440,540 L1440,900 L0,900 Z"); }
            }
            @keyframes wave3 {
              0%   { d: path("M0,620 C300,560 600,680 900,610 C1100,560 1280,640 1440,600 L1440,900 L0,900 Z"); }
              50%  { d: path("M0,600 C300,580 600,650 900,590 C1100,550 1280,660 1440,580 L1440,900 L0,900 Z"); }
              100% { d: path("M0,620 C300,560 600,680 900,610 C1100,560 1280,640 1440,600 L1440,900 L0,900 Z"); }
            }
            .w1 { animation: wave1 14s ease-in-out infinite; }
            .w2 { animation: wave2 18s ease-in-out infinite; }
            .w3 { animation: wave3 22s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Wave 3 — deepest, most opaque */}
        <path
          className="w3"
          d="M0,620 C300,560 600,680 900,610 C1100,560 1280,640 1440,600 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.018)"
        />
        {/* Wave 2 — middle */}
        <path
          className="w2"
          d="M0,560 C240,490 480,620 720,550 C960,480 1200,620 1440,540 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.013)"
        />
        {/* Wave 1 — top, most subtle */}
        <path
          className="w1"
          d="M0,500 C200,420 400,580 600,500 C800,420 1000,580 1200,500 C1320,440 1400,480 1440,460 L1440,900 L0,900 Z"
          fill="rgba(200,240,0,0.022)"
        />
      </svg>

      {/* Subtle radial glow top-center */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '60vh',
        background: 'radial-gradient(ellipse at center, rgba(200,240,0,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}
