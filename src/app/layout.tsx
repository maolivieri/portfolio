import type { Metadata } from "next";
import { Harmattan, Yeseva_One, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: '--font-body' });
const raleway = Harmattan({ subsets: ["latin"], variable: '--font-subtitle', weight: ['400', '700'] });
const poppins = Yeseva_One({ subsets: ["latin"], variable: '--font-title', weight: '400' });


export const metadata: Metadata = {
  title: "Matheus Olivieri",
  description: "This is the portifolio of Matheus Olivieri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${raleway.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
