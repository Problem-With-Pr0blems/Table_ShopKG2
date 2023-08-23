import React from 'react'
import styles from './Button_img.module.css'

function Button_img(props) {
  return (
    <div>
        <button className={styles.button_img}>
            <img src={props.img} alt="" />
        </button>
    </div>
  )
}

export default Button_img