import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Globe, Menu, X, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { useLanguage, languages } from '../context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isTranslating } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLangData = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Superfly Commerce" className="h-12 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#services" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.services')}
            </Link>
            <a href="#about" onClick={scrollToAbout} className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.about')}
            </a>
            <Link to="/case-studies" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.caseStudies')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.pricing')}
            </Link>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-[#22C55E] transition-colors outline-none">
                {isTranslating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Globe className="w-4 h-4" />
                )}
                <img 
                  src={`https://flagcdn.com/w20/${currentLangData.flag}.png`} 
                  alt={currentLangData.name}
                  className="w-5 h-4"
                />
                <span className="text-sm">{currentLangData.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-96 overflow-y-auto">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center gap-2 cursor-pointer ${
                      currentLanguage === lang.code ? 'bg-green-50' : ''
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w20/${lang.flag}.png`} 
                      alt={lang.name}
                      className="w-5 h-4"
                    />
                    <span>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span className="ml-auto text-[#22C55E]">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Buttons */}
            <a href="/#contact">
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-6">
                {t('nav.bookCall')}
              </Button>
            </a>
            <a href="https://www.tiktok.com/@superflycollective" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6">
                TikTok
              </Button>
            </a>
            <button className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1">
              <User className="w-5 h-5" />
              <span className="text-sm">{t('nav.login')}</span>
            </button>
            <button className="text-gray-700 hover:text-[#22C55E] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
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
            <Link to="/#services" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.services')}
            </Link>
            <a href="#about" onClick={scrollToAbout} className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.about')}
            </a>
            <Link to="/case-studies" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.caseStudies')}
            </Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.pricing')}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="py-2">
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isTranslating}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            
            <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full mt-4">
              {t('nav.bookCall')}
            </Button>
          </div>
        </div>
      )}
      
      {/* Translation Loading Overlay */}
      {isTranslating && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-100">
          <div className="h-full bg-[#22C55E] animate-pulse"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;