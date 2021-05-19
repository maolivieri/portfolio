import Layout from "../Design/Layout"
import Header from '../Components/Header'


interface Props {
  toggleTheme(): void
}

export default function Home<Props>({toggleTheme}) {
  return (
    <Layout title="Matheus Aguiar Olivieri">
      <div>
        <Header toggleTheme={toggleTheme}/>
        <h1>MATHEUS OLIVIERI</h1>
      </div>
    </Layout> 
  )
}
