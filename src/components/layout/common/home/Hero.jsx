import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-red-900">

      {/* ── Background Video ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            /* 
              On mobile the viewport is tall & narrow (portrait).
              We need the iframe to be at least as wide as the viewport
              AND at least as tall. 
              A 16:9 video sized to 100vw is only 56.25vh tall — not enough
              in portrait. So we use the larger of:
                - 100vw wide  → height = 56.25vw
                - 100vh tall  → width  = 177.78vh
              We do this by setting width/height to the MAX of both,
              via a CSS clamp-style trick using vw and vh units.
            */
            width: 'max(100vw, 177.78vh)',
            height: 'max(56.25vw, 100vh)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          <iframe
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            src="https://www.youtube.com/embed/GBUKZIQ4pC0?autoplay=1&mute=1&loop=1&playlist=GBUKZIQ4pC0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-navy-900/60 z-[1]" />

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/70 via-navy-800/50 to-red-900/60 z-[2]" />

      {/* ── Grid pattern ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-move z-[3]" />

      {/* ── Ambient glows ── */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[100px] animate-float z-[3]" />
      <div className="absolute bottom-[-50px] left-[-100px] w-[400px] h-[400px] rounded-full bg-navy-600/40 blur-[80px] animate-float-delay z-[3]" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-32 md:pt-40">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 mb-6 animate-pulse-border">
          <div className="w-2 h-2 rounded-full bg-[#ff0909] animate-pulse" />
          <span className="text-xs font-bold text-white/90 tracking-wider">AI-Powered Pan-African Travel Partner</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
          Africa's Most<br />
          <span className="text-[#ff0909] italic">Premium Travel</span> Platform.
        </h1>
        <p className="text-white/70 text-lg max-w-xl mt-6 leading-relaxed">Visas. Flights. Medical Tourism. Hotels. Packages — all powered by live AI and designed for the high-value African traveller.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="https://rprotravels.com" target="_blank" rel="noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 shadow-lg hover:shadow-red-600/30">
            <Search size={18} /> Search Flights
          </a>
          <Link to="/services" className="border border-white/40 hover:border-red-600 text-white/90 hover:text-red-600 px-8 py-4 rounded font-bold uppercase tracking-wide transition">
            Explore Services
          </Link>
        </div>
        <div className="flex flex-wrap gap-8 mt-12 pt-6 border-t border-white/20">
          <div><div className="font-serif text-3xl font-bold text-[#db0303]">50+</div><div className="text-white/50 text-xs uppercase tracking-wider">Visa Destinations</div></div>
          <div><div className="font-serif text-3xl font-bold text-[#db0303]">19</div><div className="text-white/50 text-xs uppercase tracking-wider">Medical Countries</div></div>
          <div><div className="font-serif text-3xl font-bold text-[#db0303]">150+</div><div className="text-white/50 text-xs uppercase tracking-wider">Partner Hospitals</div></div>
          <div><div className="font-serif text-3xl font-bold text-[#db0303]">24/7</div><div className="text-white/50 text-xs uppercase tracking-wider">AI Assistant</div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;