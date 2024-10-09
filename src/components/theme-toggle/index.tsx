'use client'

import { MouseEvent, useState } from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import { motion } from "framer-motion";
// import { getUserTheme, setUserTheme } from "@/services/theme";

export function ThemeToggle() {
  // const userTheme = getUserTheme();
  // const isDark = userTheme === 'dark'
  const [isDark, setIsDark] = useState<boolean>(true);

  function handleToggleTheme(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.toggle('dark-theme');
    // setUserTheme(isDark ? 'light' : 'dark')
    setIsDark(prevState => !prevState);
  };

  return (
    <div className={styles.container} onClick={handleToggleTheme}>
      <input type="checkbox" defaultChecked={isDark} style={{ display: 'none' }} />
      <label className={styles.toggle}>
        <div className={styles.icon}>
          <Image src='/sun.png' alt='image of a sun' fill />
        </div>
        <div className={styles.icon}>
          <Image src='/moon.png' alt='image of a moon' fill />
        </div>
        {/* <span className={`${styles.indicator} ${isDark && styles.on}`} /> */}
        <motion.div className={`${styles.indicator}`} animate={{ x: isDark ? 0 : -32 }} />
      </label>
    </div>
  )
}