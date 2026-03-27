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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-[#22C55E] font-bold text-lg">SUPERFLY</span>
              <div className="w-6 h-6 ml-1 border-2 border-[#22C55E] rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-[#22C55E]" />
              </div>
            </div>
            <span className="text-gray-700 font-semibold text-sm">COMMERCE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <Globe className="w-4 h-4" />
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <User className="w-4 h-4" />
              {t('nav.about')}
            </a>
            <a href="#philosophy" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <Globe className="w-4 h-4" />
              {t('nav.philosophy')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <ShoppingCart className="w-4 h-4" />
              {t('nav.pricing')}
            </a>

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
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-6">
              {t('nav.bookCall')}
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6">
              {t('nav.tiktok')}
            </Button>
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
            <a href="#services" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.services')}
            </a>
            <a href="#about" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.about')}
            </a>
            <a href="#philosophy" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.philosophy')}
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.pricing')}
            </a>
            
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
