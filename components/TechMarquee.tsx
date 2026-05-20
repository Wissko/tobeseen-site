'use client';

const items = [
  'n8n', 'Make', 'Zapier', 'Vapi.ai', 'Bland AI', 'ElevenLabs',
  'Cal.com', 'HubSpot', 'Notion', 'Airtable', 'Webflow', 'Next.js',
];

export default function TechMarquee() {
  const list = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '18px 0',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '0',
          width: 'max-content',
          animation: 'marquee 22s linear infinite',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
        }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
              padding: '0 24px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold)', opacity: 0.6, fontSize: '0.75rem' }}>·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
