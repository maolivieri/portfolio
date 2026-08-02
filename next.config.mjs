import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF primeiro: os screenshots dos projetos ficam bem menores que em WebP.
    formats: ['image/avif', 'image/webp'],
  },
};
 
export default withNextIntl(nextConfig);