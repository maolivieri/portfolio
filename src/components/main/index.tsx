import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import { Title } from '../main-title';

export function MainSection() {
  const t = useTranslations('main');

  return (
    <section id='home' className={styles.main}>
      <h1 className={styles.intro}>{t('intro')}</h1>
      <Title />
      {/* <Profile /> */}
    </section>
  )
}