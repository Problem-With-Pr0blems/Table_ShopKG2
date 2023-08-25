import { Box, IconButton, Modal } from '@mui/material'
import React from 'react'
import closeIcon from '../../assets/icon/close.svg'
import styles from './SubModal.module.css'
import Input from '../Ui/Input/Input'
import Radio from '../Ui/Radio/Radio'
import ButtonReq from '../Ui/ButtonReq/ButtonReq'



const iconStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px'
}

const SubModal = ({open,onClose}) => {
  return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal} >
          <IconButton sx={iconStyle} onClick={onClose}>
            <img src={closeIcon} alt="" />
          </IconButton>
          <h3>Оставьте заявку</h3>
          <h4>Мы свяжемся с вами в течении часа</h4>
          <form  className={styles.form}>
            <Input variantRequest/>
            <Input variantRequest/>
            <Input variantRequest/>
            <Radio text='Я даю согласие на обработку моих персональных данных'/>
            <ButtonReq width='164px'>Отправить</ButtonReq>
          </form>
        </Box>
      </Modal>
  )
}

export default SubModal