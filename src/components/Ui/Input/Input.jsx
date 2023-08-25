import React from 'react'
import styles from '../Input/Input.module.css'


function Input({type,variant , register,variantRequest = false, ...props}) {
   
  return (
    <label>
        <input {...register} type={type} className={`${styles.input} ${variantRequest ? styles.request : ''}`} {...props}/>
    </label>
  )
}

export default Input