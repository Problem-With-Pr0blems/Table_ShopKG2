import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/header_image/Group 68.svg"
import searchIMG from '../../assets/header_image/Vector.svg'
import basketIMG from '../../assets/header_image/Group 56.svg'
import whatsapp from '../../assets/header_image/Group 125.svg'

function Header() {
  return (
    <div>
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header_inner}>
                    <div className={styles.header_left}>
                        <div className={styles.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={styles.number}>
                            <p className={styles.number_font}>
                                +996 000 000 000
                            </p>
                        </div>
                    </div>
                    <div className={styles.search}>
                        <div className={styles.search_block}>
                            <input type="text" placeholder='search'/>
                            <img src={searchIMG} alt="" />
                        </div>
                    </div>
                    <div className={styles.header_right}> 
                        <div className={styles.basket}>
                            <img src={basketIMG} alt="" />
                        </div>
                        <div className={styles.social}>
                            <img src={whatsapp} alt="" />
                        </div>
                        <div className={styles.language}>
                            <div className={styles.language_block}>
                                <p>Language :</p>
                                <select name="" id="">
                                    <option value="">русский</option>
                                    <option value="">кыргызча</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header