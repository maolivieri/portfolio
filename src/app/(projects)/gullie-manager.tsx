import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { ProjectVideo } from "@/components/project-video";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function GullieMasterProject() {
  const t = useTranslations('projects');
  const tm = useTranslations('media');
  const title = t('gullie-master.title');

  return (
    <ProjectCard
      title={title}
      description={t('gullie-master.description')}
      media={
        <ProjectVideo
          src="/projects/gullie-master.mp4"
          poster="/projects/gullie-master-poster.webp"
          label={tm('demoOf', { title })}
        />
      }
      techs={
        <>
          <TechPill tech='ReactJS' />
          <TechPill tech='NodeJs' />
        </>
      }
      links={<>
        <Button disabled><LinkIcon />In progress</Button>
        <Button disabled><GithubIcon />Private code</Button>
      </>}
    />
  )
}