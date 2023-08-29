import { lazy, useState } from 'react'
import { Translate } from '../Translate/Translate'
import ButtonCount from '../Ui/ButtonCount/ButtonCount'
import OrangeButton from '../Ui/Button_orange/OrangeButton'
import styles from './DetailBasket.module.css'
const RequestModal = lazy(()=>import('../RequestModal/RequestModal'))


const InfoParagraph = ({children}) => (
  <p className={styles.paragraph}><Translate>{children}</Translate></p>
)

const Counter = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  return (
    <>
    <div className={styles.counter}>
      <div className={styles.counter_buttons}>
        <ButtonCount>-</ButtonCount>
        <span>1</span>
        <ButtonCount>+</ButtonCount>
      </div>
      <span className={styles.counter_count}>$300</span>
    </div>
    <OrangeButton onClick={() => setOpenModal(true)} style={{width: '100%'}} variant='Заказать'/>
    <RequestModal open={openModal} onClose={handleClose}/>
   </>
  )
}

const DetailBasket = () => {
  return (
    <div className={styles.root}>
      <div className={styles.basket}>
        <InfoParagraph>Доставка .................... 5$</InfoParagraph>
        <InfoParagraph>Срок доставки .......... 4 дня</InfoParagraph>
        <Counter/>
      </div>
    </div>
  )
}

export default DetailBasket