'use client'

import { MouseEvent, useState } from "react";
import styles from './styles.module.scss';
import Image from "next/image";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.toggle('dark-theme');
    setIsDark(prevState => !prevState);
  };

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <input type="checkbox" checked={isDark} style={{ display: 'none' }} />
      <label className={styles.toggle}>
        <div className={styles.icon}>
          <Image src='/sun.png' alt='image of a sun' fill />
        </div>
        <div className={styles.icon}>
          <Image src='/moon.png' alt='image of a moon' fill />
        </div>
        <span className={`${styles.indicator} ${isDark && styles.on}`} />
      </label>
    </div>
  )
}