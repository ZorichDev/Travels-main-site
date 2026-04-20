import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, FileText, HeartPulse, Plane, Hotel, Briefcase, PlaneTakeoff, Ship, Car, Shield } from 'lucide-react';

const Services = () => {
  const allServices = [
    { icon: <Globe size={32} />, title: 'Outbound Visa Facilitation', desc: 'Expert facilitation for 50+ destinations — UK, Schengen, US, Canada, UAE, and beyond.', tags: ['UK', 'Schengen', 'USA', 'Canada'], link: '/visas' },
    { icon: <FileText size={32} />, title: 'Nigeria Inbound Visas', desc: 'Full support for all 14 visa-on-arrival and regular entry categories into Nigeria.', tags: ['Tourist', 'Business', 'Diplomatic'], link: '/visas' },
    { icon: <HeartPulse size={32} />, title: 'Medical Tourism', desc: 'End-to-end medical travel to 19 countries. Visa, flights, hospital, accommodation — all sorted.', tags: ['Thailand', 'India', 'UK', 'Turkey'], link: '/medical' },
    { icon: <Plane size={32} />, title: 'Flights & Airport Services', desc: 'Economy to First Class, domestic and international. Live search with Pay Small Small.', tags: ['Economy', 'Business', 'First Class'], link: 'https://rprotravels.com', external: true },
    { icon: <Hotel size={32} />, title: 'Hotels & Shortlets', desc: 'Curated hotels and shortlet apartments globally — from budget to luxury 5-star.', tags: ['Hotels', 'Shortlets', 'Luxury'], link: 'https://rprotravels.com', external: true },
    { icon: <PlaneTakeoff size={32} />, title: 'Private Jet Charter', desc: 'Light to Ultra-Long Range aircraft for individuals and executives. Quote within hours.', tags: ['Light Jet', 'Mid-Range', 'Ultra-Long'], link: 'https://rprotravels.com', external: true },
    { icon: <Globe size={32} />, title: 'Tours & Holiday Packages', desc: 'Curated holiday packages — beach, city breaks, adventures and cultural tours.', tags: ['Beach', 'Adventure', 'Cultural'], link: 'https://rprotravels.com', external: true },
    { icon: <Ship size={32} />, title: 'DHL Logistics', desc: 'Secure courier for passport submissions, visa documents and personal shipments via DHL Express.', tags: ['Documents', 'Passports', 'Express'], link: 'https://rprotravels.com', external: true },
    { icon: <Briefcase size={32} />, title: 'Corporate & Institutional', desc: 'Bulk visa processing, annual retainers, NGO & embassy support, CERPAC packages.', tags: ['Bulk Visa', 'NGO', 'Embassy'], link: '/corporate' },
    { icon: <Car size={32} />, title: 'Airport Transfers', desc: 'Seamless airport pickup and drop-off services in major cities worldwide.', tags: ['Pickup', 'Drop-off', 'Luxury Cars'], link: 'https://rprotravels.com', external: true },
    { icon: <Shield size={32} />, title: 'Travel Insurance', desc: 'Comprehensive travel insurance coverage for medical emergencies, trip cancellations, and more.', tags: ['Medical', 'Cancellation', 'Luggage'], link: 'https://rprotravels.com', external: true }
  ];

  const ServiceCard = ({ service }) => {
    const content = (
      <div className="group bg-white dark:bg-navy-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl hover:border-bg-[#ff0909]-500/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bg-[#ff0909]-600 scale-x-0 group-hover:scale-x-100 transition origin-left" />
        <div className="text-gray-800 dark:text-white mb-4">{service.icon}</div>
        <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.desc}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-bg-[#ff0909]-50 dark:bg-bg-[#ff0909]-900/20 text-bg-[#ff0909]-700 dark:text-[#ff0909] border border-bg-[#ff0909]-200 dark:border-bg-[#ff0909]-800">{t}</span>
          ))}
        </div>
      </div>
    );

    if (service.external) {
      return <a href={service.link} target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return <Link to={service.link}>{content}</Link>;
  };

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-bg-[#ff0909]-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#ff0909] text-xs font-bold tracking-wider mb-3">Our Services</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Everything You Need,<br /><span className="text-[#ff0909] italic">One Platform</span></h1>
          <p className="text-white/70 text-xl mt-4">From your first visa to your final boarding pass — R-Pro Travels is the only travel partner you'll ever need in Africa.</p>
        </div>
      </div>
      <div className="py-20 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-bg-[#ff0909]-600 text-xs font-bold tracking-wider mb-3 flex items-center gap-2">Full Service Suite <span className="w-10 h-px bg-bg-[#ff0909]-600/50" /></div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">All Our <span className="text-bg-[#ff0909]-600 italic">Services</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mt-3">Click any service to explore full details, pricing and how to get started.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;