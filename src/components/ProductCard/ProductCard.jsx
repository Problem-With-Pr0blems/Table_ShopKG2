import React from 'react'
import styles from "../ProductCard/ProductCard.module.css"

function ProductCard() {
  return (
    <div className={styles.bought}>
            <div className={styles.photoBuy}></div>
            <div className={styles.boughtText}>
                <p className={styles.boughtTextOne}>CMP-1 COMPACT ЕДИНЫЙ НАБОР
                    ШКОЛЬНЫХ ПАРТ 50x70 СМ</p>
                <span className={styles.boughtTextTwo}>4.8 <img src="images/Vector.svg" alt="" /></span>
                <p className={styles.boughtTextThree}>Срок доставки .......... 4 дня</p>
            </div>
            <div className={styles.counter}>
                <button className={styles.minus}><img src="images/minus.svg" alt="" /></button>
                <span className={styles.spanCounter}>1</span>
                <button className={styles.plus}><img src="images/plus.svg" alt="" /></button>
            </div>
            <span className={styles.boughtMoney}>200$</span>
        </div>
  )
}

export default ProductCard