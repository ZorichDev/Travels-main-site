import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a3080' }} className="text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div>
          <div className="font-serif text-2xl font-bold text-white mb-4">
            R-Pro Travels<span className="text-[#ff0909]">.</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Africa's most comprehensive travel partner — visa, medical, flights, hotels and AI tools, all in one platform.
          </p>
          <div className="flex gap-2">
            {['𝕏', 'in', 'f', 'ig', '💬'].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition text-xs flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Visa Services */}
        <div>
          <h4 className="text-[#ff0909] text-xs font-bold tracking-widest uppercase mb-5">
            Visa Services
          </h4>
          <ul className="space-y-3">
            {[
              'UK Visa Facilitation',
              'Schengen Visa',
              'USA Visa',
              'Canada Study Permit',
              'Nigeria Inbound Visa',
              'Visa Pricing Plans',
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/visas"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Services */}
        <div>
          <h4 className="text-[#ff0909] text-xs font-bold tracking-widest uppercase mb-5">
            Travel Services
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'About Us', to: '/about' },  // ← ADDED ABOUT US HERE
              { label: 'Flight Booking', href: 'https://rprotravels.com', external: true },
              { label: 'Hotel Reservations', href: 'https://rprotravels.com', external: true },
              { label: 'Medical Tourism', to: '/medical' },
              { label: 'Private Jet Charter', href: 'https://rprotravels.com', external: true },
              { label: 'Holiday Packages', href: 'https://rprotravels.com', external: true },
              { label: 'Airport Transfers', href: 'https://rprotravels.com', external: true },
            ].map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-[#ff0909] text-xs font-bold tracking-widest uppercase mb-5">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={14} className="mt-0.5 text-[#ff0909] shrink-0" />
              <span>Lagos Office — Victoria Island, Lagos</span>
            </div>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={14} className="mt-0.5 text-[#ff0909] shrink-0" />
              <span>Abuja Office — Wuse II, FCT</span>
            </div>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MessageCircle size={14} className="mt-0.5 text-white/40 shrink-0" />
              <span>WhatsApp: +2349036630650</span>
            </div>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <Mail size={14} className="mt-0.5 text-white/40 shrink-0" />
              <span>customercare@rprogroup.com.ng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3"
      >
        <p className="text-white/30 text-xs">
          © 2026 R-Pro Travels and Tours Limited. All rights reserved.
        </p>
        <p className="text-white/30 text-xs text-center md:text-right max-w-md">
          R-Pro Travels provides visa facilitation services only. We do not issue visas. All approval decisions rest with the relevant embassy or consulate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;