import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { TechPill } from "@/components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";


export function PortfolioProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('portfolio.title')}
      description={t('portfolio.description')}
      media={
        <video
          width="100%"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src="/projects/portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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