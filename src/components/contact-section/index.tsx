import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { LinkedinIcon } from './icons/linkedin';
import styles from './styles.module.scss';
import { WhatsappIcon } from './icons/whatsapp';
import { EmailIcon } from './icons/email';
import { DownloadIcon } from './icons/dowload';

interface LinkProps {
  children: ReactNode;
  href: string;
  label: string;
  external?: boolean;
}

function Link({ children, href, label, external = false }: LinkProps) {
  return (
    <a
      href={href}
      className={styles.link}
      aria-label={label}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}

export function ContactDetails() {
  const t = useTranslations('a11y');

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link href="mailto:matheus.olivieri@yahoo.com" label={t('email')}>
          <EmailIcon />
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="https://www.linkedin.com/in/matheusolivieri/" label={t('linkedin')} external>
          <LinkedinIcon />
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="https://api.whatsapp.com/send?phone=5519971568585" label={t('whatsapp')} external>
          <WhatsappIcon />
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/MatheusOlivieri_Resume2024.pdf" label={t('resume')} external>
          <DownloadIcon />
        </Link>
      </li>
    </ul>
  )
}
