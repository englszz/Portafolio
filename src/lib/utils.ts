import type { LanguageCode } from '@/i18n/ui';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: Date, lang: LanguageCode) {
  let locale = 'en-US';

  if (lang === 'es') {
    locale = 'es-ES';
  } else if (lang === 'fr') {
    locale = 'fr-FR';
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateString);
}
