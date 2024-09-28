'use client'

import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from './styles.module.scss';

interface Props {
  children: ReactNode
}

export function LinkButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.button}>
      {children}
    </ motion.button>
  )
}