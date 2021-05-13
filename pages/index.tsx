import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from '../utils/usePersistedState'

import styles from '../styles/Home.module.css'
import dark from "../styles/themes/dark"
import light from "../styles/themes/light"

//COMPONENTS
import Header from '../Components/Header'

export default function Home() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark)
  }


  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Header toggleTheme={toggleTheme}/>
        <h1>TESTE</h1>
      </div>
    </ThemeProvider>
  )
}
