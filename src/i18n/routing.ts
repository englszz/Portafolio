import type { LanguageCode } from './ui';

// Older Spanish journey URLs contain /blog/en/. Only the leading /en/ selects English.
export function getLocale(pathname: string): LanguageCode {
  return /^\/en(?:\/|$)/.test(pathname) ? 'en' : 'es';
}
