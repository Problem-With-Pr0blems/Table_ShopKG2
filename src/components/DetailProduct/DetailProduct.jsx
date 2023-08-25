import { Box, Drawer } from '@mui/material'
import React, { useState } from 'react'

const DetailProduct = ({open,onClose}) => {
  return (
    <Drawer
    open={open}
    onClose={onClose}
    anchor='bottom'
>
    <Box sx={{
      height: '650px'
    }}>
      hi
    </Box>
</Drawer>
  )
}

export default DetailProduct