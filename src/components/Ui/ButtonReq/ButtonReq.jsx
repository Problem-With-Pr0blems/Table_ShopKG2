import React from 'react'
import styles from './ButtonReq.module.css'

const ButtonReq = ({children,...props}) => {
  return <button className={styles.btn} {...props}> {children} </button>
}

export default ButtonReq