import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, MessageCircle, Mail, Clock, Plane, FileText, HeartPulse, Globe, Briefcase } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import logo from "../../assets/image/tag_logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceItems = [
    { name: 'Book Travel', path: '/book', icon: <Plane size={16} /> },
    { name: 'Visa Services', path: '/visas', icon: <FileText size={16} /> },
    { name: 'Medical Tourism', path: '/medical', icon: <HeartPulse size={16} /> },
    { name: 'Destinations', path: '/destinations', icon: <Globe size={16} /> },
    { name: 'Corporate', path: '/corporate', icon: <Briefcase size={16} /> },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  const linkColor = scrolled
    ? 'text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-[#db0303]'
    : 'text-white/90 hover:text-white';

  const activeLinkColor = 'text-red-500';

  return (
    <>
      {/* Top Sub-nav */}
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-navy-900 dark:bg-navy-950 border-b border-white/10 flex items-center px-4 md:px-12 text-white/60 text-xs overflow-hidden">
        <div className="flex flex-1 items-center gap-3 min-w-0 overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <MessageCircle size={12} />
            <span className="hidden sm:inline">+2349036630650</span>
            <span className="sm:hidden">WhatsApp</span>
          </div>
          <div className="w-px h-3 bg-white/20 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <Mail size={12} />
            <span className="hidden sm:inline">customercare@rprogroup.com.ng</span>
          </div>
          <div className="w-px h-3 bg-white/20 hidden md:block shrink-0" />
          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            <Clock size={12} /> Mon–Fri 8am–7pm · Sat 9am–5pm
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1 text-xs text-white/70 hover:text-white transition"
          >
            {theme === 'light' ? <Moon size={12} /> : <Sun size={12} />}
            <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
          
          <a
            href="https://rprotravels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded text-xs font-bold tracking-wide transition whitespace-nowrap"
          >
            <span className="hidden sm:inline">Start Your Journey →</span>
            <span className="sm:hidden">Book →</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`fixed top-10 left-0 right-0 z-40 h-16 flex items-center justify-between px-4 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur shadow-md border-b border-gray-200 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="R-Pro Travels"
            className="h-8 w-auto md:h-10 object-contain flex-shrink-0"
          />
          <span
            className="font-serif font-bold text-lg md:text-xl leading-tight tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? '#111827' : 'white' }}
          >
            R-Pro <span className="text-red-600">Travels</span>
          </span>
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      isActive(link.path) ? activeLinkColor : linkColor
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-navy-900 rounded-xl shadow-xl border border-gray-200 dark:border-white/10 transition-all duration-200 z-50 ${
                      servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition rounded-lg"
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isActive(link.path) ? activeLinkColor : linkColor
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          className={`md:hidden p-1.5 rounded-md transition-colors duration-300 ${
            scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed left-0 right-0 z-40 bg-white dark:bg-navy-950 border-b border-gray-200 dark:border-white/10 md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'top-[104px] opacity-100 max-h-[calc(100vh-104px)]'
            : 'top-[104px] opacity-0 max-h-0 pointer-events-none overflow-hidden'
        }`}
      >
        <div className="p-4 flex flex-col">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-3 text-gray-800 dark:text-white font-semibold border-b border-gray-100 dark:border-white/10 ${
              isActive('/') ? 'text-red-600' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-3 text-gray-800 dark:text-white font-semibold border-b border-gray-100 dark:border-white/10 ${
              isActive('/services') ? 'text-red-600' : ''
            }`}
          >
            Services
          </Link>

          {/* Service sub-items */}
          <div className="pt-2 pb-1">
            <div className="text-red-600 text-xs font-bold tracking-widest uppercase pl-2 mb-1">
              Service Options
            </div>
            {serviceItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-2.5 pl-4 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-red-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-red-600'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-3 text-gray-800 dark:text-white font-semibold border-t border-gray-100 dark:border-white/10 ${
              isActive('/contact') ? 'text-red-600' : ''
            }`}
          >
            Contact Us
          </Link>

          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-3 text-gray-800 dark:text-white font-semibold ${
              isActive('/blog') ? 'text-red-600' : ''
            }`}
          >
            Blog
          </Link>

          {/* Bottom actions */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            
            <a
              href="https://rprotravels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition"
            >
              Start Journey →
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;