import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
  description: string;
  media: ReactNode;
  links: ReactNode;
  techs: ReactNode;
}

export function ProjectCard({
  description,
  links,
  media,
  techs,
  title
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h5>{title}</h5>
        <p>{description}</p>
        <span className={styles.techs}>{techs}</span>
        <span className={styles.links}>{links}</span>
      </div>
      <div className={styles.media}>
        {media}
      </div>
    </div>
  )
}