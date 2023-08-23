import React from 'react'
import styles from "./OrangeButton.module.css"

function OrangeButton({variant,...props}) {
  return (
    <button className={styles.button} {...props} >
        {variant}
    </button>
  )
}

export default OrangeButton