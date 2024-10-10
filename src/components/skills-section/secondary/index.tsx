import { ListItems } from "..";
import { SecondarySkillCard } from "./secondary-card";
import styles from "./styles.module.scss";


interface Props {
  list: ListItems[];
  reverse?: boolean;
}

export function SecondarySkills({ list, reverse = false }: Props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.scrollOne} ${reverse && styles.reverse}`}>
        {list.map(({ label, src }) => (
          <SecondarySkillCard key={src} src={src} label={label} />
        ))}
      </div>
      <div className={`${styles.scrollTwo} ${reverse && styles.reverse}`}>
        {list.map(({ label, src }) => (
          <SecondarySkillCard key={src} src={src} label={label} />
        ))}
      </div>
      <div className={styles.fade} />
    </div>
  )
}