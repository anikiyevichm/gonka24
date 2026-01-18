import { ru } from './locales/ru';
import { en } from './locales/en';
import { es } from './locales/es';
import { de } from './locales/de';
import { zh } from './locales/zh';
import { ar } from './locales/ar';

export const translations = {
  ru,
  en,
  es,
  de,
  zh,
  ar,
};

export type Language = 'ru' | 'en' | 'es' | 'de' | 'zh' | 'ar';
export type Translation = typeof translations.ru;
