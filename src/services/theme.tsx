'use client'
import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { Theme, THEME_COOKIE, THEME_MAX_AGE, defaultTheme } from './theme-config';

interface ThemeContextType {
  theme: Theme,
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => { },
});

interface ThemeContextProp {
  children: ReactNode;
  initialTheme: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeContextProp) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'light-theme' ? 'dark-theme' : 'light-theme';

      const root = document.documentElement;
      root.classList.remove(current);
      root.classList.add(next);
      document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=${THEME_MAX_AGE}; samesite=lax`;

      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
