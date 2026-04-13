import React, { useState } from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [email, setEmail] = useState('');

  const featuredPost = {
    title: "The Complete Nigerian Guide to Getting a UK Visa in 2026",
    excerpt: "Everything you need to know — from financial requirements and bank statement preparation to cover letters and the new digital application process.",
    author: "R-Pro Travels Visa Team",
    readTime: "15 min read",
    date: "March 2026"
  };

  const posts = [
    { category: "Visa Tips", title: "How to Prepare Your Bank Statement for a Schengen Visa", excerpt: "The bank statement is the #1 reason Schengen visas get rejected. Here's exactly what embassies look for.", date: "Mar 20, 2026", readTime: "8 min read", thumb: "✈️" },
    { category: "Medical Tourism", title: "India vs Thailand: Which is Better for Heart Surgery in 2026?", excerpt: "A detailed comparison of costs, hospital quality and recovery conditions for cardiac surgery in Asia.", date: "Mar 15, 2026", readTime: "12 min read", thumb: "🏥" },
    { category: "Money & Travel", title: "How to Travel From Nigeria Without Losing Money on Exchange Rates", excerpt: "Prepaid travel cards, best time to exchange Naira and how our R-Pro Travels Prepaid Card saves you 8-15%.", date: "Mar 10, 2026", readTime: "6 min read", thumb: "💰" },
    { category: "Destination Guide", title: "Dubai on a Budget: How to Enjoy the UAE for Under ₦1.5m", excerpt: "Luxury experiences don't have to cost luxury prices. Our Dubai experts reveal the best value tips.", date: "Mar 5, 2026", readTime: "9 min read", thumb: "🛂" },
    { category: "Study Abroad", title: "Canada Study Permit 2026: New Rules Every Nigerian Applicant Must Know", excerpt: "Canada tightened study permit rules in late 2025. Here's what changed and how R-Pro Travels navigates it.", date: "Feb 28, 2026", readTime: "10 min read", thumb: "🎓" },
    { category: "Destination Guide", title: "10 African Countries Nigerians Can Visit Visa-Free in 2026", excerpt: "A complete list of visa-free and visa-on-arrival destinations for Nigerian passport holders.", date: "Feb 20, 2026", readTime: "5 min read", thumb: "🌍" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}! Thank you for subscribing.`);
    setEmail('');
  };

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">Travel Blog</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Insights, Tips &<br /><span className="text-[#db0303] italic">Travel Guides</span></h1>
          <p className="text-white/70 text-xl mt-4">Expert advice on visas, medical tourism, destinations and travel hacks for the discerning African traveller.</p>
        </div>
      </div>
      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 bg-gray-50 dark:bg-navy-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
            <div className="h-80 md:h-auto flex items-center justify-center text-8xl bg-gradient-to-br from-navy-700 to-red-700">🌍</div>
            <div className="p-8">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 text-xs font-bold tracking-wider mb-4">⭐ Featured Article</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{featuredPost.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>{featuredPost.author}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition">Read Full Guide →</button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {posts.map((post, i) => (
              <div key={i} className="bg-gray-50 dark:bg-navy-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${i % 2 === 0 ? 'from-navy-700 to-navy-900' : 'from-red-700 to-red-900'}`}>{post.thumb}</div>
                <div className="p-5">
                  <div className="text-red-600 text-xs font-bold tracking-wider mb-2">{post.category}</div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-red-600 text-xs font-bold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition">Read <ChevronRight size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-navy-800 to-red-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Never Miss a <span className="text-[#db0303] italic">Travel Deal</span></h2>
            <p className="text-white/70 max-w-md mx-auto mb-6">Visa updates, flight deals, medical tourism news and exclusive R-Pro Travels offers — every week.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-red-500" required />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition">Subscribe →</button>
            </form>
            <p className="text-white/40 text-xs mt-3">No spam. Unsubscribe any time.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;