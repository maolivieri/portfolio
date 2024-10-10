import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  label: string;
}

export function MainSkillCard({ label, src }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Image src={`/techs/${src}`} fill alt={label} />
      </span>
      <p className={styles.label}>{label}</p>
    </div>
  )
}