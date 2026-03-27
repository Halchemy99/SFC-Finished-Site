// Translation service using MyMemory API (FREE)
class TranslationService {
  constructor() {
    this.cache = new Map();
    this.apiUrl = 'https://api.mymemory.translated.net/get';
  }

  // Language codes mapping
  languageCodes = {
    en: 'en-US',
    zh: 'zh-CN',
    ar: 'ar-SA',
    hi: 'hi-IN',
    es: 'es-MX',
    pt: 'pt-BR',
    nl: 'nl-NL',
    de: 'de-DE',
    it: 'it-IT',
    fr: 'fr-FR',
    ru: 'ru-RU'
  };

  getCacheKey(text, targetLang) {
    return `${text}_${targetLang}`;
  }

  async translateText(text, targetLang, sourceLang = 'en') {
    if (targetLang === sourceLang) return text;

    const cacheKey = this.getCacheKey(text, targetLang);
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const targetCode = this.languageCodes[targetLang] || targetLang;
      const sourceCode = this.languageCodes[sourceLang] || sourceLang;
      
      const url = `${this.apiUrl}?q=${encodeURIComponent(text)}&langpair=${sourceCode}|${targetCode}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.responseStatus === 200 && data.responseData) {
        const translatedText = data.responseData.translatedText;
        
        // Cache the translation
        this.cache.set(cacheKey, translatedText);
        
        return translatedText;
      } else {
        console.warn('Translation failed, returning original text');
        return text;
      }
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    }
  }

  async translateObject(obj, targetLang, sourceLang = 'en') {
    if (targetLang === sourceLang) return obj;

    const translated = {};
    
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        translated[key] = await this.translateText(value, targetLang, sourceLang);
      } else if (typeof value === 'object' && value !== null) {
        translated[key] = await this.translateObject(value, targetLang, sourceLang);
      } else {
        translated[key] = value;
      }
    }
    
    return translated;
  }

  // Batch translate with delay to avoid rate limiting
  async batchTranslate(texts, targetLang, sourceLang = 'en', delayMs = 100) {
    const results = [];
    
    for (const text of texts) {
      const translated = await this.translateText(text, targetLang, sourceLang);
      results.push(translated);
      
      // Add delay between requests
      if (delayMs > 0) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
    
    return results;
  }

  clearCache() {
    this.cache.clear();
  }
}

export const translationService = new TranslationService();
export default TranslationService;