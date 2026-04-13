import React from 'react';

const DestinationsPreview = () => {
  const destinations = [
    { flag: '🇬🇧', name: 'London', flight: '₦850k', visa: '₦250k', bg: 'bg-gradient-to-br from-navy-800 to-navy-950' },
    { flag: '🇦🇪', name: 'Dubai', flight: '₦420k', visa: '₦150k', bg: 'bg-gradient-to-br from-amber-800 to-amber-950' },
    { flag: '🇨🇦', name: 'Toronto', flight: '₦1.1m', visa: '₦300k', bg: 'bg-gradient-to-br from-blue-800 to-blue-950' },
    { flag: '🇺🇸', name: 'New York', flight: '₦980k', visa: '₦280k', bg: 'bg-gradient-to-br from-gray-800 to-gray-950' },
    { flag: '🇫🇷', name: 'Paris', flight: '₦720k', visa: '₦250k', bg: 'bg-gradient-to-br from-rose-800 to-rose-950' },
    { flag: '🇬🇭', name: 'Accra', flight: '₦95k', visa: 'Visa-Free', bg: 'bg-gradient-to-br from-green-800 to-green-950' }
  ];

  return (
    <div className="py-20 px-4 md:px-12 bg-gray-100 dark:bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-red-600 text-xs font-bold tracking-wider mb-3">here we go</div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">village <span className="text-red-600 italic">Destinations</span></h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mt-3 mb-12">re-filled searches, live visa prices, and live flight prices — click any destination to book.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map(d => (
            <a key={d.name} href="https://rprotravels.com" target="_blank" className={`${d.bg} rounded-xl overflow-hidden relative h-64 group cursor-pointer`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-3xl">{d.flag}</div>
                <div className="font-serif text-2xl font-bold">{d.name}</div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-red-600/30 border border-red-500/50 px-2 py-1 rounded">Flights from {d.flight}</span>
                  <span className="text-xs bg-red-600/30 border border-red-500/50 px-2 py-1 rounded">Visa from {d.visa}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPreview;