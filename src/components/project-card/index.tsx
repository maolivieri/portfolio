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
        <h6>{title}</h6>
        <p>{description}</p>
        <span>{links}</span>
        <span>{techs}</span>
      </div>
      <div className={styles.media}>
        {media}
      </div>
    </div>
  )
}