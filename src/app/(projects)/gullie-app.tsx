import { Button } from "@/components/button";
import { PROJECT_MEDIA_SIZES, ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function GullieAppProject() {
  const t = useTranslations('projects');
  const tm = useTranslations('media');
  const title = t('gullie-app.title');

  return (
    <ProjectCard
      title={title}
      description={t('gullie-app.description')}
      media={
        <Image
          src="/projects/gullie-app.png"
          alt={tm('screenshotOf', { title })}
          sizes={PROJECT_MEDIA_SIZES}
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