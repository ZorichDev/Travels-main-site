import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 🔑 Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'visa',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: 'visa', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-navy-800 via-navy-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#db0303] text-xs font-bold tracking-wider mb-3">Contact Us</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
            Let's Plan Your<br />
            <span className="text-[#db0303] italic">Journey Together</span>
          </h1>
          <p className="text-white/70 text-xl mt-4">
            Reach our team by WhatsApp, email or visit one of our offices in Lagos, Abuja or Port Harcourt.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 md:px-12 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info cards — unchanged */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                <div className="text-3xl mb-3">💬</div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">WhatsApp (Fastest)</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Available 24/7 — response within minutes.<br />
                  <a href="#" className="text-red-600 hover:underline">0906 199 3781</a>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                <div className="text-3xl mb-3">✉️</div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">Email Us</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  General: <a href="mailto:Customercare@rprogroup.net" className="text-red-600 hover:underline">Customercare@rprogroup.net</a><br />
                  Corporate: <a href="mailto:corporate@rprotravels.com" className="text-red-600 hover:underline">corporate@rprotravels.com</a>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                <div className="text-3xl mb-3">📅</div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">Free Consultation</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Book a free 30-minute consultation with a travel expert — visa advice, medical tourism or corporate packages.
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                <div className="text-3xl mb-3">⏰</div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">Office Hours</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Mon–Fri: 9am – 5pm<br />Sat: 9am – 5pm · Sun: WhatsApp only
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 dark:bg-navy-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">We typically respond within 2 hours during office hours.</p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                  ✅ Message sent! We'll get back to you within 2 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  ❌ Something went wrong. Please try again or WhatsApp us directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Phone / WhatsApp</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">I Need Help With</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20">
                    <option value="visa">Visa Application</option>
                    <option value="flight">Flight Booking</option>
                    <option value="medical">Medical Tourism</option>
                    <option value="hotel">Hotel / Package</option>
                    <option value="corporate">Corporate Account</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-bold text-red-600 tracking-wider mb-1">Message</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/20" placeholder="Tell us about your travel plans, destination, timeline and budget…" />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold uppercase tracking-wide transition"
                >
                  {status === 'sending' ? '⏳ Sending...' : '📨 Send Message'}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            </div>
          </div>

          {/* Offices section — unchanged */}
          <div className="mt-16 text-center">
            <div className="text-red-600 text-xs font-bold tracking-wider mb-3 flex justify-center items-center gap-2">
              <span className="w-10 h-px bg-red-600/50" /> Our Offices <span className="w-10 h-px bg-red-600/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Visit Us <span className="text-red-600 italic">In Person</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Walk-ins welcome during office hours. Appointment recommended for visa consultations.
            </p>
            <div className="flex justify-center">
              <div className="bg-gray-50 dark:bg-navy-900 rounded-xl p-6 border border-gray-200 dark:border-white/10 max-w-md w-full text-center">
                <div className="text-4xl mb-3">🏙️</div>
                <div className="font-serif text-xl font-bold text-gray-900 dark:text-white">Lagos (HQ)</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  House 13 Road 1 Lekki Gardens<br />
                  Eti-Osa Lagos, Lagos, Nigeria<br />
                  0906 199 3781<br />
                  Customercare@rprogroup.net
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;