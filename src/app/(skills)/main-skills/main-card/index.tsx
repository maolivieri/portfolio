import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

export function MainSkillCard({ label, icon }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        {icon}
      </span>
      <p className={styles.label}>{label}</p>
    </div>
  )
}