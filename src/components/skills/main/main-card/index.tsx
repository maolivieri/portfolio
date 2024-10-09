import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  label: string;
  width?: number;
  height?: number;
}

export function MainSkillCard({ label, src, height = 60, width = 60 }: Props) {
  return (
    <div className={styles.container}>
      <Image src={`/techs/${src}`} width={width} height={height} alt={label} />
      <p className={styles.label}>{label}</p>
    </div>
  )
}