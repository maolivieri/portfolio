import type { Metadata, Viewport } from "next";
import { Harmattan, Yeseva_One, Work_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/services/theme";
import { getUserTheme } from "@/services/theme-server";

const workSans = Work_Sans({ subsets: ["latin"], variable: '--font-body', display: 'swap' });
const raleway = Harmattan({ subsets: ["latin"], variable: '--font-subtitle', weight: ['400', '700'], display: 'swap' });
const poppins = Yeseva_One({ subsets: ["latin"], variable: '--font-title', weight: '400', display: 'swap' });

export const metadata: Metadata = {
  title: "Matheus Olivieri — Fullstack software developer",
  description: "Portfolio of Matheus Olivieri, fullstack software developer working with TypeScript, React, Next.js, React Native and Node.js.",
  authors: [{ name: "Matheus Olivieri" }],
  openGraph: {
    title: "Matheus Olivieri — Fullstack software developer",
    description: "Portfolio of Matheus Olivieri, fullstack software developer working with TypeScript, React, Next.js, React Native and Node.js.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1027' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages, theme, t] = await Promise.all([
    getLocale(),
    getMessages(),
    getUserTheme(),
    getTranslations('a11y'),
  ]);

  return (
    <html lang={locale} className={theme}>
      <body className={`${workSans.variable} ${raleway.variable} ${poppins.variable}`} >
        <ThemeProvider initialTheme={theme}>
          <NextIntlClientProvider messages={messages}>
            <a className="skip-link" href="#main">{t('skipToContent')}</a>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
