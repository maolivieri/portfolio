import styles from './styles.module.scss';
import { ContactDetails } from "../contact-section";

export function Footer() {
  return (
    <div className={styles.footer}>
      <ContactDetails />
      <p>2024 © Matheus Olivieri</p>
    </div>
  )
}