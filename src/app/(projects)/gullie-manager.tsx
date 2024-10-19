import { Button } from "@/Components/button";
import { ProjectCard } from "@/Components/project-card";
import { TechPill } from "@/Components/tech-pill";
import { GithubIcon } from "@/icons/github";
import { LinkIcon } from "@/icons/link";
import { useTranslations } from "next-intl";
// import Image from "next/image";


export function GullieMasterProject() {
  const t = useTranslations('projects');
  return (
    <ProjectCard
      title={t('gullie-master.title')}
      description={t('gullie-master.description')}
      media={
        <video
          width="100%"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src="/projects/gullie-master.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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