import React from 'react';
import styles from '../styles/Home.module.scss'

//COMPONENTS
import Header from '../Components/Header'

export default function Home({toggleTheme}) {
  return (
      <div className={styles.container}>
        <Header toggleTheme={toggleTheme}/>
        <h1>MATHEUS OLIVIERI</h1>
      </div>
  )
}
