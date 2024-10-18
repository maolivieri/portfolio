'use client'
import { createContext, useState, useLayoutEffect, ReactNode } from 'react';

type Theme = 'light-theme' | 'dark-theme'

interface ThemeContextType {
  theme: Theme,
  toggleTheme: () => void;
}

export const ThemeContext = createContext({
  theme: 'light-theme',
  toggleTheme: () => { },
} as ThemeContextType);

interface ThemeContextProp {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeContextProp) => {
  const [theme, setTheme] = useState<Theme>('light-theme');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem('theme') as Theme | undefined;
      const savedTheme = storage || 'light-theme' as Theme;
      setTheme(savedTheme);
      setIsThemeLoaded(true);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isThemeLoaded ? <div className={theme}>{children}</div> : <></>}
    </ThemeContext.Provider>
  );
};
