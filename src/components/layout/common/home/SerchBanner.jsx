import React from 'react';

const SearchBanner = () => {
  return (
    <div className="bg-navy-800 dark:bg-navy-900 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-white">Ready to Fly? Book on Our Platform</h3>
          <p className="text-white/60 text-sm">Compare flights, hotels, packages & more — with Pay Small Small from ₦45,000 deposit</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://rprotravels.com" target="_blank" className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded font-bold text-sm uppercase tracking-wide transition">✈️ Search Flights</a>
          <a href="https://rprotravels.com" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded font-bold text-sm uppercase tracking-wide transition">🏨 Book Hotels</a>
          <a href="https://rprotravels.com" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded font-bold text-sm uppercase tracking-wide transition">🌍 Holiday Packages</a>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;