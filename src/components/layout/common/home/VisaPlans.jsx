import React from 'react';

const CheckIcon = () => (
  <svg
    width="15" height="15"
    viewBox="0 0 24 24" fill="none"
    stroke="#ff0909" strokeWidth="2.5"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const plans = [
  {
    name: 'Plan A',
    title: 'African Tourist',
    price: '₦150,000 – ₦250,000',
    features: [
      'African destination visas',
      'Document checklist & review',
      'Application submission',
      'Status tracking',
      'WhatsApp support',
    ],
    popular: false,
  },
  {
    name: 'Plan B',
    title: 'Global Tourist',
    price: '₦250,000 – ₦450,000 per destination',
    features: [
      'UK, Schengen, US, Canada & more',
      'Full document preparation',
      'Cover letter included',
      'Interview coaching',
      'Priority processing',
    ],
    popular: true,
  },
  {
    name: 'Plan C',
    title: 'Study Permit',
    price: '₦450,000 flat rate',
    features: [
      'Student visa facilitation',
      'Admission letter guidance',
      'Financial statement review',
      'Embassy interview prep',
      'Dedicated consultant',
    ],
    popular: false,
  },
  {
    name: 'Plan D',
    title: 'Study + Work',
    price: '₦550,000 flat rate',
    features: [
      'Study + Work Visa Processing',
      'Complete document package',
      'Post-arrival support',
      'Dedicated consultant',
    ],
    popular: false,
  },
];

const VisaPlans = () => {
  return (
    <div style={{ background: '#07111f', padding: '80px 24px', fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: '#ff0909' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff0909' }}>
              Visa Plans
            </span>
            <div style={{ width: 32, height: 1, background: '#ff0909' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: '#f5f0e8',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Choose Your <em style={{ color: '#ff0909', fontStyle: 'italic' }}>Visa Plan</em>
          </h2>
          <p style={{ color: '#8899aa', fontSize: '1rem', fontWeight: 300, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Transparent pricing. Expert facilitation. No hidden fees. Government charges are separate.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                background: '#0d1e30',
                border: plan.popular ? '2px solid #ff0909' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '28px 24px 24px',
                boxShadow: plan.popular ? '0 0 30px rgba(192,57,43,0.2)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = plan.popular ? '0 0 30px rgba(192,57,43,0.2)' : 'none';
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: -13, left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ff0909',
                  color: '#fff',
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: 99,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(192,57,43,0.5)',
                }}>
                  Most Popular
                </div>
              )}

              {/* Plan Label */}
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ff0909', marginBottom: 6 }}>
                {plan.name}
              </div>

              {/* Title */}
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.45rem', fontWeight: 700, color: '#f5f0e8', marginBottom: 8 }}>
                {plan.title}
              </div>

              {/* Price */}
              <div style={{ fontSize: '0.8rem', color: '#7a8fa0', paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.07)', lineHeight: 1.5 }}>
                {plan.price}
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.82rem', color: '#8fa4b5', lineHeight: 1.5 }}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button — links to rprotravels.com */}
              <a
                href="https://rprotravels.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '11px 0',
                  borderRadius: 8,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                  ...(plan.popular
                    ? { background: '#ff0909', color: '#fff', boxShadow: '0 4px 16px rgba(192,57,43,0.35)', border: 'none' }
                    : { background: 'transparent', color: '#8899aa', border: '2px solid rgba(255,255,255,0.12)' }
                  ),
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#a93226';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#a93226';
                }}
                onMouseLeave={e => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#ff0909';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#8899aa';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VisaPlans;