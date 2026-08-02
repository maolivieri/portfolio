import { ListItems } from "..";
import { SecondarySkillCard } from "../../../components/skill-secondary-card";
import styles from "./styles.module.scss";


interface Props {
  list: ListItems[];
  reverse?: boolean;
}

export function SecondarySkills({ list, reverse = false }: Props) {
  return (
    <div className={styles.container}>
      <ul className={`${styles.scrollOne} ${reverse ? styles.reverse : ''}`}>
        {list.map(({ label, icon }) => (
          <SecondarySkillCard key={label} icon={icon} label={label} />
        ))}
      </ul>
      {/* Segunda cópia só existe para o carrossel não ter buraco; para leitores
          de tela seria a mesma lista de habilidades repetida. */}
      <ul className={`${styles.scrollTwo} ${reverse ? styles.reverse : ''}`} aria-hidden="true">
        {list.map(({ label, icon }) => (
          <SecondarySkillCard key={label} icon={icon} label={label} />
        ))}
      </ul>
      <div className={styles.fade} aria-hidden="true" />
    </div>
  )
}
