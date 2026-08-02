export type Locale = (typeof locales)[number];

export const locales = ['en', 'pt'] as const;
export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
