'use client'

import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";
import { LanguageButton } from '../language-button';
import { useTranslations } from 'next-intl';
import { LinkButton } from '../link-button';
import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'skills', 'projects'] as const;

export function Header() {
  const t = useTranslations('nav');
  const ta = useTranslations('a11y');
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // A faixa estreita no meio da viewport marca como ativa a seção que está
    // sendo lida. Com `threshold: 0.8` as seções mais altas que a tela — como
    // a de projetos — nunca atingiam a proporção e nunca ficavam ativas.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.nav}>
      <nav className={styles.container} aria-label={ta('mainNavigation')}>
        <ul className={styles.list}>
          {SECTIONS.map((section) => (
            <li key={section}>
              <LinkButton
                isActive={activeSection === section}
                handleClick={() => setActiveSection(section)}
                href={section === 'home' ? '#' : `#${section}`}
              >
                {t(section)}
              </LinkButton>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <div className={styles.languages}>
            <LanguageButton language='pt' />
            <LanguageButton language='en' />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
