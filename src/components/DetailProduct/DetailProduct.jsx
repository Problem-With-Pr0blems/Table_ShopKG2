import { Box, Drawer, IconButton } from '@mui/material'
import ImageSlide from '../ImageSlide/ImageSlide'
import closeIcon from '../../assets/icon/close.svg'
import DetailInfo from '../Detailnfo/DetailInfo'
import DetailBasket from '../DetailBasket/DetailBasket'
import styles from './DetailProduct.module.css'


const iconStyle = {
  position: 'absolute',
  top: '16px',
  right: '18px'
}


const DetailProduct = ({open,onClose}) => {
  return (
      <Drawer
        open={open}
        onClose={onClose}
        anchor='bottom'
        >
        <Box className={styles.main}>
          <IconButton sx={iconStyle} onClick={onClose}>
                <img src={closeIcon} alt="" />
              </IconButton>
        <Box className={styles.left}>
          <ImageSlide/>
          <DetailInfo/>
        </Box>
          <DetailBasket/>
        </Box>
    </Drawer>
  )
}

export default DetailProduct