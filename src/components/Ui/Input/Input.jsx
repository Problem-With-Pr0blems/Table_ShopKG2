import React from 'react'
import styles from '../Input/Input.module.css'
import { useTranslate } from '../../Translate/Translate'


function Input({type,variant , register,variantRequest = false,placeholder, ...props}) {
   const placeholderText = useTranslate(placeholder)
  return (
    <label>
        <input {...register} type={type} placeholder={placeholderText} className={`${styles.input} ${variantRequest ? styles.request : ''}`} {...props}/>
    </label>
  )
}

export default Input