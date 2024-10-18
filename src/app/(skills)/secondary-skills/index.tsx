'use client'

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
      <div className={`${styles.scrollOne} ${reverse && styles.reverse}`}>
        {list.map(({ label, icon }) => (
          <SecondarySkillCard key={label} icon={icon} label={label} />
        ))}
      </div>
      <div className={`${styles.scrollTwo} ${reverse && styles.reverse}`}>
        {list.map(({ label, icon }) => (
          <SecondarySkillCard key={label} icon={icon} label={label} />
        ))}
      </div>
      <div className={styles.fade} />
    </div>
  )
}