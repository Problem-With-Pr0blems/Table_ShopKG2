import React from 'react'
import styles from '../NavAssistant/NavAssistant.module.css'

function NavAssistant(props) {
  return (
    <div>
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.nav_assistant}>
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.219668 0.219668C0.512598 -0.0732225 0.987397 -0.0732225 1.2803 0.219668L5.2803 4.2197C5.5732 4.5126 5.5732 4.9874 5.2803 5.2803L1.2803 9.2803C0.987397 9.5732 0.512598 9.5732 0.219668 9.2803C-0.0732225 8.9874 -0.0732225 8.5126 0.219668 8.2197L3.6893 4.75L0.219668 1.28033C-0.0732225 0.987437 -0.0732225 0.512558 0.219668 0.219668Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21967 0.219668C9.5126 -0.0732225 9.9874 -0.0732225 10.2803 0.219668L14.2803 4.2197C14.5732 4.5126 14.5732 4.9874 14.2803 5.2803L10.2803 9.2803C9.9874 9.5732 9.5126 9.5732 9.21967 9.2803C8.92678 8.9874 8.92678 8.5126 9.21967 8.2197L12.6893 4.75L9.21967 1.28033C8.92678 0.987437 8.92678 0.512558 9.21967 0.219668Z" fill="white"/>
                </svg>
                <span className={styles.where}>
                    {props.title}
                </span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default NavAssistant