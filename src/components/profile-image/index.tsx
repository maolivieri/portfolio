'use client'

import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export function Profile() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <div className={styles.circle}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50%"
          cy="50%"
          r="50%"
          variants={draw}
          custom={1}
        >
          ASdhiuAHSDUIAISHD
        </motion.circle>
      </motion.svg>
    </div>
  )
}