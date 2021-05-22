import Layout from "../Design/Layout"
import Header from '../Components/Header'
import { Container } from "../styles/Home"
import { parseCookies } from "nookies";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import PageOne from "../Components/pageOne"

interface Props {
  toggleTheme(): void;
}

export default function Home<Props>({ toggleTheme }) {

  const { t } = useTranslation('common')

  return (
    <Layout title="Matheus Aguiar Olivieri">
      <Container>
        <Header toggleTheme={toggleTheme}/>
        <PageOne t={t}/>
      </Container>
    </Layout> 
  )
}

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      cookieTheme: JSON.parse(cookies.theme),
    },
  };
}
