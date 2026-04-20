import React from 'react';

const FeaturesStrip = () => {
  const features = ['Price Watch', 'Pay Small Small', 'Last-Minute Deals', 'Travel SIM', 'Prepaid Card', 'R-Pro Rewards', 'Mobile App', 'Rova AI'];
  
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {features.map(f => (
          <div key={f} className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-lg p-3 text-center text-sm font-semibold text-gray-800 dark:text-white hover:border-bg-[#ff0909]-500 hover:-translate-y-0.5 transition cursor-pointer">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesStrip;