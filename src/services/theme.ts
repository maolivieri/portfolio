export type THEME = (typeof themes)[number];

export const themes = ['dark', 'light'] as const;
export const defaultTheme: THEME = 'light';

const COOKIE_NAME = 'NEXT_THEME';

export function getUserTheme() {
  return localStorage.getItem(COOKIE_NAME) || defaultTheme;
}

export function setUserTheme(locale: THEME) {
  localStorage.setItem(COOKIE_NAME, locale);
}