import React from 'react'
import styles from '../Card/Card.module.css'

function Card() {
  return (
    <div className={styles.shop_grid}>
      <div className={styles.card_title}>
      <h5 className={styles.title_tables}>ШКОЛЬНАЯ ПАРТА NUDO</h5>
      </div>
      <div className={styles.theLot}>
        < div className={styles.theCard}>
          <div className={styles.tabls_photo}>
              <img src="" alt="" />
          </div>
          <p className={styles.table_text}>CMP-2COMPACT ДВОЙНОЙ ШКОЛЬНЫЙ
              ПАРТНЫЙ ГАРНИТУР 50х120 СМ</p>
          <div className={styles.table_title_text}>
              <p>Срок доставки ................. 4 дня</p>
              <p>Стоимость доставки ....... 5$</p>
          </div>
          <div className={styles.basket_money}>
              <div className={styles.money}>$100</div>
              <button className={styles.basket}>
                  <img src="images/basket.svg" alt="" />
              </button>
          </div>
        </div>
        < div className={styles.theCard}>
          <div className={styles.tabls_photo}>
              <img src="" alt="" />
          </div>
          <p className={styles.table_text}>CMP-2COMPACT ДВОЙНОЙ ШКОЛЬНЫЙ
              ПАРТНЫЙ ГАРНИТУР 50х120 СМ</p>
          <div className={styles.table_title_text}>
              <p>Срок доставки ................. 4 дня</p>
              <p>Стоимость доставки ....... 5$</p>
          </div>
          <div className={styles.basket_money}>
              <div className={styles.money}>$100</div>
              <button className={styles.basket}>
                  <img src="images/basket.svg" alt="" />
              </button>
          </div>
        </div>
        
        < div className={styles.theCard}>
          <div className={styles.tabls_photo}>
              <img src="" alt="" />
          </div>
          <p className={styles.table_text}>CMP-2COMPACT ДВОЙНОЙ ШКОЛЬНЫЙ
              ПАРТНЫЙ ГАРНИТУР 50х120 СМ</p>
          <div className={styles.table_title_text}>
              <p>Срок доставки ................. 4 дня</p>
              <p>Стоимость доставки ....... 5$</p>
          </div>
          <div className={styles.basket_money}>
              <div className={styles.money}>$100</div>
              <button className={styles.basket}>
                  <img src="images/basket.svg" alt="" />
              </button>
          </div>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Card