import styles from './styles.module.scss';
import { ThemeToggle } from "../theme-toggle";


export function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.list}>
        <p className={styles['list-item']}>About</p>
        <p className={styles['list-item']}>Expeciences</p>
        <p className={styles['list-item']}>Projects</p>
        <p className={styles['list-item']}>Contact</p>
      </div>
      <div className={styles.actions}>
        <ThemeToggle />
      </div>
    </nav>
  )
}