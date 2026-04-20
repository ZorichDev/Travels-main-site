import React from 'react';
import { Link } from 'react-router-dom';

const MedicalSection = () => {
  const countries = [
    { 
      flag: '🇹🇭', 
      code: 'TH',
      name: 'Thailand', 
      specialties: 'Cardiac · Orthopaedics · Cosmetic Surgery · Oncology', 
      savings: 'Save up to 70%',
      savingsColor: 'green'
    },
    { 
      flag: '🇮🇳', 
      code: 'IN',
      name: 'India', 
      specialties: 'Cardiology · Neurology · Organ Transplant · IVF', 
      savings: 'Save up to 65%',
      savingsColor: 'green'
    },
    { 
      flag: '🇹🇷', 
      code: 'TR',
      name: 'Turkey', 
      specialties: 'Hair Transplant · Dental · Cosmetic · Eye Surgery', 
      savings: 'Save up to 60%',
      savingsColor: 'green'
    },
    { 
      flag: '🇦🇪', 
      code: 'AE',
      name: 'UAE', 
      specialties: 'Oncology · Spine · Fertility · Cardiac Surgery', 
      savings: 'Premium Care',
      savingsColor: 'blue'
    },
    { 
      flag: '🇬🇧', 
      code: 'GB',
      name: 'United Kingdom', 
      specialties: 'Neurosurgery · Cancer · Orthopaedics', 
      savings: 'World No.1 Standards',
      savingsColor: 'blue'
    },
    { 
      flag: '🇲🇾', 
      code: 'MY',
      name: 'Malaysia', 
      specialties: 'Cardiac · Orthopaedics · Diagnostics · Wellness', 
      savings: 'Save up to 55%',
      savingsColor: 'green'
    },
    { 
      flag: '🇸🇬', 
      code: 'SG',
      name: 'Singapore', 
      specialties: 'Oncology · Cardiology · Neurology · Transplants', 
      savings: "Asia's Best Hospitals",
      savingsColor: 'cyan'
    },
    { 
      flag: '🇰🇪', 
      code: 'KE',
      name: 'Kenya', 
      specialties: 'General Surgery · Cardiac · Oncology · Paediatrics', 
      savings: 'Pan-African Option',
      savingsColor: 'purple'
    },
  ];

  const getSavingsStyles = (savings, color) => {
    if (savings.includes('Save')) {
      return {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-700 dark:text-green-400',
        subText: 'text-green-600 dark:text-green-500'
      };
    } else if (savings === 'World No.1 Standards') {
      return {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-700 dark:text-blue-400',
        subText: 'text-blue-600 dark:text-blue-500'
      };
    } else if (savings === "Asia's Best Hospitals") {
      return {
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        text: 'text-cyan-700 dark:text-cyan-400',
        subText: 'text-cyan-600 dark:text-cyan-500'
      };
    } else if (savings === 'Premium Care') {
      return {
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-200 dark:border-amber-800',
        text: 'text-amber-700 dark:text-amber-400',
        subText: 'text-amber-600 dark:text-amber-500'
      };
    } else {
      return {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-700 dark:text-purple-400',
        subText: 'text-purple-600 dark:text-purple-500'
      };
    }
  };

  return (
    <div className="py-20 px-4 md:px-12 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-bg-[#ff0909]-600"></div>
            <span className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider uppercase">Medical Tourism</span>
            <div className="w-8 h-px bg-bg-[#ff0909]-600"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            World-Class Treatment,<br />
            <span className="text-bg-[#ff0909]-600 italic">African Roots</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            We match you to the best hospital in 19 countries — and handle every detail from visa to discharge.
          </p>
        </div>

        {/* Medical Destinations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, idx) => {
            const savingsStyle = getSavingsStyles(c.savings, c.savingsColor);
            return (
              <div 
                key={idx} 
                className="group bg-white dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-bg-[#ff0909]-500/30"
              >
                {/* Header with Flag and Code */}
                <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 dark:from-navy-800 dark:to-navy-800/50 px-5 py-4 border-b border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{c.flag}</div>
                    <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">{c.code}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-bg-[#ff0909]-600 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {c.specialties}
                  </p>
                  
                  {/* Savings Badge */}
                  <div className={`${savingsStyle.bg} rounded-lg p-2.5 text-center border ${savingsStyle.border}`}>
                    <div className={`font-bold text-sm ${savingsStyle.text}`}>
                      {c.savings}
                    </div>
                    {c.savings.includes('Save') && (
                      <div className={`text-xs ${savingsStyle.subText} mt-0.5`}>
                        vs UK/US prices
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-12">
          <Link 
            to="/medical"
            className="inline-flex items-center gap-2 bg-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-700 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Medical Tourism →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;