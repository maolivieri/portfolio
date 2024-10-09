'use client'

import { MouseEvent, useEffect, useState } from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import { motion } from "framer-motion";
import { setUserTheme } from "@/services/theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setUserTheme('light');
  }, [])

  function handleToggleTheme(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.toggle('dark-theme');
    setUserTheme(isDark ? 'light' : 'dark');
    setIsDark(prevState => !prevState);
  };

  return (
    <div className={styles.container} onClick={handleToggleTheme}>
      <input type="checkbox" defaultChecked={!isDark} style={{ display: 'none' }} />
      <label className={styles.toggle}>
        <div className={styles.icon}>
          <Image src='/moon.png' alt='image of a moon' fill />
        </div>
        <div className={styles.icon}>
          <Image src='/sun.png' alt='image of a sun' fill />
        </div>
        <motion.div className={`${styles.indicator}`} animate={{ x: !isDark ? 0 : -32 }} />
      </label>
    </div>
  )
}