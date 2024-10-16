import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import { MiguelVeiculosProject } from './miguel-veiculos';
import { BMWProject } from './bmw';
import { MyPlaceProject } from './my-place';
import { PortfolioProject } from './portfolio';
import { GullieMasterProject } from './gullie-manager';
import { GullieAppProject } from './gullie-app';

export function ProjectsSection() {
  const tt = useTranslations('nav');

  return (
    <section id='projects' className={styles.container}>
      <h2>{tt('projects')}</h2>
      <MiguelVeiculosProject />
      <BMWProject />
      <MyPlaceProject />
      <GullieMasterProject />
      <GullieAppProject />
      <PortfolioProject />
    </section>
  )
}