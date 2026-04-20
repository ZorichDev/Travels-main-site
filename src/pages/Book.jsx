import React, { useState } from 'react';
import { Plane, Hotel, Globe, PlaneTakeoff, Car, Ship, Shield, Compass } from 'lucide-react';

const Book = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', icon: <Plane size={24} />, label: 'Flights', desc: 'Economy to First Class' },
    { id: 'hotels', icon: <Hotel size={24} />, label: 'Hotels & Shortlets', desc: 'Curated globally' },
    { id: 'packages', icon: <Globe size={24} />, label: 'Packages', desc: 'All-inclusive deals' },
    { id: 'privatejet', icon: <PlaneTakeoff size={24} />, label: 'Private Jet', desc: 'Quote within hours' },
    { id: 'transfers', icon: <Car size={24} />, label: 'Airport Transfer', desc: 'Seamless pickups' },
    { id: 'tours', icon: <Compass size={24} />, label: 'Tours', desc: 'Guided experiences' },
    { id: 'cruise', icon: <Ship size={24} />, label: 'Cruise', desc: 'Ocean & river' },
    { id: 'insurance', icon: <Shield size={24} />, label: 'Travel Insurance', desc: 'Stay protected' }
  ];

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-bg-[#ff0909]-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#ff0909] text-xs font-bold tracking-wider mb-3">Book Travel</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Book Your Next<br /><span className="text-[#ff0909] italic">Adventure</span></h1>
          <p className="text-white/70 text-xl mt-4">Flights, hotels, packages, private jets, transfers — visit our booking platform. Pay Small Small with flexible instalments.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-xl text-center transition border ${activeTab === tab.id ? 'bg-bg-[#ff0909]-50 dark:bg-bg-[#ff0909]-900/20 border-bg-[#ff0909]-500' : 'bg-white dark:bg-navy-900 border-gray-200 dark:border-white/10 hover:border-bg-[#ff0909]-500'}`}
              >
                <div className={`${activeTab === tab.id ? 'text-bg-[#ff0909]-600' : 'text-gray-600 dark:text-gray-400'} mb-2 flex justify-center`}>{tab.icon}</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{tab.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{tab.desc}</div>
              </button>
            ))}
          </div>
          <div className="bg-gray-50 dark:bg-navy-900/50 rounded-2xl p-8 md:p-12 text-center border border-gray-200 dark:border-white/10">
            <div className="text-6xl mb-4">✈️</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Search & Book on Our <span className="text-bg-[#ff0909]-600 italic">Full Platform</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              All booking services — flights, hotels, packages, car rentals, tours and more — are available on our dedicated booking platform at <a href="https://rprotravels.com" target="_blank" className="text-bg-[#ff0909]-600 font-bold hover:underline">rprotravels.com</a>. Enjoy flexible Pay Small Small payment from ₦45,000 deposit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <a href="https://rprotravels.com" target="_blank" className="bg-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-700 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition">🔍 Search Flights</a>
              <a href="https://rprotravels.com" target="_blank" className="bg-navy-700 hover:bg-navy-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition">🏨 Book Hotels</a>
              <a href="https://rprotravels.com" target="_blank" className="border-2 border-bg-[#ff0909]-600 text-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-600 hover:text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition">🌍 View Packages</a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">💳 Pay Small Small available · All major cards accepted · Instant confirmation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;