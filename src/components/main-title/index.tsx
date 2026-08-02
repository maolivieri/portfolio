'use client'

import { useTranslations } from "next-intl";
import styles from './styles.module.scss';
import { motion, Variants } from 'motion/react';

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

  // Cada letra entra em --tertiary e volta para --secondary assim que a própria
  // entrada termina, formando um brilho que percorre a palavra. Isso era feito
  // duplicando a palavra em duas camadas sobrepostas, o que fazia a cor final
  // depender da ordem de pintura entre o overlay absoluto e as letras
  // transformadas — frágil e fora de sincronia. Agora é uma camada só.
  const letterDelay = (i: number) => i * 0.2;
  const letterAnimation: Variants = {
    hidden: { opacity: 0, x: 2, color: 'var(--tertiary)' },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      color: 'var(--secondary)',
      transition: {
        delay: letterDelay(i),
        type: 'spring',
        stiffness: 300,
        color: { delay: letterDelay(i) + 0.35, duration: 0.25, ease: 'easeOut' },
      },
    }),
  };

  // A frase é lida uma única vez a partir do aria-label: as letras são
  // divididas em spans apenas para a animação.
  return (
    <p className={styles['title-container']} aria-label={words.join(' ')}>
      {words.map((word, index) => (
        <motion.span
          key={word}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={animation}
          whileInView="visible"
          viewport={{ amount: 'some' }}
          className={styles['title-word']}
          aria-hidden="true"
        >
          {index < 2 ? word : word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${letterIndex}-${letter}`}
              custom={letterIndex}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              variants={letterAnimation}
              className={styles['title-letter']}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </p>
  )
}
