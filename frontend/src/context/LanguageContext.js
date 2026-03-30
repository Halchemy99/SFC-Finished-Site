import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translationService } from '../i18n/TranslationService';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'English', flag: 'gb', emoji: '🇬🇧' },
  { code: 'zh', name: '中文', flag: 'cn', emoji: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: 'sa', emoji: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: 'in', emoji: '🇮🇳' },
  { code: 'es', name: 'Español (MX)', flag: 'mx', emoji: '🇲🇽' },
  { code: 'pt', name: 'Português (BR)', flag: 'br', emoji: '🇧🇷' },
  { code: 'nl', name: 'Nederlands', flag: 'nl', emoji: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: 'de', emoji: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: 'it', emoji: '🇮🇹' },
  { code: 'fr', name: 'Français', flag: 'fr', emoji: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: 'ru', emoji: '🇷🇺' }
];

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Detect browser language or default to English
    const detectLanguage = () => {
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang) return savedLang;
      
      // Get browser language
      const browserLang = navigator.language || navigator.userLanguage;
      const langCode = browserLang.split('-')[0]; // 'en-US' -> 'en'
      
      // Check if we support this language
      const supportedLang = languages.find(lang => lang.code === langCode);
      return supportedLang ? langCode : 'en';
    };
    
    const initialLang = detectLanguage();
    setCurrentLanguage(initialLang);
    i18n.changeLanguage(initialLang);
  }, [i18n]);

  const changeLanguage = async (langCode) => {
    if (langCode === currentLanguage) return;
    
    setIsTranslating(true);
    setCurrentLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
    
    try {
      await i18n.changeLanguage(langCode);
      
      // Load translations for non-English languages
      if (langCode !== 'en') {
        const existingResources = i18n.getResourceBundle(langCode, 'translation');
        
        if (!existingResources || Object.keys(existingResources).length === 0) {
          const enResources = i18n.getResourceBundle('en', 'translation');
          const translatedResources = await translationService.translateObject(
            enResources,
            langCode,
            'en'
          );
          i18n.addResourceBundle(langCode, 'translation', translatedResources, true, true);
        }
      }
    } catch (error) {
      console.error('Language change error:', error);
      // Revert to previous language on error
      setCurrentLanguage(currentLanguage);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isTranslating, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default LanguageContext;