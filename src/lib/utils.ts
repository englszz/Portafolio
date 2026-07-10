import type { LanguageCode } from '@/i18n/ui';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: Date, lang: LanguageCode) {
  let locale = 'es-ES';

  if (lang === 'en') {
    locale = 'en-US';
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateString);
}
