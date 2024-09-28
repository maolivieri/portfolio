import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";
import { LanguageButton } from '../language-button';
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('nav');


  return (
    <nav className={styles.nav}>
      <div className={styles.list}>
        <p className={styles['list-item']}>{t('about')}</p>
        <p className={styles['list-item']}>{t('experiences')}</p>
        <p className={styles['list-item']}>{t('projects')}</p>
        <p className={styles['list-item']}>{t('contact')}</p>
      </div>
      <div className={styles.actions}>
        <LanguageButton language='pt' />
        <LanguageButton language='en' />
        <ThemeToggle />
      </div>
    </nav>
  )
}