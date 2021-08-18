import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';
import { setCookie } from 'nookies';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { appWithTranslation } from 'next-i18next';
// import usePeristedState from "../utils/usePersistedState";

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

function App({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = usePeristedState("theme", dark);
  const [theme, setTheme] = React.useState(dark);
  const [initialLoading, setInitialLoading] = React.useState(true);

  React.useEffect(() => {
    const parsedCookieTheme = pageProps.cookieTheme;
    if (parsedCookieTheme) {
      const themeToBeSet = parsedCookieTheme.name === 'dark' ? dark : light;
      setTheme(themeToBeSet);
    }
    setInitialLoading(false);
  }, []);

  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setCookie(
      null,
      'theme',
      JSON.stringify(theme.name === 'dark' ? light : dark),
      {
        path: '/',
        maxAge: 86400 * 7
      }
    );
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {!initialLoading && (
          <Component {...pageProps} toggleTheme={toggleTheme} />
        )}
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
