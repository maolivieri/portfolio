'use client'

import { shiftArray } from '@/utils/shiftArray';
import { MainSkills } from './main-skills';
import { SecondarySkills } from './secondary-skills';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

import { ReactNode } from 'react';
import { AWSIcon } from '@/icons/aws';
import { FigmaIcon } from '@/icons/figma';
import { HTMLIcon } from '@/icons/html';
import { CSSIcon } from '@/icons/css';
import { DockerIcon } from '@/icons/docker';
import { DjangoIcon } from '@/icons/django';
import { GitIcon } from '@/icons/git';
import { GraphqlIcon } from '@/icons/graphql';
import { PostgresIcon } from '@/icons/postgres';
import { MongoDBIcon } from '@/icons/mongodb';
import { JestIcon } from '@/icons/jest';
import { PythonIcon } from '@/icons/python';
import { ReduxIcon } from '@/icons/redux';
import { SQLIcon } from '@/icons/sql';
import { StripeIcon } from '@/icons/stripe';

export interface ListItems {
  icon: ReactNode;
  label: string;
}

export function Skills() {
  const t = useTranslations('nav');

  const list: ListItems[] = [
    { icon: <AWSIcon />, label: "AWS" },
    { icon: <FigmaIcon />, label: "Figma" },
    { icon: <HTMLIcon />, label: "HTML" },
    { icon: <CSSIcon />, label: "CSS" },
    { icon: <DockerIcon />, label: "Docker" },
    { icon: <DjangoIcon />, label: "Django" },
    { icon: <GitIcon />, label: "GIT" },
    { icon: <GraphqlIcon />, label: "GraphQL" },
    { icon: <PostgresIcon />, label: "Postgres" },
    { icon: <MongoDBIcon />, label: "MongoDB" },
    { icon: <JestIcon />, label: "Jest" },
    { icon: <PythonIcon />, label: "Python" },
    { icon: <ReduxIcon />, label: "Redux" },
    { icon: <SQLIcon />, label: "SQL" },
    { icon: <StripeIcon />, label: "Stripe" },
  ]
  const listOne = shiftArray<ListItems>(list, 0);
  const listTwo = shiftArray<ListItems>(list, 10);
  const listThree = shiftArray<ListItems>(list, 5);


  return (
    <section id='skills' className={styles.container}>
      <h2>{t('skills')}</h2>
      <MainSkills />
      <div className={styles.list}>
        <SecondarySkills list={listOne} />
        <SecondarySkills list={listTwo} reverse />
        <SecondarySkills list={listThree} />
      </div>
    </section>
  )
}