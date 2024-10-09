import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  label: string;
  width?: number;
  height?: number;
}
export function SecondarySkillCard({ label, src, height = 20, width = 20 }: Props) {
  return (
    <div className={styles.container}>
      <Image src={`/techs/${src}`} width={width} height={height} alt={label} />
      <p className={styles.label}>{label}</p>
    </div>
  )
}