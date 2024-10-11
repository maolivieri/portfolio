import { Skills } from "@/app/(skills)";
import { MainSection } from "./(main)";
import { ProjectsSection } from "./(projects)";

export default function Home() {
  return (
    <main>
      <MainSection />
      <Skills />
      <ProjectsSection />
    </main>
  );
}
