import { ReactNode } from 'react';
import styles from './styles.module.scss';

// A media ocupa a largura da tela menos o padding no mobile e ~40% de um
// container de no máximo 1200px a partir de 768px.
export const PROJECT_MEDIA_SIZES = '(max-width: 767px) calc(100vw - 4rem), (max-width: 1500px) 32vw, 480px';

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
    <article className={styles.container}>
      <div className={styles.card}>
        <div className={styles['card-content']}>
          <h3>{title}</h3>
          <ul className={styles.techs}>{techs}</ul>
          <p>{description}</p>
        </div>
        <div className={styles.links}>{links}</div>
      </div>
      <div className={styles.media}>
        {media}
      </div>
      <div className={styles.paper} aria-hidden="true" />
    </article>
  )
}
