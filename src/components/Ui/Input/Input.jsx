import React from 'react'
import styles from '../Input/Input.module.css'


function Input({type,variant , ...props}) {
   
  return (
    <label>
        <input type={type} className={styles.input} {...props}/>
    </label>
  )
}

export default Input