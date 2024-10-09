'use server';

import { cookies } from 'next/headers';

export type THEME = (typeof themes)[number];

export const themes = ['dark', 'light'] as const;
export const defaultTheme: THEME = 'light';

const COOKIE_NAME = 'NEXT_THEME';

export async function getUserTheme() {
  return cookies().get(COOKIE_NAME)?.value || defaultTheme;
}

export async function setUserTheme(locale: THEME) {
  cookies().set(COOKIE_NAME, locale);
}