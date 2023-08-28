import { Translate } from '../Translate/Translate'
import ButtonCount from '../Ui/ButtonCount/ButtonCount'
import OrangeButton from '../Ui/Button_orange/OrangeButton'
import styles from './DetailBasket.module.css'


const InfoParagraph = ({children}) => (
  <p className={styles.paragraph}><Translate>{children}</Translate></p>
)

const Counter = () => {
  return (
    <div className={styles.counter}>
      <div className={styles.counter_buttons}>
        <ButtonCount>-</ButtonCount>
        <span>1</span>
        <ButtonCount>+</ButtonCount>
      </div>
      <span className={styles.counter_count}>$300</span>
    </div>
  )
}

const DetailBasket = () => {
  return (
    <div className={styles.root}>
      <div className={styles.basket}>
        <InfoParagraph>Доставка .................... 5$</InfoParagraph>
        <InfoParagraph>Срок доставки .......... 4 дня</InfoParagraph>
        <Counter/>
        <OrangeButton style={{width: '100%'}} variant='Заказать'/>
      </div>
    </div>
  )
}

export default DetailBasket