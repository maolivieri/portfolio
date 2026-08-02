export const themes = ['light-theme', 'dark-theme'] as const;

export type Theme = (typeof themes)[number];

export const defaultTheme: Theme = 'light-theme';
export const THEME_COOKIE = 'theme';
export const THEME_MAX_AGE = 60 * 60 * 24 * 365;

export function isTheme(value: string | undefined): value is Theme {
  return themes.includes(value as Theme);
}
