import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface Props {
  src: string;
  label: string;
}
export function SecondarySkillCard({ label, src }: Props) {
  useEffect(() => { }, [src])
  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Image src={`/techs/${src}`} fill alt={label} />
      </span>
      <p className={styles.label}>{label}</p>
    </div>
  )
}