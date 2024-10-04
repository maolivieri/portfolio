'use client'

import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  handleClick: () => void;
  href: string;
  isActive?: boolean;
}

export function LinkButton({ children, isActive = false, handleClick, href }: Props) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${styles.button}`}
      onClick={handleClick}
      href={href}
    >
      {isActive && <motion.span className={styles.active} layoutId="activeHeader" />}
      {children}
    </ motion.a>
  )
}