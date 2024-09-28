import { Header } from "@/components/header";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('nav');

  return (
    <>
      <Header />
      <h1>{t('about')}</h1>;
    </>
  );
}
