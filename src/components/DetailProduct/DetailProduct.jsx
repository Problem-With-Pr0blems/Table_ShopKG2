import { Box, Drawer } from '@mui/material'
import { useState } from 'react'
import ImageSlide from '../ImageSlide/ImageSlide'

const DetailProduct = ({open,onClose}) => {
  return (
    <Drawer
    open={open}
    onClose={onClose}
    anchor='bottom'
  >
    <Box sx={{
      height: '650px',
      p: '42px 60px 26px'
    }}>
     <ImageSlide/>
    </Box>
</Drawer>
  )
}

export default DetailProduct