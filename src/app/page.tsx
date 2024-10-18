import { Skills } from "@/app/(skills)";
import { MainSection } from "./(main)";
import { ProjectsSection } from "./(projects)";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <Skills />
      <ProjectsSection />
    </main>
  );
}
