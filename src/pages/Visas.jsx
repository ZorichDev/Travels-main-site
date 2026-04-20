import React from 'react';
import { Zap, DollarSign, FileText, Mail, CheckCircle } from 'lucide-react';

const Visas = () => {
  const countries = [
    { flag: '🇬🇧', name: 'United Kingdom', type: 'Standard Visitor · Student · Work', fee: 'From ₦250,000 service fee' },
    { flag: '🇪🇺', name: 'Schengen Area', type: 'Tourist · Business · Transit', fee: 'From ₦250,000 service fee' },
    { flag: '🇺🇸', name: 'United States', type: 'B1/B2 · F1 Student · Work', fee: 'From ₦280,000 service fee' },
    { flag: '🇨🇦', name: 'Canada', type: 'Tourist · Study · Work Permit', fee: 'From ₦300,000 service fee' },
    { flag: '🇦🇪', name: 'UAE / Dubai', type: 'Tourist · Business · Residence', fee: 'From ₦150,000 service fee' },
    { flag: '🇦🇺', name: 'Australia', type: 'Tourist · Student · Work', fee: 'From ₦320,000 service fee' },
    { flag: '🇹🇷', name: 'Turkey', type: 'Tourist · Business · Student', fee: 'From ₦120,000 service fee' },
    { flag: '🇯🇵', name: 'Japan', type: 'Tourist · Business · Study', fee: 'From ₦180,000 service fee' }
  ];

  const plans = [
    { name: 'Plan A', title: 'African Tourist', price: '₦150,000 – ₦250,000', features: ['African destination visas', 'Document checklist & review', 'Application submission', 'Status tracking', 'WhatsApp support'] },
    { name: 'Plan B', title: 'Global Tourist', price: '₦250,000 – ₦650,000', features: ['UK, Schengen, US, Canada & more', 'Full document preparation', 'Cover letter included', 'Interview coaching', 'Priority processing'], featured: true },
    { name: 'Plan C', title: 'Study Permit', price: '₦450,000 flat rate', features: ['Student visa facilitation', 'Admission letter guidance', 'Financial statement review', 'Embassy interview prep', 'Dedicated consultant'] },
    { name: 'Plan D', title: 'Study + Work', price: '₦550,000 flat rate', features: ['Study + Work Visa Processing', 'Complete document package', 'Post-arrival support', 'Dedicated consultant'] }
  ];

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-bg-[#ff0909]-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#ff0909] text-xs font-bold tracking-wider mb-3">Visa Services</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Your Visa,<br /><span className="text-[#ff0909] italic">Expertly Handled</span></h1>
          <p className="text-white/70 text-xl mt-4">From UK to Schengen, USA to Canada — we facilitate visa applications to 50+ destinations with unmatched expertise and AI-powebg-[#ff0909] preparation.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          {/* AI Checker Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3">AI-Powebg-[#ff0909]</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Instant <span className="text-bg-[#ff0909]-600 italic">Visa Checker</span></h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-3 mb-6">Get instant visa requirements, processing times and R-Pro Travels fees for any destination — in seconds.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-4"><Zap size={24} className="text-bg-[#ff0909]-600 mb-2" /><div className="font-bold text-gray-900 dark:text-white">Instant Results</div><div className="text-sm text-gray-500">No waiting, live AI answers</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-4"><DollarSign size={24} className="text-bg-[#ff0909]-600 mb-2" /><div className="font-bold text-gray-900 dark:text-white">Full Cost Breakdown</div><div className="text-sm text-gray-500">In Naira, Dollars or Pounds</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-4"><FileText size={24} className="text-bg-[#ff0909]-600 mb-2" /><div className="font-bold text-gray-900 dark:text-white">Document Checklist</div><div className="text-sm text-gray-500">Know exactly what to prepare</div></div>
                <div className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-4"><Mail size={24} className="text-bg-[#ff0909]-600 mb-2" /><div className="font-bold text-gray-900 dark:text-white">Cover Letter AI</div><div className="text-sm text-gray-500">Embassy-standard in seconds</div></div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">🛂 Quick Visa Check</h3>
              <div className="space-y-4">
                <div><label className="block text-xs font-bold text-bg-[#ff0909]-600 tracking-wider mb-1">Your Nationality</label><select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20"><option>Nigerian</option><option>Ghanaian</option><option>Kenyan</option></select></div>
                <div><label className="block text-xs font-bold text-bg-[#ff0909]-600 tracking-wider mb-1">Destination Country</label><select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20"><option>United Kingdom 🇬🇧</option><option>Schengen Area 🇪🇺</option><option>United States 🇺🇸</option><option>Canada 🇨🇦</option></select></div>
                <div><label className="block text-xs font-bold text-bg-[#ff0909]-600 tracking-wider mb-1">Purpose of Visit</label><select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20"><option>Tourism / Holiday</option><option>Business</option><option>Medical Treatment</option><option>Study</option></select></div>
                <button className="w-full bg-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-700 text-white py-3 rounded-lg font-bold uppercase tracking-wide transition">🤖 Check with Rova AI</button>
                <p className="text-center text-xs text-gray-500">Powebg-[#ff0909] by Claude AI · Results in under 5 seconds</p>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3">Pricing</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Visa <span className="text-bg-[#ff0909]-600 italic">Service Plans</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {plans.map((plan, i) => (
                <div key={i} className={`relative bg-white dark:bg-navy-900 border rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-xl ${plan.featured ? 'border-bg-[#ff0909]-600 shadow-lg -translate-y-2' : 'border-gray-200 dark:border-white/10'}`}>
                  {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg-[#ff0909]-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                  <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-2">{plan.name}</div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.price}</div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"><CheckCircle size={14} className="text-bg-[#ff0909]-600 mt-0.5 flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <button className="w-full py-2 rounded-lg border-2 border-navy-800 dark:border-navy-600 text-navy-800 dark:text-navy-400 font-bold hover:bg-navy-800 hover:text-white transition">Get Started</button>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">✦ Government / embassy fees charged separately ✦ Visa approval at discretion of issuing authority</p>
          </div>

          {/* Destinations Grid */}
          <div>
            <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3">50+ Destinations</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Where We <span className="text-bg-[#ff0909]-600 italic">Process Visas</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {countries.map(c => (
                <div key={c.name} className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-4 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-4xl mb-2">{c.flag}</div>
                  <div className="font-bold text-gray-900 dark:text-white">{c.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{c.type}</div>
                  <div className="text-sm font-bold text-bg-[#ff0909]-600 mt-2">{c.fee}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visas;