import React from 'react'
import styles from './Button_img.module.css'

function Button_img({img,...props}) {
  return (
    <div>
        <button {...props} className={styles.button_img}>
            <img src={img} alt="" />
        </button>
    </div>
  )
}

export default Button_img