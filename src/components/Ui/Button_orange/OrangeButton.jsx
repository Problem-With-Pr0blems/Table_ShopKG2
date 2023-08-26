import React from 'react'
import styles from "./OrangeButton.module.css"
import { Translate } from '../../Translate/Translate'

function OrangeButton({variant,...props}) {
  return (
    <button className={styles.button} {...props} >
        <Translate>
          {variant}
        </Translate>
    </button>
  )
}

export default OrangeButton