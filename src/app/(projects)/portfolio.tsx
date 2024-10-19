import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function PortfolioProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('portfolio.title')}
      description={t('portfolio.description')}
      media={
        <Image
          src="/projects/portfolio.png"
          alt='portfolio project image'
          sizes='100%'
          fill
        />
      }
      techs={
        <>
          <TechPill tech='NextJS' />
        </>
      }
      links={<>
        <Button href=""><LinkIcon />You are here!</Button>
        <Button href=""><GithubIcon />View code</Button>
      </>}
    />
  )
}