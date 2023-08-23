import React from 'react'
import styles from '../Input/Input.module.css'


function Input({type,variant , register, ...props}) {
   
  return (
    <label>
        <input {...register} type={type} className={styles.input} {...props}/>
    </label>
  )
}

export default Input