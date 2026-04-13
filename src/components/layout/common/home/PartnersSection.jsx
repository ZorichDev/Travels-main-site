import React from 'react';

const darkModeStyles = `
  :root {
    --ps-bg: #eef1f8;
    --ps-heading: #0d1e30;
    --ps-card-bg: #ffffff;
    --ps-card-border: #d0d8e4;
    --ps-partner-text: #1a2b3c;
    --ps-airline-text: #3a4a5a;
    --ps-section-border: #c0392b;
    --ps-stat-bg: #0d1e30;
    --ps-stat-num: #e06060;
    --ps-stat-label: rgba(255,255,255,0.55);
    --ps-stat-sub: rgba(255,255,255,0.35);
  }
  .dark {
    --ps-bg: #080d16;
    --ps-heading: #f0f4ff;
    --ps-card-bg: #0f1724;
    --ps-card-border: rgba(255,255,255,0.08);
    --ps-partner-text: #cbd5e1;
    --ps-airline-text: #94a3b8;
    --ps-section-border: #c0392b;
    --ps-stat-bg: #1e2d42;
    --ps-stat-num: #e06060;
    --ps-stat-label: rgba(255,255,255,0.45);
    --ps-stat-sub: rgba(255,255,255,0.25);
  }
`;

const trustedPartners = [
  { name: 'IATA', accent: 'navy' },
  { name: 'NANTA', accent: null },
  { name: 'Amadeus IT Group', accent: null },
  { name: 'NCAA', accent: null },
  { name: 'Emirates', accent: 'red' },
  { name: 'Qatar Airways', accent: 'red' },
  { name: 'British Airways', accent: 'red' },
  { name: 'Turkish Airlines', accent: null },
  { name: 'Ethiopian Airlines', accent: null },
  { name: 'Air Peace', accent: null },
  { name: 'Ibom Air', accent: null },
  { name: 'Paystack', accent: 'green' },
  { name: 'Flutterwave', accent: 'green' },
];

const popularAirlines = [
  'Air France', 'Air Maroc', 'Lufthansa', 'Air Peace', 'United Airlines', 'Enugu Air',
  'Xejet', 'Ibom Air', 'Emirates', 'Qatar Airways', 'Turkish Airlines',
  'Ethiopian Airlines', 'British Airways', 'Kenya Airways', 'KLM Royal Dutch',
  'Delta Airlines', 'and many more...',
];

const accentBorder = {
  navy: '3px solid #0d1e30',
  red: '3px solid #c0392b',
  green: '3px solid #27ae60',
};

const accentBorderDark = {
  navy: '3px solid #4a7fa5',
  red: '3px solid #c0392b',
  green: '3px solid #27ae60',
};

const PartnersSection = () => {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);

  React.useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  // Detect dark mode to adjust navy accent border
  const isDark = document.documentElement.classList.contains('dark');

  return (
    <>
      <style>{darkModeStyles}</style>
      <div style={{ background: 'var(--ps-bg)', padding: isMobile ? '48px 20px' : '64px 40px', fontFamily: 'inherit' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Top Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 44 }}>

            {/* Heading */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c0392b' }}>
                  Our Network
                </span>
                <div style={{ width: 36, height: 1.5, background: '#c0392b' }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--ps-heading)', lineHeight: 1.15, margin: 0 }}>
                Trusted Partners &<br />
                <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Global Airlines</em>
              </h2>
            </div>

            {/* Stat Badges */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { num: '400+', label: 'Global Airlines', sub: 'International & Local' },
                { num: '100k+', label: 'Tickets Booked', sub: 'International & Local' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'var(--ps-stat-bg)', borderRadius: 999, padding: '16px 24px', minWidth: 130, textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: 'var(--ps-stat-num)', lineHeight: 1.1 }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ps-stat-label)', marginTop: 2 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 9, color: 'var(--ps-stat-sub)', marginTop: 2 }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 32 }}>

            {/* Trusted Partners */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c0392b', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--ps-section-border)' }}>
                Trusted Partners &amp; Accreditations
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {trustedPartners.map((p, i) => (
                  <span key={i} style={{
                    fontSize: 12, fontWeight: 600,
                    color: 'var(--ps-partner-text)',
                    background: 'var(--ps-card-bg)',
                    border: '1px solid var(--ps-card-border)',
                    borderLeft: p.accent
                      ? (isDark && p.accent === 'navy' ? accentBorderDark.navy : accentBorder[p.accent])
                      : '1px solid var(--ps-card-border)',
                    borderRadius: 4,
                    padding: '6px 12px',
                  }}>
                    {p.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Airlines */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c0392b', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--ps-section-border)' }}>
                Popular Airlines We Book
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {popularAirlines.map((airline, i) => (
                  <span key={i} style={{
                    fontSize: 12,
                    fontWeight: airline === 'and many more...' ? 600 : 400,
                    color: airline === 'and many more...' ? '#c0392b' : 'var(--ps-airline-text)',
                    background: 'var(--ps-card-bg)',
                    border: '1px solid var(--ps-card-border)',
                    borderRadius: 999,
                    padding: '6px 14px',
                  }}>
                    {airline}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersSection;