'use client'

import { MouseEvent, useContext } from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeContext } from "@/services/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark-theme';

  function handleToggleTheme(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <div className={styles.container} onClick={handleToggleTheme}>
      <input type="checkbox" defaultChecked={!isDark} style={{ display: 'none' }} />
      <label className={styles.toggle}>
        <div className={styles.icon}>
          <Image src='/moon.png' alt='image of a moon' sizes='100%' fill />
        </div>
        <div className={styles.icon}>
          <Image src='/sun.png' alt='image of a sun' sizes='100%' fill />
        </div>
        <motion.div className={`${styles.indicator}`} animate={{ x: !isDark ? 0 : "-100%" }} />
      </label>
    </div>
  )
}