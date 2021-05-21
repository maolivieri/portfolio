import Layout from "../Design/Layout"
import Header from '../Components/Header'
import { Container } from "../styles/Home"
import { setCookie, parseCookies } from "nookies";

interface Props {
  toggleTheme(): void;
}

export default function Home<Props>({ toggleTheme }) {

  return (
    <Layout title="Matheus Aguiar Olivieri">
      <Container>
        <Header toggleTheme={toggleTheme}/>
        <h1>MATHEUS OLIVIERI</h1>
      </Container>
    </Layout> 
  )
}

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  return {
    props: {
      cookieTheme: JSON.parse(cookies.theme),
    },
  };
}
