'use client'

import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";
import { LanguageButton } from '../language-button';
import { useTranslations } from 'next-intl';
import { LinkButton } from '../link-button';
import { useEffect, useState } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Trigger when 80% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.list}>
          <LinkButton
            isActive={activeSection === 'home'}
            handleClick={() => setActiveSection('home')}
            href='#'
          >
            {t('home')}
          </ LinkButton>
          <LinkButton
            isActive={activeSection === 'skills'}
            handleClick={() => setActiveSection('skills')}
            href='#skills'
          >
            {t('skills')}
          </ LinkButton>
          <LinkButton
            isActive={activeSection === 'experiences'}
            handleClick={() => setActiveSection('experiences')}
            href='#experiences'
          >
            {t('experiences')}
          </ LinkButton>
          <LinkButton
            isActive={activeSection === "projects"}
            handleClick={() => setActiveSection('projects')}
            href='#projects'
          >
            {t('projects')}
          </ LinkButton>
        </div>
        <div className={styles.actions}>
          <div className={styles.languages}>
            <LanguageButton language='pt' />
            <LanguageButton language='en' />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}