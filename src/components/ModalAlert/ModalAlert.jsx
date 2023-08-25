import React from 'react'
import styles from './ModalAlert.module.css'
import { Box, Modal } from '@mui/material'
import ButtonReq from '../Ui/ButtonReq/ButtonReq'


const ModalAlert = ({open,onClose}) => {
  return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal} >
          <h3>Ваш заказ принят, ожидайте в течении часа, наши операторы свяжутся с вами!</h3>
          <ButtonReq width='164px' onClick={onClose}>ок</ButtonReq>
        </Box>
      </Modal>
  )
}

export default ModalAlert
