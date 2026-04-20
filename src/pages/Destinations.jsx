import React, { useState } from 'react';

const Destinations = () => {
  const [filter, setFilter] = useState('all');

  const destinations = [
    { name: 'London', flag: '🇬🇧', region: 'europe', flight: '₦850k', visa: '₦250k', hotel: '₦180k/night', desc: "The UK's capital — world-class culture, theatre, shopping and history." },
    { name: 'Paris', flag: '🇫🇷', region: 'europe', flight: '₦720k', visa: '₦250k', hotel: '₦150k/night', desc: 'The City of Light — romance, haute cuisine and iconic landmarks.' },
    { name: 'Dubai', flag: '🇦🇪', region: 'middleeast', flight: '₦420k', visa: '₦150k', hotel: '₦120k/night', desc: 'The ultimate luxury destination — world record towers and tax-free shopping.' },
    { name: 'New York', flag: '🇺🇸', region: 'americas', flight: '₦980k', visa: '₦280k', hotel: '₦200k/night', desc: 'Broadway, Fifth Avenue, Central Park and unmatched energy.' },
    { name: 'Toronto', flag: '🇨🇦', region: 'americas', flight: '₦1.1m', visa: '₦300k', hotel: '₦180k/night', desc: "Canada's largest city — multicultural, vibrant gateway to Niagara Falls." },
    { name: 'Accra', flag: '🇬🇭', region: 'africa', flight: '₦95k', visa: 'Visa-Free', hotel: '₦50k/night', desc: 'Beautiful beaches, rich culture and the warmth of West Africa.' },
    { name: 'Bangkok', flag: '🇹🇭', region: 'asia', flight: '₦650k', visa: '₦90k', hotel: '₦70k/night', desc: 'Ancient temples, street food paradise and world-class hospitals.' },
    { name: 'Istanbul', flag: '🇹🇷', region: 'europe', flight: '₦480k', visa: '₦120k', hotel: '₦80k/night', desc: 'Where East meets West — Byzantine history and Bosphorus views.' },
    { name: 'Nairobi', flag: '🇰🇪', region: 'africa', flight: '₦180k', visa: 'ETA Visa', hotel: '₦60k/night', desc: 'Maasai Mara safari, Nairobi National Park and vibrant city culture.' }
  ];

  const filters = [
    { id: 'all', label: 'All Destinations' },
    { id: 'europe', label: 'Europe' },
    { id: 'middleeast', label: 'Middle East' },
    { id: 'americas', label: 'Americas' },
    { id: 'asia', label: 'Asia' },
    { id: 'africa', label: 'Africa' }
  ];

  const filteredDestinations = filter === 'all' ? destinations : destinations.filter(d => d.region === filter);

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#ff0909] text-xs font-bold tracking-wider mb-3">Destinations</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Explore the<br /><span className="text-[#ff0909] italic">World With Us</span></h1>
          <p className="text-white/70 text-xl mt-4">From Lagos to London, Abuja to Accra — live prices, visa requirements and curated packages for every destination we serve.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition ${filter === f.id ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map(d => (
              <a key={d.name} href="https://rprotravels.com" target="_blank" className="group bg-gray-50 dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-40 flex items-center justify-center text-7xl bg-gradient-to-br from-navy-700 to-red-700`}>
                  {d.flag}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{d.flag}</span>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">{d.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{d.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-[#ff0909]">Flights from {d.flight}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-[#ff0909]">Visa from {d.visa}</span>
                    {d.hotel && <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-400">Hotels from {d.hotel}</span>}
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-bold text-sm uppercase tracking-wide transition">Book {d.name} Trip →</button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;