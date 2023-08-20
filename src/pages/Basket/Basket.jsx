import React from 'react'
import styles from "../Basket/Basket.module.css"
import ProductCard from '../../components/ProductCard/ProductCard'

function Basket() {
  return (
    <div className={styles.purchase}>
            <div className={styles.purchaseLeft}>
              <ProductCard/>
            </div>

            <div className={styles.purchaseRight}>
                <div className={styles.total}>
                    <div className={styles.delivery}>Адрес доставки</div>
                    <div className={styles.border}></div>
                    <div className={styles.goodsOne}>
                        <span className={styles.oneText}>Товары, 3 шт</span>
                        <span className={styles.twoText}>300$</span>
                    </div>
                    <div className={styles.goodsTwo}>
                        <span className={styles.totalMoneyOne}>Итого</span>
                        <span className={styles.totalMoneyTwo}>300$</span>
                    </div>
                    <button className={styles.order}>Заказать</button>
                </div>
            </div>
        </div>
  )
}

export default Basket