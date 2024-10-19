import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function MiguelVeiculosProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('miguel.title')}
      description={t('miguel.description')}
      media={
        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src="/projects/miguel-veiculos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        //   <Image
        //   src="/projects/miguel-veiculos.png"
        //   alt='miguel veiculos project image'
        //   fill
        // />
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