import React from 'react'
import styles from './Radio.module.css'
function Radio({text, register, ...props}) {
  return ( 
    <label className={styles.label}>
        <input  {...register} className={styles.radio} type="radio" {...props} />
        <span className={styles.text}>{text}</span>
    </label>
  )
}

export default Radio