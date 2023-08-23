import React from 'react'
import styles from './Radio.module.css'
function Radio({text ,...props}) {
  return (
    <label>
        <input className={styles.radio} type="radio" {...props} />
        <span className={styles.text}>{text}</span>
    </label>
  )
}

export default Radio