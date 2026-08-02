
import styles from './styles.module.scss';

interface Props {
  tech: string;
}

export function TechPill({ tech }: Props) {
  return (
    <li className={styles.pill}>{tech}</li>
  )
}