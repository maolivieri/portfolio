import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";
import { LanguageButton } from '../language-button';
import { useTranslations } from 'next-intl';
import { LinkButton } from '../link-button';

export function Header() {
  const t = useTranslations('nav');

  return (
    <nav className={styles.nav}>
      <div className={styles.list}>
        <LinkButton>
          {t('about')}
        </ LinkButton>
        <LinkButton
        >
          {t('experiences')}
        </ LinkButton>
        <LinkButton
        >
          {t('projects')}
        </ LinkButton>
        <LinkButton
        >
          {t('contact')}
        </ LinkButton>
      </div>
      <div className={styles.actions}>
        <LanguageButton language='pt' />
        <LanguageButton language='en' />
        <ThemeToggle />
      </div>
    </nav>
  )
}