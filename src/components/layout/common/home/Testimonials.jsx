import React from 'react';

const darkModeStyles = `
  :root {
    --tm-bg: #eef1f8;
    --tm-heading: #0d1e30;
    --tm-subtext: #6b7a8d;
    --tm-card-bg: #ffffff;
    --tm-card-border: #dde3ec;
    --tm-quote-color: #2a3a4a;
    --tm-name-color: #0d1e30;
    --tm-role-color: #8a99aa;
    --tm-avatar-bg: #0d1e30;
    --tm-avatar-border: #1a3550;
  }
  .dark {
    --tm-bg: #080d16;
    --tm-heading: #f0f4ff;
    --tm-subtext: #64748b;
    --tm-card-bg: #0f1724;
    --tm-card-border: rgba(255,255,255,0.08);
    --tm-quote-color: #cbd5e1;
    --tm-name-color: #e2e8f0;
    --tm-role-color: #475569;
    --tm-avatar-bg: #1e2d42;
    --tm-avatar-border: #2a3f5a;
  }
`;

const testimonials = [
  {
    quote: "R-Pro Travels handled my UK visa from start to finish. I was approved in 3 weeks. The Rova AI even coached me on my bank statement preparation!",
    name: "Adaeze Okoye",
    role: "UK Tourist Visa · Lagos",
    stars: 5,
  },
  {
    quote: "The medical tourism package to India was life-changing. R-Pro Travels arranged everything — visa, flights, hospital, hotel. Paid with Pay Small Small too.",
    name: "Emeka Nwosu",
    role: "Medical Tourism · India",
    stars: 5,
  },
  {
    quote: "Our company uses R-Pro Travels for all 47 staff visas annually. The corporate retainer saves us 20% and we always get priority processing.",
    name: "Ngozi Balogun",
    role: "Corporate Account · Abuja",
    stars: 5,
  },
  {
    quote: "Got my Schengen visa in 10 days with R-Pro Travels. Their AI cover letter generator is brilliant — my letter was perfect and the consul said so!",
    name: "Tunde Adeleke",
    role: "Schengen Visa · Port Harcourt",
    stars: 5,
  },
  {
    quote: "I used the Pay Small Small option for my Dubai holiday package. ₦120k deposit and paid the rest in 3 instalments. No stress at all!",
    name: "Fatima Al-Hassan",
    role: "Dubai Holiday Package · Kano",
    stars: 5,
  },
  {
    quote: "The Rova AI told me everything I needed for my Canada study permit — documents, fees, timeline. R-Pro Travels submitted and I got approved first try.",
    name: "Samuel Obi",
    role: "Canada Study Permit · Enugu",
    stars: 5,
  },
];

const Avatar = ({ name }) => (
  <div style={{
    width: 44, height: 44, borderRadius: '50%',
    background: 'var(--tm-avatar-bg)',
    border: '2px solid var(--tm-avatar-border)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    fontSize: 20,
  }}>
    🧑
  </div>
);

const Stars = () => (
  <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: '#c0392b', fontSize: 14 }}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 640);
  const [isTablet, setIsTablet] = React.useState(() => window.innerWidth >= 640 && window.innerWidth < 1024);

  React.useEffect(() => {
    const handle = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
    };
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const gridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <>
      <style>{darkModeStyles}</style>
      <div style={{
        background: 'var(--tm-bg)',
        padding: isMobile ? '48px 20px' : '72px 40px',
        fontFamily: 'inherit',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#c0392b',
              }}>
                Client Stories
              </span>
              <div style={{ width: 36, height: 1.5, background: '#c0392b' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--tm-heading)',
              lineHeight: 1.1,
              margin: '0 0 14px',
            }}>
              Trusted by <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Thousands</em>
            </h2>
            <p style={{
              color: 'var(--tm-subtext)', fontSize: '0.95rem', fontWeight: 400,
              maxWidth: 480, margin: 0, lineHeight: 1.6,
            }}>
              Real travellers, real results — from Lagos to London and beyond.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: gridColumns,
            gap: isMobile ? 16 : 20,
          }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--tm-card-bg)',
                  border: '1px solid var(--tm-card-border)',
                  borderRadius: 16,
                  padding: isMobile ? '22px 18px' : '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <Stars />
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    color: 'var(--tm-quote-color)',
                    lineHeight: 1.7,
                    margin: '0 0 24px',
                  }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar name={t.name} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--tm-name-color)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--tm-role-color)', marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonials;