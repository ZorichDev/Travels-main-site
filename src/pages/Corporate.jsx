import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Repeat, Building2, Globe, Plane, BarChart3, CheckCircle, XCircle } from 'lucide-react';

const Corporate = () => {
  const solutions = [
    { icon: <ClipboardList size={32} />, title: 'Bulk Visa Processing', desc: 'Process multiple visas simultaneously with dedicated R-Pro Travels consultants and priority embassy slots.' },
    { icon: <Repeat size={32} />, title: 'Annual Retainer', desc: 'One annual fee covers unlimited visa consultations, discounted processing fees and dedicated account management — 20% average savings.' },
    { icon: <Building2 size={32} />, title: 'NGO & Embassy Support', desc: 'Specialised facilitation for NGOs, embassies and diplomatic missions — including diplomatic note coordination.' },
    { icon: <Globe size={32} />, title: 'Expat Quota Management', desc: 'We manage your CERPAC applications, expatriate quota renewals and all NIS compliance.' },
    { icon: <Plane size={32} />, title: 'Corporate Travel Desk', desc: '24/7 corporate travel desk — emergency flight changes, last-minute bookings and in-destination support.' },
    { icon: <BarChart3 size={32} />, title: 'Travel Analytics', desc: 'Monthly reporting on visa spend, travel patterns and cost savings with a dedicated online dashboard.' }
  ];

  const plans = [
    { name: 'SME Plan', features: ['Annual Visa Facilitations: Up to 10', 'Dedicated Account Manager: ❌', 'Priority Embassy Slots: ❌', 'Bulk Discount on Fees: 10%', '24/7 Emergency Support: ❌', 'Travel Analytics Dashboard: ❌', 'CERPAC / Expat Quota: ❌', 'NGO / Diplomatic Support: ❌', 'Retainer Fee: ₦500,000'] },
    { name: 'Business Plan', features: ['Annual Visa Facilitations: Up to 50', 'Dedicated Account Manager: ✓', 'Priority Embassy Slots: ✓', 'Bulk Discount on Fees: 15%', '24/7 Emergency Support: ❌', 'Travel Analytics Dashboard: ✓', 'CERPAC / Expat Quota: On request', 'NGO / Diplomatic Support: ❌', 'Retainer Fee: ₦1,500,000'] },
    { name: 'Enterprise Plan', features: ['Annual Visa Facilitations: Unlimited', 'Dedicated Account Manager: ✓', 'Priority Embassy Slots: ✓', 'Bulk Discount on Fees: 25%', '24/7 Emergency Support: ✓', 'Travel Analytics Dashboard: ✓', 'CERPAC / Expat Quota: Included', 'NGO / Diplomatic Support: ✓', 'Retainer Fee: Custom'] }
  ];

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-bg-[#ff0909]-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#ff0909] text-xs font-bold tracking-wider mb-3">Corporate & Institutional</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Enterprise Travel<br /><span className="text-[#ff0909] italic">Simplified</span></h1>
          <p className="text-white/70 text-xl mt-4">Annual retainers, bulk visa processing, NGO support and expatriate management — all from one trusted partner.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3">Solutions</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">What We Do For <span className="text-bg-[#ff0909]-600 italic">Businesses</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3">From SMEs to multinationals — tailobg-[#ff0909] travel solutions that save time, bg-[#ff0909]uce costs and eliminate headaches.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {solutions.map((s, i) => (
              <div key={i} className="bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-bg-[#ff0909]-600 mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3">Plans</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Corporate <span className="text-bg-[#ff0909]-600 italic">Plan Comparison</span></h2>
            <div className="overflow-x-auto mt-8">
              <table className="w-full bg-gray-50 dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                <thead>
                  <tr className="bg-gray-100 dark:bg-navy-800">
                    <th className="px-5 py-3 text-left text-xs font-bold text-bg-[#ff0909]-600 uppercase tracking-wider">Feature</th>
                    {plans.map(p => <th key={p.name} className="px-5 py-3 text-left text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {plans[0].features.map((_, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-white/10">
                      <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">{plans[0].features[idx].split(':')[0]}</td>
                      {plans.map(p => {
                        const value = p.features[idx].split(':')[1].trim();
                        return (
                          <td key={p.name} className="px-5 py-3 text-sm">
                            {value === '✓' ? <CheckCircle size={18} className="text-green-600" /> :
                              value === '❌' ? <XCircle size={18} className="text-gray-400" /> :
                                value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white">Ready to Simplify<br /><span className="text-[#ff0909] italic">Corporate Travel?</span></h3>
              <p className="text-white/60 text-lg mt-2">Book a free 30-minute consultation. We'll put together a custom proposal within 48 hours.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/contact">
                <button className="bg-bg-[#ff0909]-600 hover:bg-bg-[#ff0909]-700 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition">Book a Consultation</button>
              </Link>
              <button className="border border-white/40 text-white/90 hover:text-bg-[#ff0909]-600 hover:border-bg-[#ff0909]-600 px-6 py-3 rounded font-bold uppercase tracking-wide transition">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;