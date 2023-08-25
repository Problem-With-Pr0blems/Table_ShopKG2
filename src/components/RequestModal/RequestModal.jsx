import React, { useState } from 'react'
import styles from './RequstModal.module.css'
import { Box, IconButton, Modal } from '@mui/material'
import Input from '../Ui/Input/Input'
import ButtonReq from '../Ui/ButtonReq/ButtonReq'
import closeIcon from '../../assets/icon/close.svg'
import ModalAlert from '../ModalAlert/ModalAlert'


const iconStyle = {
  position: 'absolute',
  top: '16px',
  right: '18px'
}

const RequestModal = ({open,onClose}) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const handleOpen = () => setAlertOpen(true);
  const handleClose = () => setAlertOpen(false);
  return (
   <>
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
          <h3>Ваши данные</h3>
          <form  className={styles.form} onSubmit={(e)=>e.preventDefault()}>
            <Input placeholder='Имя' variantRequest/>
            <Input placeholder='Номер телефона' variantRequest/>
            <ButtonReq onClick={handleOpen} width='164px'>Заказать</ButtonReq>
          </form>
        </Box>
      </Modal>
      <ModalAlert open={alertOpen} onClose={handleClose}/>
   </>
  )
}

export default RequestModal
