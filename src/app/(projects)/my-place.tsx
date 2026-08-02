import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { ProjectVideo } from "@/components/project-video";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function MyPlaceProject() {
  const t = useTranslations('projects');
  const tm = useTranslations('media');
  const title = t('bepoz.title');

  return (
    <ProjectCard
      title={title}
      description={t('bepoz.description')}
      media={
        <ProjectVideo
          src="/projects/myplace.mp4"
          poster="/projects/myplace-poster.webp"
          label={tm('demoOf', { title })}
        />
      }
      techs={
        <>
          <TechPill tech='React Native' />
          <TechPill tech='ReactJS' />
          <TechPill tech='SQL' />
          <TechPill tech='AWS' />
        </>
      }
      links={<>
        <Button href="https://apps.apple.com/au/developer/vectron-systems-victoria-pty-ltd/id1193822530"><LinkIcon />View Apps</Button>
        <Button disabled><GithubIcon />Private code</Button>
      </>}
    />
  )
}