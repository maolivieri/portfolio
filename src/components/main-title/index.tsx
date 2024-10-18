'use client'

import { useTranslations } from "next-intl";
import styles from './styles.module.scss';
import { motion, Variants } from 'framer-motion';

export function Title() {
  const t = useTranslations('main');
  const title1 = t('title1');
  const title2 = t('title2');
  const title3 = t('title3');
  const words = [title1, title2, title3]

  function getAnimationVariants(x: number, duration: number, delay: (i: number) => number): Variants {
    return {
      hidden: { opacity: 0, x },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: delay(i),
          duration,
          type: 'spring',
          stiffness: 300,
        },
      }),
    };
  }

  const animation = getAnimationVariants(5, 0.8, (i) => i * 0.3);
  const lettterAnimationOverlay = getAnimationVariants(2, 5.8, (i) => i * 0.2);
  const lettterAnimation = getAnimationVariants(2, 5.8, (i) => (i * 0.2) + 0.15);

  return (
    <div className={styles['title-container']}>
      {words.map((word, index) => (
        <>
          <motion.h1
            key={word}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={animation}
            whileInView="visible"
            viewport={{ amount: 'some' }}
            className={styles['title-word']}
          >
            {index < 2 ? word : (
              <>
                <div className={styles['title-overlay']}>
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={`${letterIndex}-${letter}`}
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
                {word.split('').map((letter, letterIndexT) => (
                  <motion.span
                    key={`${letterIndexT}-${letter}-shadow`}
                    custom={letterIndexT}
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