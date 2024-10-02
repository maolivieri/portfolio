import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import { Title } from './title';
import { ContactDetails } from './contact';

export function MainSection() {
  const t = useTranslations('main');

  return (
    <div className={styles.main}>
      <h1 className={styles.intro}>{t('intro')}</h1>
      <Title />
      <ContactDetails />
    </div>
  )
}