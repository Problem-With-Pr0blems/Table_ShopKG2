import React from 'react'
import styles from './ButtonReq.module.css'
import { Translate } from '../../Translate/Translate'

const ButtonReq = ({children,width,...props}) => {
  return (
  <button style={{width}} className={styles.btn} {...props}>
    <Translate>
      {children}
    </Translate>
   </button>)
}

export default ButtonReq