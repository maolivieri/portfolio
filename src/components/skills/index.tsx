import { MainSkills } from './main';
import { SecondarySkills } from './secondary';
import styles from './styles.module.scss';

export function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <MainSkills />
      <SecondarySkills />
    </section>
  )
}