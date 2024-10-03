import { ReactNode } from 'react';
import { LinkedinIcon } from './icons/linkedin';
import styles from './styles.module.scss';
import { WhatsappIcon } from './icons/whatsapp';
import { EmailIcon } from './icons/email';
import { DownloadIcon } from './icons/dowload';

interface LinkProps {
  children: ReactNode;
  href: string;
}

function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={styles.link}
    >
      {children}
    </a>
  )
}

export function ContactDetails() {
  return (
    <div className={styles.container}>
      <Link href="mailto:matheus.olivieri@yahoo.com">
        <EmailIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/matheusolivieri/">
        <LinkedinIcon />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5519971568585">
        <WhatsappIcon />
      </Link>
      <Link href="/MatheusOlivieri_Resume2024.pdf">
        <DownloadIcon />
      </Link>
    </div>
  )
}