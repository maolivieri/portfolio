'use client'

import styles from './styles.module.scss';
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useTheme } from "@/services/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('a11y');
  const isDark = theme === 'dark-theme';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={t('toggleTheme')}
      className={styles.container}
      onClick={toggleTheme}
    >
      <span className={styles.toggle}>
        <span className={styles.icon}>
          <Image src='/moon.png' alt='' aria-hidden="true" sizes='24px' fill />
        </span>
        <span className={styles.icon}>
          <Image src='/sun.png' alt='' aria-hidden="true" sizes='24px' fill />
        </span>
        <motion.span className={styles.indicator} animate={{ x: !isDark ? 0 : "-100%" }} />
      </span>
    </button>
  )
}
