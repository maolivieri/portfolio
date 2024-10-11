'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
}

export function Button({ children, href = '', disabled = false }: Props) {
  const handleClick = () => {
    if (!disabled && href) {
      window.open(href, "_blank");
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={styles.button}
      whileHover={!disabled ? { scale: 1.1, background: "var(--primary)" } : {}}
      whileTap={!disabled ? { scale: 0.9 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
      disabled={disabled}
      style={{
        background: "var(--secondary)",
        opacity: disabled ? 0.8 : 1
      }}
    >
      {children}
    </motion.button>
  );
};