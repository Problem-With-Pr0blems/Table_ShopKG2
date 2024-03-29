import { Menu } from '@mui/material'

const DropDown = ({children,open, anchorEl,handleClose}) => {
  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
            horizontal: 0,
            vertical:  45
        }}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
           '.MuiPaper-root': {
            padding: '32px 26px',
            '.MuiList-root': {
                padding: 0
            },
            '.MuiButtonBase-root': {
                '&:hover': {
                    background: 'none'
                },
                background: 'none'
            },
           }
        }}
      >
        {children}
      </Menu>
  )
}

export default DropDown