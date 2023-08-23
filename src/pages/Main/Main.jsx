import React from 'react'
import Card from '../../components/Card/Card'
import styles from './Main.module.css'

function Main() {
  return (
        <div className={styles.catalog_inner}>
          <Card/>
          <Card/>
        </div>  
    )
}

export default Main