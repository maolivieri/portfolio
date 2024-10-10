import { MainSection } from "@/components/main-section";
import { ProjectsSection } from "@/components/projects-section";
import { Skills } from "@/components/skills-section";

export default function Home() {
  return (
    <main>
      <MainSection />
      <Skills />
      <ProjectsSection />
    </main>
  );
}
