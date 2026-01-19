import Typograf from 'typograf';
import React from 'react';

// Initialize Typograf instances for supported locales
const typografInstances: Record<string, Typograf> = {
  ru: new Typograf({ locale: ['ru', 'en-US'] }),
  en: new Typograf({ locale: ['en-US'] }),
  // Add other locales if needed, defaulting others to a generic 'en-US' or keeping them minimal
};

// Generic instance for fallbacks
const defaultTypograf = new Typograf({ locale: ['en-US'] });

export const applyTypography = (data: any, locale: string): any => {
  if (!data) return data;

  // React Elements should be returned as is to avoid corruption
  if (React.isValidElement(data)) {
    return data;
  }

  if (typeof data === 'string') {
    const tp = typografInstances[locale] || defaultTypograf;
    return tp.execute(data);
  }

  if (Array.isArray(data)) {
    return data.map((item) => applyTypography(item, locale));
  }

  if (typeof data === 'object') {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = applyTypography(data[key], locale);
      }
    }
    return result;
  }

  return data;
};
