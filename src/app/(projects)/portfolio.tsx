import { Button } from "@/components/button";
import { PROJECT_MEDIA_SIZES, ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
import Image from "next/image";


export function PortfolioProject() {
  const t = useTranslations('projects');
  const tm = useTranslations('media');
  const title = t('portfolio.title');

  return (
    <ProjectCard
      title={title}
      description={t('portfolio.description')}
      media={
        <Image
          src="/projects/portfolio.png"
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
        <Button href=""><LinkIcon />You are here!</Button>
        <Button href=""><GithubIcon />View code</Button>
      </>}
    />
  )
}