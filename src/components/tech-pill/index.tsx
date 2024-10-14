
import styles from './styles.module.scss';

interface Props {
  tech: string;
}

export function TechPill({ tech }: Props) {
  return (
    <span className={styles.pill}>{tech}</span>
  )
}