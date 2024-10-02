'use client'

import { useTranslations } from "next-intl";
import styles from './title.module.scss';
import { motion, Variants } from 'framer-motion';

export function Title() {
  const t = useTranslations('main');
  const title1 = t('title1');
  const title2 = t('title2');
  const title3 = t('title3');
  const words = [title1, title2, title3]

  // Animation variants for each letter
  const animation: Variants = {
    hidden: { opacity: 0, x: 5 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // Delay each letter's animation
        duration: 0.8,
        type: 'spring',
        stiffness: 300,
      },
    }),
  };

  const lettterAnimationOverlay: Variants = {
    hidden: { opacity: 0, x: 2 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Delay each letter's animation
        duration: 5.8,
        type: 'spring',
        stiffness: 300,
      },
    }),
  };

  const lettterAnimation: Variants = {
    hidden: { opacity: 0, x: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2 + 0.1, // Delay each letter's animation
        duration: 5.8,
        type: 'spring',
        stiffness: 300,
      },
    }),
  };

  return (
    <div className={styles['title-container']}>
      {words.map((word, index) => (
        <>
          <motion.h1
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={animation}
            whileInView="visible"
            className={styles['title-word']}
          >
            {index < 2 ? word : (
              <>
                <div className={styles['title-overlay']}>
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      custom={letterIndex}
                      initial="hidden"
                      animate="visible"
                      whileInView="visible"
                      variants={lettterAnimationOverlay}
                      className={styles['title-letter']}
                      style={{ color: 'var(--tertiary)' }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={letterIndex}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    variants={lettterAnimation}
                    className={styles['title-letter']}
                  >
                    {letter}
                  </motion.span>
                ))}
              </>
            )}
          </motion.h1>
        </>
      ))}
    </div>
  )
}