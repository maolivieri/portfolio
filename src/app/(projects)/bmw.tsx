import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function BMWProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('BMW.title')}
      description={t('BMW.description')}
      media={
        <Image
          src="/projects/bmw.png"
          alt='BMW project image'
          fill
        />
      }
      techs={
        <>
          <TechPill tech='NodeJs' />
          <TechPill tech='MongoDB' />
          <TechPill tech='ReactJS' />
          <TechPill tech='Graphql' />
        </>
      }
      links={<>
        <Button disabled><LinkIcon />BMW only</Button>
        <Button disabled><GithubIcon />Private code</Button>
      </>}
    />
  )
}