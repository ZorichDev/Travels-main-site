import React from 'react';
import { Link } from 'react-router-dom';

import londonImg from '../../../../assets/image/london.jpg';
import dubaiImg from './../../../../assets/image/Dubai.jpg';
import accraImg from './../../../../assets/image/Accra.jpg';
import torontoImg from './../../../../assets/image/Toronto.jpg';
import newYorkImg from './../../../../assets/image/New york.jpg';
import parisImg from './../../../../assets/image/Paris.jpg';

// ── CSS variables injected once ──────────────────────────────────
const darkModeStyles = `
  :root {
    --sp-bg: #f0f2f5;
    --sp-bg2: #eef0f4;
    --sp-card-bg: #ffffff;
    --sp-card-border: #e8eaed;
    --sp-heading: #111111;
    --sp-body: #555555;
    --sp-muted: #666666;
    --sp-tag-border: #dddddd;
    --sp-tag-color: #444444;
    --sp-tag-bg: #ffffff;
  }
  .dark {
    --sp-bg: #0a0f1a;
    --sp-bg2: #080d16;
    --sp-card-bg: #0f1724;
    --sp-card-border: rgba(255,255,255,0.08);
    --sp-heading: #f0f4ff;
    --sp-body: #94a3b8;
    --sp-muted: #64748b;
    --sp-tag-border: rgba(255,255,255,0.12);
    --sp-tag-color: #cbd5e1;
    --sp-tag-bg: rgba(255,255,255,0.05);
  }
`;

const ServicesPreview = () => {

  const services = [
    {
      emoji: '🌍',
      title: 'Outbound Visa Facilitation',
      desc: 'Expert facilitation for 50+ destinations — UK, Schengen, US, Canada, UAE, and beyond.',
      tags: ['UK', 'Schengen', 'USA', 'Canada'],
      link: '/visas',
    },
    {
      emoji: '🇳🇬',
      title: 'Nigeria Inbound Visas',
      desc: 'Full support for all 14 visa-on-arrival and regular entry categories into Nigeria.',
      tags: ['Tourist', 'Business', 'Diplomatic'],
      link: '/visas',
    },
    {
      emoji: '🏥',
      title: 'Medical Tourism',
      desc: 'End-to-end medical travel to 19 countries. Visa, flights, hospital, accommodation — all sorted.',
      tags: ['Thailand', 'India', 'UK', 'Turkey'],
      link: '/medical',
    },
    {
      emoji: '✈️',
      title: 'Flights & Airport Services',
      desc: 'Economy to First Class, domestic and international. Live search with Pay Small Small.',
      tags: ['Economy', 'Business', 'First Class'],
      link: 'https://rprotravels.com',
      external: true,
    },
    {
      emoji: '🏨',
      title: 'Hotels & Shortlets',
      desc: 'Curated hotels and shortlet apartments globally — from budget to luxury 5-star.',
      tags: ['Hotels', 'Shortlets', 'Luxury'],
      link: 'https://rprotravels.com',
      external: true,
    },
    {
      emoji: '🛩️',
      title: 'Private Jet Charter',
      desc: 'Light to Ultra-Long Range aircraft for individuals and executives. Quote within hours.',
      tags: ['Light Jet', 'Mid-Range', 'Ultra-Long'],
      link: 'https://rprotravels.com',
      external: true,
    },
    {
      emoji: '🗺️',
      title: 'Tours & Holiday Packages',
      desc: 'Curated holiday packages — beach, city breaks, adventures and cultural tours.',
      tags: ['Beach', 'Adventure', 'Cultural'],
      link: 'https://rprotravels.com',
      external: true,
    },
    {
      emoji: '📦',
      title: 'DHL Logistics',
      desc: 'Secure courier for passport submissions, visa documents and personal shipments via DHL Express.',
      tags: ['Documents', 'Passports', 'Express'],
      link: 'https://rprotravels.com',
      external: true,
    },
    {
      emoji: '🏢',
      title: 'Corporate & Institutional',
      desc: 'Bulk visa processing, annual retainers, NGO & embassy support, CERPAC packages.',
      tags: ['Bulk Visa', 'NGO', 'Embassy'],
      link: '/corporate',
    },
  ];

  const destinations = [
    {
      code: 'GB', city: 'London', photo: londonImg,
      gradient: 'linear-gradient(160deg, #0d1b2a 0%, #1a2a3a 50%, #0a1520 100%)',
      flight: '₦850k', visa: '₦250k', visaLabel: 'Visa from',
      link: '/destinations/london',
    },
    {
      code: 'AE', city: 'Dubai', photo: dubaiImg,
      gradient: 'linear-gradient(160deg, #5c4a1e 0%, #8b6914 40%, #3d2e0a 100%)',
      flight: '₦420k', visa: '₦150k', visaLabel: 'Visa from',
      link: '/destinations/dubai',
    },
    {
      code: 'CA', city: 'Toronto', photo: torontoImg,
      gradient: 'linear-gradient(160deg, #0a1628 0%, #0d2040 50%, #091525 100%)',
      flight: '₦1.1m', visa: '₦300k', visaLabel: 'Visa from',
      link: '/destinations/toronto',
    },
    {
      code: 'US', city: 'New York', photo: newYorkImg,
      gradient: 'linear-gradient(160deg, #111111 0%, #1c1c1c 50%, #080808 100%)',
      flight: '₦980k', visa: '₦280k', visaLabel: 'Visa from',
      link: '/destinations/new-york',
    },
    {
      code: 'FR', city: 'Paris', photo: parisImg,
      gradient: 'linear-gradient(160deg, #3d2e0a 0%, #6b4f10 50%, #2a1f06 100%)',
      flight: '₦720k', visa: '₦250k', visaLabel: 'Visa from',
      link: '/destinations/paris',
    },
    {
      code: 'GH', city: 'Accra', photo: accraImg,
      gradient: 'linear-gradient(160deg, #0a1f0a 0%, #1a3d10 50%, #071408 100%)',
      flight: '₦95k', visa: null, visaLabel: 'Visa-Free',
      link: '/destinations/accra',
    },
  ];

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

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: '20px',
  };

  const ServiceCard = ({ service }) => {
    const content = (
      <div
        style={{
          background: 'var(--sp-card-bg)',
          border: '1px solid var(--sp-card-border)',
          borderRadius: '12px',
          padding: '32px 28px',
          cursor: 'pointer',
          height: '100%',
          boxSizing: 'border-box',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div style={{ fontSize: '40px', marginBottom: '20px', lineHeight: 1 }}>{service.emoji}</div>
        <h3 style={{ fontFamily: "'Georgia', serif", fontSize: '18px', fontWeight: '700', color: '#c0392b', marginBottom: '12px', lineHeight: '1.3' }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--sp-body)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
          {service.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {service.tags.map(t => (
            <span key={t} style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '999px', border: '1px solid var(--sp-tag-border)', color: 'var(--sp-tag-color)', background: 'var(--sp-tag-bg)', fontWeight: '500' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    );

    if (service.external) {
      return <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%', textDecoration: 'none' }}>{content}</a>;
    }
    return <Link to={service.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>{content}</Link>;
  };

  const PriceBadge = ({ label, value }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(180,20,40,0.85)', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '4px', letterSpacing: '0.01em', backdropFilter: 'blur(4px)' }}>
      {value ? `${label} ${value}` : label}
    </span>
  );

  const DestCard = ({ dest, style }) => (
    <Link
      to={dest.link}
      style={{ display: 'block', textDecoration: 'none', borderRadius: '12px', overflow: 'hidden', position: 'relative', background: dest.gradient, cursor: 'pointer', transition: 'transform 0.25s ease, box-shadow 0.25s ease', ...style }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {dest.photo && (
        <img src={dest.photo} alt={dest.city} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
      )}
      <div style={{ position: 'absolute', inset: 0, background: dest.photo ? 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)' : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', fontWeight: '600', letterSpacing: '0.08em', marginBottom: '4px' }}>{dest.code}</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '10px', lineHeight: 1.1 }}>{dest.city}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <PriceBadge label="Flights from" value={dest.flight} />
          {dest.visa ? <PriceBadge label={dest.visaLabel} value={dest.visa} /> : <PriceBadge label={dest.visaLabel} value={null} />}
        </div>
      </div>
    </Link>
  );

  const renderDestinations = () => {
    if (isMobile) {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {destinations.map((dest, i) => (
            <DestCard key={i} dest={dest} style={{ minHeight: '220px' }} />
          ))}
        </div>
      );
    }
    if (isTablet) {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {destinations.map((dest, i) => (
            <DestCard key={i} dest={dest} style={{ minHeight: '260px' }} />
          ))}
        </div>
      );
    }
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '12px' }}>
        <DestCard dest={destinations[0]} style={{ gridColumn: '1', gridRow: '1 / 3', minHeight: '620px' }} />
        <DestCard dest={destinations[1]} style={{ gridColumn: '2', gridRow: '1', minHeight: '300px' }} />
        <DestCard dest={destinations[2]} style={{ gridColumn: '3', gridRow: '1', minHeight: '300px' }} />
        <DestCard dest={destinations[3]} style={{ gridColumn: '4', gridRow: '1', minHeight: '300px' }} />
        <DestCard dest={destinations[4]} style={{ gridColumn: '2', gridRow: '2', minHeight: '300px' }} />
        <DestCard dest={destinations[5]} style={{ gridColumn: '3', gridRow: '2', minHeight: '300px' }} />
      </div>
    );
  };

  return (
    <>
      {/* Inject CSS variables */}
      <style>{darkModeStyles}</style>

      {/* ── Services Section ── */}
      <div style={{ padding: isMobile ? '48px 20px' : '64px 48px', background: 'var(--sp-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ color: '#c0392b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
              <div style={{ width: '32px', height: '1px', background: '#c0392b' }} />
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: isMobile ? '36px' : '52px', fontWeight: '900', color: 'var(--sp-heading)', lineHeight: '1.1', margin: '0 0 16px 0' }}>
              Full-Spectrum<br />
              <span style={{ color: '#c0392b', fontStyle: 'italic' }}>Travel Services</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--sp-muted)', maxWidth: '480px', lineHeight: '1.6' }}>
              Everything from your visa to your hospital bed — all under one Pan-African roof.
            </p>
          </div>
          <div style={servicesGridStyle}>
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Destinations Section ── */}
      <div style={{ padding: isMobile ? '48px 20px' : '64px 48px', background: 'var(--sp-bg2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ color: '#c0392b', fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase' }}>TOP DESTINATIONS</span>
              <div style={{ width: '32px', height: '1px', background: '#c0392b' }} />
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: isMobile ? '36px' : '52px', fontWeight: '900', color: 'var(--sp-heading)', lineHeight: '1.1', margin: '0 0 16px 0' }}>
              Popular <span style={{ color: '#c0392b', fontStyle: 'italic' }}>Destinations</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--sp-muted)', maxWidth: '480px', lineHeight: '1.6', margin: 0 }}>
              Pre-filled searches, live visa prices, and live flight prices — click any destination to book.
            </p>
          </div>

          {renderDestinations()}

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              to="/destinations"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid #c0392b', color: '#c0392b', padding: '12px 32px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s ease, color 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c0392b'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c0392b'; }}
            >
              VIEW ALL DESTINATIONS →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPreview;