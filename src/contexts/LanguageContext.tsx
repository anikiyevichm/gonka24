import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
// @ts-ignore - forcing update
import { translations, Language, Translation } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check localStorage first
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'ru' || savedLang === 'en' || savedLang === 'es' || savedLang === 'de' || savedLang === 'zh' || savedLang === 'ar') {
      return savedLang;
    }

    // 2. Check browser language
    if (typeof navigator !== 'undefined' && navigator.language) {
      const lowerLang = navigator.language.toLowerCase();
      if (lowerLang.startsWith('ru')) {
        return 'ru';
      }
      if (lowerLang.startsWith('es')) {
        return 'es';
      }
      if (lowerLang.startsWith('de')) {
        return 'de';
      }
      if (lowerLang.startsWith('zh')) {
        return 'zh';
      }
      if (lowerLang.startsWith('ar')) {
        return 'ar';
      }
    }

    // 3. Default to English
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
