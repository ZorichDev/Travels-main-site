import React, { useState, useEffect, useRef } from 'react';
import ladyRoseImage from './../assets/image/lady Rose.webp';
import udoImage from './../assets/image/udo.jpg';

/* ─────────────────────────────────────────────────────────────────────────────
   R-Pro Travels & Tours — About Us Page
   Matches the Contact page: navy-800/700/red-800 hero, white cards, red accents
   ───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '5,000+', label: 'Clients Served' },
  { value: '40+', label: 'Destination Countries' },
  { value: '98%', label: 'Client Satisfaction' },
];

const VALUES = [
  {
    icon: '🤝',
    title: 'Client-First Loyalty',
    body:
      'Unlike facilitators paid by hospitals, we charge you a transparent fee — because our loyalty belongs to you, not the facility. Your outcome is our only measure of success.',
  },
  {
    icon: '🌍',
    title: 'Global Reach, Local Heart',
    body:
      'Headquartered in Lagos, we combine on-the-ground knowledge of Nigeria\'s travel landscape with a network spanning 40+ countries across Europe, Asia, and the Americas.',
  },
  {
    icon: '🔒',
    title: 'Transparency Always',
    body:
      'No hidden commissions, no surprise fees. Every cost, every option, every trade-off is explained to you in plain language before you commit to anything.',
  },
  {
    icon: '⚡',
    title: 'Speed When It Matters',
    body:
      'Emergencies don\'t wait. Our Premium and Elite health tourism packages accept urgent cases because we understand that sometimes days — even hours — make all the difference.',
  },
];

const SERVICES = [
  {
    icon: '✈️',
    title: 'Flight Bookings',
    body: 'Economy to business class across all major airlines, with the best fares sourced for your route and budget.',
  },
  {
    icon: '🛂',
    title: 'Visa Assistance',
    body: 'End-to-end visa support for Schengen, UK, US, Canada, and 40+ countries — documentation, submission, and tracking.',
  },
  {
    icon: '🏥',
    title: 'Health Tourism',
    body: 'Four facilitation tiers from routine checkups to life-critical emergencies — with a dedicated coordinator working solely for you.',
  },
  {
    icon: '🏨',
    title: 'Hotels & Packages',
    body: 'Curated hotel placements and all-inclusive packages for leisure, corporate, and medical travel.',
  },
  {
    icon: '💼',
    title: 'Corporate Travel',
    body: 'Managed travel accounts for organisations — bulk bookings, expense reporting, and dedicated account management.',
  },
  {
    icon: '🩺',
    title: 'Medical Coordination',
    body: 'From appointment booking to post-return follow-up, we manage every step of your international medical journey.',
  },
];

const TEAM = [
  {
    name: 'Anibueze Roseline',
    role: 'Managing Director',
    img: ladyRoseImage,
  },
  {
    name: 'Ursular Udo',
    role: 'General Manager',
    img: udoImage,
  },
  {
    name: 'Mazie Jerry',
    role: 'Visa & Immigration Lead',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

/* ── Animated counter ── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const numeric = parseInt(target.replace(/\D/g, ''), 10);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(numeric / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= numeric) { setCount(numeric); clearInterval(timer); }
            else setCount(start);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const suffix = target.replace(/[\d,]/g, '');
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <>
      {/* ── HERO with YouTube Background - FULL COVERAGE (Mobile Fixed) ── */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        {/* YouTube Video Background - Fixed for Mobile */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[300%] min-h-[300%] md:w-[177.77777778vh] md:h-[177.77777778vw] md:min-w-0 md:min-h-0 pointer-events-none"
              src="https://www.youtube.com/embed/o9R_uwwoc20?autoplay=1&mute=1&loop=1&playlist=o9R_uwwoc20&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/70 via-navy-700/70 to-red-800/70 z-0"></div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">About R-Pro</div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Nigeria's Most Trusted<br />
              <span className="text-[#db0303] italic">Travel Partner</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
              Since 2013, R-Pro Travels and Tours has been getting Nigerians to their destinations — 
              flights, visas, hotels, and life-changing medical care — with honesty, speed, and heart.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {/* Work With Us button - links to external site */}
              <a
                href="https://rprotravels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#db0303] hover:bg-red-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold uppercase tracking-wide transition text-sm sm:text-base"
              >
                Work With Us
              </a>
              <a
                href="#our-story"
                className="border border-white/30 hover:border-white text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold uppercase tracking-wide transition text-sm sm:text-base"
              >
                Our Story ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <div className="bg-[#db0303] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl md:text-4xl font-bold">
                <Counter target={s.value} />
              </div>
              <div className="text-white/80 text-xs md:text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <section id="our-story" className="py-16 md:py-20 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image collage */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80"
                alt="Airplane wing over clouds — representing global travel"
                className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-3 md:-bottom-8 md:-right-4 bg-[#db0303] text-white rounded-xl p-4 md:p-5 shadow-xl max-w-[200px] md:max-w-xs">
                <div className="font-serif text-xl md:text-2xl font-bold">Est. 2013</div>
                <div className="text-white/80 text-xs md:text-sm mt-1">Over a decade of trusted service from Lagos to the world.</div>
              </div>
            </div>

            {/* Story text */}
            <div className="pt-6 md:pt-0">
              <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3 flex items-center gap-2">
                <span className="w-10 h-px bg-red-600/50" /> Our Story
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Built on a Simple{' '}
                <span className="text-[#db0303] italic">Principle</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                R-Pro Travels and Tours was founded in Lagos in 2013 with one conviction: Nigerians 
                deserve a travel partner who genuinely works for them. Not for airlines. Not for hotels. 
                Not for hospitals. For <em>you</em>.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                What began as a boutique flight and visa agency has grown into one of Nigeria's most 
                comprehensive travel companies — offering everything from Schengen visas to life-critical 
                health tourism facilitation for families navigating medical emergencies abroad.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                Our Lagos headquarters serves clients across Nigeria and the diaspora. Whatever your 
                destination, whatever your need — we handle it with honesty, speed, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT (Health Tourism callout) ── */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3 flex justify-center items-center gap-2">
              <span className="w-8 md:w-10 h-px bg-red-600/50" /> Why R-Pro <span className="w-8 md:w-10 h-px bg-red-600/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              We Work for <span className="text-[#db0303] italic">You</span> — Not the Industry
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
              Most travel and health tourism facilitators earn commissions from airlines, hotels, and hospitals — 
              meaning their recommendations serve their income. R-Pro charges a transparent fee and recommends 
              only what is right for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-navy-800 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-white/10 flex gap-3 md:gap-4"
              >
                <div className="text-2xl md:text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-1">{v.title}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">{v.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3 flex justify-center items-center gap-2">
              <span className="w-8 md:w-10 h-px bg-red-600/50" /> What We Do <span className="w-8 md:w-10 h-px bg-red-600/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Everything You Need,{' '}
              <span className="text-[#db0303] italic">One Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              From the moment you decide to travel to the moment you return home, R-Pro covers every step of the journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 dark:bg-navy-900 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-white/10 group hover:border-[#db0303]/40 transition"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{s.icon}</div>
                <div className="font-serif text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#db0303] transition">
                  {s.title}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTH TOURISM HIGHLIGHT ── */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-gradient-to-br from-navy-800 via-navy-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">Health Tourism</div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                When Health Can't{' '}
                <span className="text-[#db0303] italic">Wait</span>
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
                Our Health Tourism Facilitation service gives Nigerian patients access to world-class 
                medical care in India, Turkey, UK, Dubai, and beyond — with a dedicated coordinator 
                managing every detail so you can focus on getting better.
              </p>
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {['Essential — $200 · Wellness & routine checkups',
                  'Standard — $350 · Fertility, dental, cosmetic surgery',
                  'Premium — $650 · Cardiac, oncology, neurosurgery',
                  'Elite — $1,000 · Critical emergencies, VIP white-glove'].map((line) => (
                  <div key={line} className="flex items-start gap-2 md:gap-3">
                    <span className="text-[#db0303] mt-0.5 flex-shrink-0 text-sm md:text-base">✓</span>
                    <span className="text-white/80 text-xs md:text-sm">{line}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="inline-block bg-[#db0303] hover:bg-red-700 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-bold uppercase tracking-wide transition text-sm md:text-base"
              >
                Explore Health Tourism →
              </a>
            </div>
            <div className="relative mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80"
                alt="Medical professional consultation"
                className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-800/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

            {/* ── MEET THE TEAM ── */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3 flex justify-center items-center gap-2">
              <span className="w-8 md:w-10 h-px bg-red-600/50" /> Our Team <span className="w-8 md:w-10 h-px bg-red-600/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              People Who{' '}
              <span className="text-[#db0303] italic">Go the Distance</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Our coordinators are more than agents — they're advocates, problem-solvers, and companions on your journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 dark:bg-navy-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Larger image - full width and taller */}
                <div className="w-full overflow-hidden bg-gray-200 dark:bg-navy-800">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-80 md:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="font-serif text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-[#db0303] text-xs font-bold tracking-wider mt-1 mb-3">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE / CTA ── */}
      <section className="py-16 md:py-20 px-4 md:px-12 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80"
                alt="Lagos Nigeria skyline — R-Pro headquarters city"
                className="rounded-2xl w-full h-64 md:h-72 object-cover shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">Headquarters</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Based in Lagos,{' '}
                <span className="text-[#db0303] italic">Serving the World</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                Our headquarters in Lekki, Lagos is open Monday to Saturday. Walk-ins are welcome, 
                though we recommend booking a free 30-minute consultation for visa and health tourism enquiries.
              </p>
              <div className="bg-white dark:bg-navy-800 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-white/10 mb-6">
                <div className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base">🏙️ Lagos HQ</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  House 13 Road 1 Lekki Gardens, Eti-Osa, Lagos<br />
                  📞 0906 199 3781<br />
                  ✉️ Customercare@rprogroup.net<br />
                  Mon–Sat: 9am – 5pm · Sun: WhatsApp only
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="/contact"
                  className="bg-[#db0303] hover:bg-red-700 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-bold uppercase tracking-wide transition text-sm md:text-base"
                >
                  📨 Get in Touch
                </a>
                <a
                  href="https://wa.me/2349061993781"
                  className="border border-gray-300 dark:border-white/20 hover:border-[#db0303] text-gray-900 dark:text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-bold uppercase tracking-wide transition text-sm md:text-base"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}