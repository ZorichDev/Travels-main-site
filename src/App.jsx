import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/Aboutus';  // ← ADD THIS IMPORT
import Services from './pages/Services';
import Book from './pages/Book';
import Visas from './pages/Visas';
import Medical from './pages/Medical';
import Destinations from './pages/Destinations';
import Corporate from './pages/Corporate';
import Contact from './pages/contact';
import Blog from './pages/Blog';

function App() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors">
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />  {/* ← ADD THIS ROUTE */}
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/visas" element={<Visas />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />

          {/* WhatsApp FAB */}
          <a
            href="https://wa.me/234800RPROTRAVEL"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition flex items-center justify-center text-2xl animate-pulse"
          >
            💬
          </a>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-50 w-10 h-10 rounded bg-navy-700 dark:bg-navy-800 text-bg-[#ff0909]-500 border border-bg-[#ff0909]-500/50 flex items-center justify-center transition-all duration-300 ${
              scrollTopVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            ↑
          </button>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;