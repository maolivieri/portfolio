import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function GullieAppProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('gullie-app.title')}
      description={t('gullie-app.description')}
      media={
        <Image
          src="/projects/gullie-app.png"
          alt='gullie-app project image'
          fill
        />
      }
      techs={
        <>
          <TechPill tech='NextJS' />
        </>
      }
      links={<>
        <Button disabled><LinkIcon />In progress</Button>
        <Button disabled><GithubIcon />Private code</Button>
      </>}
    />
  )
}