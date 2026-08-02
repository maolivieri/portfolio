import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { ProjectVideo } from "@/components/project-video";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function MiguelVeiculosProject() {
  const t = useTranslations('projects');
  const tm = useTranslations('media');
  const title = t('miguel.title');

  return (
    <ProjectCard
      title={title}
      description={t('miguel.description')}
      media={
        <ProjectVideo
          src="/projects/miguel-veiculos.mp4"
          poster="/projects/miguel-veiculos-poster.webp"
          label={tm('demoOf', { title })}
        />
      }
      techs={
        <>
          <TechPill tech='NextJs' />
          <TechPill tech='Graphql' />
        </>
      }
      links={<>
        <Button href='https://miguelveiculos.com'><LinkIcon />View</Button>
        <Button disabled><GithubIcon />Private code</Button>
      </>}
    />
  )
}