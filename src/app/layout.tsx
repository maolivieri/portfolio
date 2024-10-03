import type { Metadata } from "next";
import { Harmattan, Yeseva_One, Work_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";
import { Footer } from "@/components/footer";

const workSans = Work_Sans({ subsets: ["latin"], variable: '--font-body' });
const raleway = Harmattan({ subsets: ["latin"], variable: '--font-subtitle', weight: ['400', '700'] });
const poppins = Yeseva_One({ subsets: ["latin"], variable: '--font-title', weight: '400' });

export const metadata: Metadata = {
  title: "Matheus Olivieri",
  description: "This is the portifolio of Matheus Olivieri",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${workSans.variable} ${raleway.variable} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
