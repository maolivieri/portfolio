import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function MyPlaceProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('bepoz.title')}
      description={t('bepoz.description')}
      media={
        <video
          width="100%"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src="/projects/myplace.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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