import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";
import { LanguageButton } from '../language-button';
import { useLocale, useTranslations } from 'next-intl';
import { Locale } from '@/i18n/config';


export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;

  return (
    <nav className={styles.nav}>
      <div className={styles.list}>
        <p className={styles['list-item']}>{t('about')}</p>
        <p className={styles['list-item']}>{t('experiences')}</p>
        <p className={styles['list-item']}>{t('projects')}</p>
        <p className={styles['list-item']}>{t('contact')}</p>
      </div>
      <div className={styles.actions}>
        <LanguageButton language='pt' active={locale} />
        <LanguageButton language='en' active={locale} />
        <ThemeToggle />
      </div>
    </nav>
  )
}