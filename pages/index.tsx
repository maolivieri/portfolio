import Layout from "../Design/Layout"
import Header from '../Components/Header'

import { Container } from "../styles/Home"

interface Props {
  toggleTheme(): void;
  theme: {
    name: string;
    colors: any
}
}

export default function Home<Props>({ toggleTheme, theme }) {
  return (
    <Layout title="Matheus Aguiar Olivieri">
      <Container>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <h1>MATHEUS OLIVIERI</h1>
      </Container>
    </Layout> 
  )
}
