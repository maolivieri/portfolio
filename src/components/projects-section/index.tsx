import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import { ProjectCard } from '../project-card';
import Image from 'next/image';
import { TechPill } from '../tech-pill';
import { Button } from '../button';
import { GithubIcon } from '@/icons/github';
import { LinkIcon } from '@/icons/link';

export function ProjectsSection() {
  const tt = useTranslations('nav');
  const t = useTranslations('projects');

  return (
    <section id='projects' className={styles.container}>
      <h2>{tt('projects')}</h2>
      <ProjectCard
        title={t('miguel.title')}
        description={t('miguel.description')}
        media={
          <Image src="/projects/miguel-veiculos1.jpg" fill alt='Miguel Veiculos website screenshot' />
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
    </section>
  )
}