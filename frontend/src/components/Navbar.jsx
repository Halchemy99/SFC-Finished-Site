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

  // Localized loading messages
  const loadingMessages = {
    'en': 'Loading...',
    'zh': '加载中...',
    'ar': 'جار التحميل...',
    'hi': 'लोड हो रहा है...',
    'es': 'Cargando...',
    'pt': 'Carregando...',
    'nl': 'Laden...',
    'de': 'Wird geladen...',
    'it': 'Caricamento...',
    'fr': 'Chargement...',
    'ru': 'Загрузка...'
  };

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
          {/* Logo - Smaller size */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Superfly Commerce" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
            <span className="hidden lg:block text-xs text-gray-500 border-l pl-3 border-gray-300">
              Sustainable Amazon Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#services" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.services')}
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              Team
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm font-semibold bg-green-50 px-4 py-2 rounded-full">
              {t('nav.caseStudies')} ✨
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
              {t('nav.pricing')}
            </Link>

            {/* Language Selector - Icon only */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-[#22C55E] transition-colors outline-none">
                {isTranslating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Globe className="w-4 h-4" />
                )}
                <span className="text-lg">{currentLangData.emoji}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-96 overflow-y-auto">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`cursor-pointer flex items-center gap-2 ${
                      currentLanguage === lang.code ? 'bg-green-50 font-semibold' : ''
                    }`}
                  >
                    <span className="text-xl">{lang.emoji}</span>
                    <span>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span className="ml-auto text-[#22C55E]">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Primary CTA */}
            <a href="/#contact">
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-6 text-sm">
                {t('nav.bookCall')}
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
            <Link to="/#services" className="block text-gray-700 hover:text-[#22C55E] py-2">
              {t('nav.services')}
            </Link>
            <Link to="/team" className="block text-gray-700 hover:text-[#22C55E] py-2">
              Team
            </Link>
            <Link to="/case-studies" className="block text-gray-700 hover:text-[#22C55E] py-2 font-semibold bg-green-50 px-4 rounded-lg">
              {t('nav.caseStudies')} ✨
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-[#22C55E] py-2">
              Blog
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
      
      {/* Translation Loading Overlay with localized message */}
      {isTranslating && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#22C55E] text-white py-2 text-center font-semibold shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{loadingMessages[currentLanguage] || 'Loading...'}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;