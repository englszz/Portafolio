import type { LanguageCode } from './ui';

const englishTags: Record<string, string> = {
  Música: 'Music', Diario: 'Diary', Social: 'Social', Productividad: 'Productivity',
  Freelance: 'Freelance', Calendario: 'Calendar', Clínica: 'Clinic', Odontología: 'Dentistry',
  Web: 'Web', Agencia: 'Agency',
};

export function translateTag(tag: string, lang: LanguageCode): string {
  return lang === 'en' ? englishTags[tag] ?? tag : tag;
}
