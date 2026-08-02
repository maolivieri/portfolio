'use client'

import Image from 'next/image';
import styles from './styles.module.scss';
import { Locale } from '@/i18n/config';
import { useTransition } from 'react';
import { setUserLocale } from '@/services/locale';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'motion/react';

interface Props {
  language: Locale;
}

export function LanguageButton({ language }: Props) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale() as Locale;
  const t = useTranslations('a11y');
  const isActive = locale === language;

  function onChange(locale: Locale) {
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      disabled={isPending}
      aria-pressed={isActive}
      aria-label={t('switchLanguage', { language: t('languageNames', { language }) })}
      onClick={() => onChange(language)}
    >
      <Image src={`/${language}.png`} fill sizes='32px' alt='' aria-hidden="true" />
    </motion.button>
  )
}
