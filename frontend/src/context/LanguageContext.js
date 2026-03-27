import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translationService } from '../i18n/TranslationService';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'zh', name: '中文', flag: 'cn' },
  { code: 'ar', name: 'العربية', flag: 'sa' },
  { code: 'hi', name: 'हिन्दी', flag: 'in' },
  { code: 'es', name: 'Español (MX)', flag: 'mx' },
  { code: 'pt', name: 'Português (BR)', flag: 'br' },
  { code: 'nl', name: 'Nederlands', flag: 'nl' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'it', name: 'Italiano', flag: 'it' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'ru', name: 'Русский', flag: 'ru' }
];

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const changeLanguage = async (langCode) => {
    if (langCode === currentLanguage) return;
    
    setIsTranslating(true);
    
    try {
      // Immediately change language for instant UI update
      setCurrentLanguage(langCode);
      localStorage.setItem('selectedLanguage', langCode);
      await i18n.changeLanguage(langCode);
      
      // If not English, load translations in background
      if (langCode !== 'en') {
        const existingResources = i18n.getResourceBundle(langCode, 'translation');
        
        if (!existingResources || Object.keys(existingResources).length === 0) {
          // Load translations in background without blocking UI
          setTimeout(async () => {
            try {
              const enResources = i18n.getResourceBundle('en', 'translation');
              const translatedResources = await translationService.translateObject(
                enResources,
                langCode,
                'en'
              );
              i18n.addResourceBundle(langCode, 'translation', translatedResources, true, true);
            } catch (error) {
              console.error('Background translation error:', error);
            }
          }, 100);
        }
      }
    } catch (error) {
      console.error('Language change error:', error);
    } finally {
      setTimeout(() => setIsTranslating(false), 300);
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