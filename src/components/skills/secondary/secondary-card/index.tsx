import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface Props {
  src: string;
  label: string;
  width?: number;
  height?: number;
}
export function SecondarySkillCard({ label, src, height = 20, width = 20 }: Props) {
  useEffect(() => { }, [src])
  return (
    <div className={styles.container}>
      <Image src={`/techs/${src}`} width={width} height={height} alt={label} />
      <p className={styles.label}>{label}</p>
    </div>
  )
}