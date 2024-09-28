'use client'

import Image from 'next/image';
import styles from './styles.module.scss';
import { Locale } from '@/i18n/config';
import { useTransition } from 'react';
import { setUserLocale } from '@/services/locale';

interface Props {
  language: Locale;
  active: 'pt' | 'en';
}

export function LanguageButton({ language, active }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(locale: Locale) {
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <button
      className={`${styles.button} ${active === language && styles.active}`}
      disabled={isPending}
      onClick={() => onChange(language)}
    >
      <Image src={`/${language}.png`} fill alt={`${language} flag`} />
    </button>
  )
}