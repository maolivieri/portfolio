'use client'

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
}

export function Button({ children, href = '', disabled = false }: Props) {
  const t = useTranslations('a11y');

  const animation = {
    whileHover: !disabled ? { scale: 1.05, background: "var(--primary)" } : {},
    whileTap: !disabled ? { scale: 0.9 } : {},
    transition: { type: "spring" as const, stiffness: 300 },
    className: styles.button,
    // Sem reduzir a opacidade no estado desabilitado: o fundo cinza já sinaliza
    // o estado e o texto ("Private code", "In progress") precisa ser legível.
    style: {
      background: !disabled ? "var(--secondary)" : "var(--disabled-bg)",
    },
  };

  // Link real quando há destino: preserva abrir em nova aba, copiar endereço
  // e a semântica de "link" para leitores de tela.
  if (!disabled && href) {
    const isExternal = href.startsWith('http');

    return (
      <motion.a
        {...animation}
        href={href}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
        {isExternal && <span className="sr-only"> ({t('newTab')})</span>}
      </motion.a>
    );
  }

  return (
    <motion.button {...animation} type="button" disabled={disabled}>
      {children}
    </motion.button>
  );
};
