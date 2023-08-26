import React from 'react'
import styles from './Radio.module.css'
import { Translate } from '../../Translate/Translate'
function Radio({text, register, ...props}) {
  return ( 
    <label className={styles.label}>
        <input  {...register} className={styles.radio} type="radio" {...props} />
        <span className={styles.text}>
          <Translate>
            {text}
          </Translate>
        </span>
    </label>
  )
}

export default Radio