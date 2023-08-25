import React from 'react'
import styles from './ButtonReq.module.css'

const ButtonReq = ({children,width,...props}) => {
  return <button style={{width}} className={styles.btn} {...props}> {children} </button>
}

export default ButtonReq