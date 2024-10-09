import { MainSkillCard } from "./main-card";
import styles from "./styles.module.scss";

export function MainSkills() {
  return (
    <div className={styles.container}>
      <MainSkillCard src="typescript.svg" label="Typescript" />
      <MainSkillCard src="react.svg" label="ReactJs" />
      <MainSkillCard src="nodejs.svg" label="NodeJs" />
      <MainSkillCard src="javascript.svg" label="Javascript" />
      <MainSkillCard src="nextjs.svg" label="NextJs" />
      <MainSkillCard src="react-native.svg" label="React Native" />
    </div>
  )
}