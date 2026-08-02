import { cookies } from 'next/headers';
import { Theme, THEME_COOKIE, defaultTheme, isTheme } from './theme-config';

export async function getUserTheme(): Promise<Theme> {
  const stored = (await cookies()).get(THEME_COOKIE)?.value;
  return isTheme(stored) ? stored : defaultTheme;
}
