import React from 'react';
import { Hospital, Plane, Hotel, CheckCircle } from 'lucide-react';

const Medical = () => {
  const countries = [
    { flag: '🇹🇭', name: 'Thailand', specialties: ['Cardiac & Orthopaedic Surgery', 'Cosmetic & Reconstructive', 'Bumrungrad & Bangkok Hospital'], savings: 'Save up to 70%' },
    { flag: '🇮🇳', name: 'India', specialties: ['Cardiology & Neurology', 'Organ Transplant & IVF', 'Apollo, Fortis, Medanta'], savings: 'Save up to 65%' },
    { flag: '🇹🇷', name: 'Turkey', specialties: ['Hair Transplant (FUE/DHI)', 'Dental & Eye Surgery', 'Cosmetic & Bariatric'], savings: 'Save up to 60%' },
    { flag: '🇦🇪', name: 'UAE', specialties: ['Oncology & Immunotherapy', 'Spine & Fertility', 'Cleveland Clinic Abu Dhabi'], savings: 'Premium Care' },
    { flag: '🇬🇧', name: 'United Kingdom', specialties: ['Neurosurgery & Cancer', 'Orthopaedics & Paediatrics', 'NHS-grade Private Hospitals'], savings: 'World No.1 Standards' },
    { flag: '🇲🇾', name: 'Malaysia', specialties: ['Cardiac & Vascular', 'Orthopaedics & Diagnostics', 'Pantai & Gleneagles'], savings: 'Save up to 55%' },
    { flag: '🇸🇬', name: 'Singapore', specialties: ['Oncology & Haematology', 'Neurology & Transplants', 'Raffles & Mount Elizabeth'], savings: "Asia's Best" },
    { flag: '🇩🇪', name: 'Germany', specialties: ['Oncology & Cancer', 'Cardiovascular Surgery', 'Charité & University Hospitals'], savings: 'European Excellence' }
  ];

  const steps = [
    { num: 1, title: 'Describe', desc: 'Tell Rova AI your condition and budget' },
    { num: 2, title: 'Match', desc: 'AI matches you to the best 3 countries' },
    { num: 3, title: 'Visa', desc: 'R-Pro Travels facilitates your medical visa' },
    { num: 4, title: 'Travel', desc: 'Flights + hotel + hospital all booked' },
    { num: 5, title: 'Recover', desc: 'We track from departure to discharge' }
  ];

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">Medical Tourism</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">World-Class Care,<br /><span className="text-[#db0303] italic">African Roots</span></h1>
          <p className="text-white/70 text-xl mt-4">End-to-end medical travel to 19 countries. We coordinate your visa, flights, hospital placement, accommodation and aftercare.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="text-red-600 text-xs font-bold tracking-wider mb-3">Why Choose Us</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Your Full<br /><span className="text-red-600 italic">Medical Journey</span></h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-3 mb-6">From your first consultation to your safe return home — R-Pro Travels manages every step.</p>
              <div className="space-y-3">
                <div className="flex gap-3 p-4 bg-gray-50 dark:bg-navy-900 rounded-xl border border-gray-200 dark:border-white/10"><Hospital size={24} className="text-red-600" /><div><div className="font-bold text-gray-900 dark:text-white">Hospital Matching</div><div className="text-sm text-gray-600 dark:text-gray-400">AI matches your condition to the best hospital in the best country for your budget</div></div></div>
                <div className="flex gap-3 p-4 bg-gray-50 dark:bg-navy-900 rounded-xl border border-gray-200 dark:border-white/10"><Plane size={24} className="text-red-600" /><div><div className="font-bold text-gray-900 dark:text-white">Medical Visa Fast-Track</div><div className="text-sm text-gray-600 dark:text-gray-400">We expedite medical visas with hospital invitation letters and all supporting documents</div></div></div>
                <div className="flex gap-3 p-4 bg-gray-50 dark:bg-navy-900 rounded-xl border border-gray-200 dark:border-white/10"><Hotel size={24} className="text-red-600" /><div><div className="font-bold text-gray-900 dark:text-white">Recovery Accommodation</div><div className="text-sm text-gray-600 dark:text-gray-400">Serviced apartments near hospitals for patients and accompanying family</div></div></div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10"><div className="font-serif text-4xl font-bold text-red-600">19</div><div className="text-sm text-gray-600">Countries Covered</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10"><div className="font-serif text-4xl font-bold text-red-600">150+</div><div className="text-sm text-gray-600">Partner Hospitals</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10"><div className="font-serif text-4xl font-bold text-red-600">70%</div><div className="text-sm text-gray-600">Max Cost Savings</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10"><div className="font-serif text-4xl font-bold text-red-600">24/7</div><div className="text-sm text-gray-600">Patient Support</div></div>
              </div>
              <div className="bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">🏥 Medical Matcher AI</h3>
                <div className="space-y-4">
                  <div><label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Medical Condition / Procedure</label><select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20"><option>Cardiac Surgery</option><option>Cancer Treatment</option><option>Orthopaedics / Joints</option></select></div>
                  <div><label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Budget Range (all-in)</label><select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20"><option>Under ₦3m</option><option>₦3m – ₦7m</option><option>₦7m – ₦15m</option></select></div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold uppercase tracking-wide transition">🤖 Match Me to a Hospital</button>
                </div>
              </div>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="mb-20">
            <div className="text-red-600 text-xs font-bold tracking-wider mb-3">19 Countries</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Our Medical <span className="text-red-600 italic">Destinations</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {countries.map(c => (
                <div key={c.name} className="bg-gray-50 dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-20 flex items-center px-5 text-5xl bg-gradient-to-r from-navy-100 to-red-100 dark:from-navy-800 dark:to-red-900/30">{c.flag}</div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{c.name}</h3>
                    <div className="space-y-1 mb-3">
                      {c.specialties.map((s, i) => (
                        <div key={i} className="flex items-start gap-1 text-xs text-gray-600 dark:text-gray-400"><CheckCircle size={10} className="text-red-600 mt-0.5" />{s}</div>
                      ))}
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center border border-green-200 dark:border-green-800"><div className="font-bold text-green-700 dark:text-green-400 text-sm">{c.savings}</div><div className="text-xs text-green-600 dark:text-green-500">vs UK/US prices</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">How Medical Tourism <span className="text-red-600 italic">Works</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map(step => (
                <div key={step.num} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-navy-800 dark:bg-navy-700 border-2 border-red-600 flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold text-white">{step.num}</div>
                  <div className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{step.desc}</div>
                  {step.num < 5 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-red-600 to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medical;