import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clean, no text */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Superfly Commerce" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Reordered */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#about" className="text-gray-800 hover:text-[#22C55E] transition-colors text-sm font-semibold hover:scale-105 transition-transform">
              What we do
            </a>
            <Link to="/case-studies" className="text-gray-800 hover:text-[#22C55E] transition-all text-sm font-bold bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md border border-green-100">
              Case Studies ✨
            </Link>
            <Link to="/pricing" className="text-gray-800 hover:text-[#22C55E] transition-colors text-sm font-semibold hover:scale-105 transition-transform">
              Pricing
            </Link>
            <Link to="/team" className="text-gray-800 hover:text-[#22C55E] transition-colors text-sm font-semibold hover:scale-105 transition-transform">
              Our Team
            </Link>

            {/* Simple EN/ES Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-sm font-semibold"
            >
              <span className="text-lg">{currentLang === 'en' ? '🇺🇸' : '🇲🇽'}</span>
              <span>{currentLang === 'en' ? 'EN' : 'ES'}</span>
            </button>

            {/* CTA Buttons */}
            <a href="/#contact">
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-7 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105">
                Book a Call
              </Button>
            </a>
            <a href="/tiktok-offer">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 animate-pulse">
                TikTok Offer 🔥
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="/#about" className="block text-gray-700 hover:text-[#22C55E] py-2 font-semibold">
              What we do
            </a>
            <Link to="/case-studies" className="block text-gray-700 hover:text-[#22C55E] py-2 font-semibold bg-green-50 px-4 rounded-lg">
              Case Studies ✨
            </Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-[#22C55E] py-2 font-semibold">
              Pricing
            </Link>
            <Link to="/team" className="block text-gray-700 hover:text-[#22C55E] py-2 font-semibold">
              Our Team
            </Link>
            
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all font-semibold"
            >
              <span className="text-xl">{currentLang === 'en' ? '🇺🇸' : '🇲🇽'}</span>
              <span>{currentLang === 'en' ? 'English' : 'Español'}</span>
            </button>
            
            <a href="/#contact" className="block">
              <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full mt-4">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;