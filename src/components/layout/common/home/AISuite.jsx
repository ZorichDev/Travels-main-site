import React from 'react';
import { FileText, DollarSign, HeartPulse, Scan, File, MapPin, ChevronRight } from 'lucide-react';

const AISuite = () => {
  const tools = [
    { 
      icon: <FileText size={32} />, 
      title: 'Visa Checker', 
      desc: 'Instant visa requirements for 50+ destinations. Processing time, government fees, and R-Pro Travels service fees in Naira.',
      action: 'Check Now →',
      link: '/visa-checker'
    },
    { 
      icon: <DollarSign size={32} />, 
      title: 'Cost Estimator', 
      desc: 'Full Naira breakdown — visa, flights, hotels, daily costs and money-saving tips for any destination.',
      action: 'Estimate Now →',
      link: '/cost-estimator'
    },
    { 
      icon: <HeartPulse size={32} />, 
      title: 'Medical Matcher', 
      desc: 'Describe your condition and budget — AI recommends your top 3 treatment countries with full package estimates.',
      action: 'Find Match →',
      link: '/medical-matcher'
    },
    { 
      icon: <Scan size={32} />, 
      title: 'Document Scanner', 
      desc: 'Tick your documents, get a readiness score out of 100 — with critical gaps and improvement tips.',
      action: 'Scan Docs →',
      link: '/document-scanner'
    },
    { 
      icon: <File size={32} />, 
      title: 'Cover Letter Generator', 
      desc: 'Embassy-standard cover letter in seconds — personalised to your visa type and purpose of travel.',
      action: 'Generate →',
      link: '/cover-letter'
    },
    { 
      icon: <MapPin size={32} />, 
      title: 'Itinerary Builder', 
      desc: 'Day-by-day travel itinerary with activities, hotel picks and meal suggestions — downloadable as PDF.',
      action: 'Build Itinerary →',
      link: '/itinerary-builder'
    }
  ];

  return (
    <div className="py-20 px-4 md:px-12 bg-gray-100 dark:bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-red-600"></div>
            <span className="text-red-600 text-xs font-bold tracking-wider uppercase">AI Suite</span>
            <div className="w-8 h-px bg-red-600"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            6 Live AI Tools<br />
            Built <span className="text-red-600 italic">For You</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {/* Powered by Claude AI — instant answers on visas, costs, documents and destinations. */}
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30 relative overflow-hidden cursor-pointer"
            >
              {/* Red accent line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Live AI Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 text-[11px] font-bold tracking-wider mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LIVE AI
              </div>
              
              {/* Icon with hover effect */}
              <div className="text-red-600 dark:text-red-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors">
                {tool.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 min-h-[80px]">
                {tool.desc}
              </p>
              
              {/* Action Button */}
              <button className="text-red-600 text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 group-hover:text-red-700">
                {tool.action}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-600 text-sm">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-red-600"></span>
            <span className="text-red-600">✦</span>
            <span className="text-red-600">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-red-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISuite;