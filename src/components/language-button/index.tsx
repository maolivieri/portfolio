'use client'

import Image from 'next/image';
import styles from './styles.module.scss';
import { Locale } from '@/i18n/config';
import { useTransition } from 'react';
import { setUserLocale } from '@/services/locale';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

interface Props {
  language: Locale;
}

export function LanguageButton({ language }: Props) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale() as Locale;

  function onChange(locale: Locale) {
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${styles.button} ${locale === language && styles.active}`}
      disabled={isPending}
      onClick={() => onChange(language)}
    >
      <Image src={`/${language}.png`} fill alt={`${language} flag`} />
    </motion.button>
  )
}