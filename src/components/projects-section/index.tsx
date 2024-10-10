import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import { ProjectCard } from '../project-card';

export function ProjectsSection() {
  const tt = useTranslations('nav');
  const t = useTranslations('projects');

  return (
    <section id='projects' className={styles.container}>
      <h2>{tt('projects')}</h2>
      <ProjectCard
        title={t('miguel.title')}
        description={t('miguel.description')}
        links=""
        media=""
        techs=""
      />
    </section>
  )
}