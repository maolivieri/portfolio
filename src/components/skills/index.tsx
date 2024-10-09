'use client'

import { shiftArray } from '@/utils/shiftArray';
import { MainSkills } from './main';
import { SecondarySkills } from './secondary';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';
import { getUserTheme } from '@/services/theme';

export interface ListItems {
  src: string;
  label: string;
}

export function Skills() {
  const userTheme = getUserTheme();

  const list: ListItems[] = [
    { src: `aws-${userTheme}.svg`, label: "AWS" },
    { src: "figma.svg", label: "Figma" },
    { src: "html.svg", label: "HTML" },
    { src: "css.svg", label: "CSS" },
    { src: "docker.svg", label: "Docker" },
    { src: "django.svg", label: "Django" },
    { src: "git.svg", label: "GIT" },
    { src: "graphql.svg", label: "GraphQL" },
    { src: "postgres.svg", label: "Postgres" },
    { src: "mongodb.svg", label: "MongoDB" },
    { src: "jest.svg", label: "Jest" },
    { src: "python.svg", label: "Python" },
    { src: "redux.svg", label: "Redux" },
    { src: "sql.svg", label: "SQL" },
    { src: "stripe.svg", label: "Stripe" },
  ]
  const listOne = shiftArray<ListItems>(list, 0);
  const listTwo = shiftArray<ListItems>(list, 10);
  const t = useTranslations('nav');


  return (
    <section id='skills' className={styles.container}>
      <h2>{t('skills')}</h2>
      <MainSkills />
      <div className={styles.list}>
        <SecondarySkills list={listOne} />
        <SecondarySkills list={listTwo} reverse />
      </div>
    </section>
  )
}