import React, { useState } from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/header_image/Group 68.svg"
import searchIMG from '../../assets/header_image/Vector.svg'
import basketIMG from '../../assets/header_image/Group 56.svg'
import humanSVG from '../../assets/header_image/human.svg'
import ButtonReq from '../Ui/ButtonReq/ButtonReq'
import BurgerMenuSvg from '../../assets/header_image/BurgerMenu.svg'
import  Drawer  from '@mui/material/Drawer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Badge, MenuItem, Select } from '@mui/material'
import DropDown from '../Ui/DropDown/DropDown'
import SubModal from '../SubModal/SubModal'
import ArrowIcon from '../../assets/icon/arrow.svg'

export const Line = () => (<div className={styles.line}></div>)

export const Search = () => {
    return (
        <div className={styles.search_block}>
            <input type="text" placeholder='search'/>
            <img src={searchIMG} alt="" />
        </div>
    )
}

const selectStyle = {
    sx:{
        width: '50px',
        '.MuiSelect-select': {
             color: 'white',
             overflow: 'hidden',
             width: '100px',
             padding: 0
        },
        '.MuiInput-input:focus': {
            background: 'none'
        },
        '&:hover': {
            '&:before':{
                border: 'none !important'
            }
        },
        '&::after': {
            border: 'none'
        },
        '&::before':{
            border: 'none'
        },
    },
   MenuProps:{
    sx: {
        '.MuiMenuItem-root:hover': { background: '#E7E7E7' } ,
        '.Mui-selected': { background: '#E7E7E7' }
    }
    }
}

export const SelectLang = () => {
    const [value, setValue] = useState('кы')
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    return (
        <div style={{position: 'relative'}} className={styles.language_block}>
             <Select
                variant='standard'
                value={value}
                onChange={handleChange} 
                IconComponent={()=><img src={ArrowIcon}/>}
                {...selectStyle}
            >
          <MenuItem value={'Ru'}>русский</MenuItem>
          <MenuItem value={'Ky'}>кыргызча</MenuItem>
        </Select>
            <p style={{position:'absolute',}}>{value}</p>
            {/* <select value={value} onChange={(e)=>setValue(e.target.value)}>
                <option value="ру" >русский</option>
                <option value="кы">кыргызча</option>
            </select>    */}
        </div>
    )
}

export const ButtonRequest = () =>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <ButtonReq onClick={handleOpen}>Оставить заявку</ButtonReq>
        <SubModal open={open} onClose={handleClose}/>
        </>
    )
}

const Basket = () => {
    return (
        <Badge badgeContent={1} sx={{
            color: '#FF2E00',
            '.MuiBadge-badge':{
                top: '-3px',
                fontSize: '13px'
            }
        }}>
            <div className={styles.basket}>
            <img src={basketIMG} alt="" />
        </div>
        </Badge>
    )
}

export const  HeaderLeft = () => {
   return (
   <>
   <div className={styles.number_show_mobile}>
        <PhoneLink/>
        <Line/>
    </div>
    <Line/>
    <ButtonRequest/>
    <Line/>
    <SelectLang/>
    <Line/>
    <Basket/>
    <Line/>
    <Profile/>
   </>
   )
}

const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNavigate = ({path,param}) => {
        handleClose()
        navigate(path,{state:param})
    }
    return (
        <>
        <div onClick={handleClick} className={styles.profile}>
            <img src={humanSVG} alt="" />
        </div>
        <DropDown open={open} anchorEl={anchorEl} handleClose={handleClose} >
            <MenuItem disableRipple disableGutters onClick={()=>handleNavigate({path: '/auth',param: 'login'})}>
                <ButtonReq width='164px'>Войти</ButtonReq>
            </MenuItem>
            <MenuItem sx={{justifyContent: 'center',marginTop: '8px'}} disableRipple disableGutters onClick={()=>handleNavigate({path: '/auth',param: 'sign'})}>
                <span className={styles.dropdown_item_sign}>Зарегистрироваться</span>
            </MenuItem>
            {/* <MenuItem disableRipple disableGutters onClick={handleClose}>
                <span className={styles.dropdown_item}>Профиль</span>
            </MenuItem>
            <MenuItem sx={{margin: '15px  0 30px'}} disableRipple disableGutters onClick={handleClose}>
                <span className={styles.dropdown_item}>История заказов</span>
            </MenuItem>
            <MenuItem disableRipple disableGutters onClick={handleClose}>
                <ButtonReq width='164px'>Выйти</ButtonReq>
            </MenuItem> */}
        </DropDown>
        </>
    )
}

export const HeaderBurger = ({isAuth}) => {
    const [ open, setOpen ] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    if(!isAuth) return <div className={styles.show_profile}><Profile/></div>
    return (
        <>
        <button onClick={handleOpen} className={styles.burger}>
            <img src={BurgerMenuSvg} alt="" />
        </button>
        <Drawer 
            open={open}
            onClose={handleClose}
            anchor='right'
        >
            <div className={`${styles.header_left} ${!isAuth ? styles.not_show_auth : ''}`}>
                <HeaderLeft/>
            </div>
        </Drawer>
        </>   
    )
}

export const PhoneLink = () => {
    return (
        <div className={styles.number}>
            <a href='tel:+996 000 000 000' className={styles.number_font}>
                +996 000 000 000
            </a>
        </div>
    )
}


function Header() {
    const location = useLocation()
    const isAuth = location.pathname !== '/auth'
  return (
    <header className={styles.header_main}>
        <div className={styles.header}>
        <div className={styles.header_inner}>
                <Link to='/' className={styles.logo}>
                    <img src={logo} alt="" />
                    <Line/>
                </Link>
                <div className={`${isAuth  ? styles.number_show_desc : styles.logo}`}>
                 <PhoneLink/>
                 <Line/>
                </div>
                {
                    isAuth && <Search/>
                }
                <div className={`${styles.header_left_show} ${!isAuth ? styles.not_show_auth : ''}`}>
                    <HeaderLeft />
                </div>
                <HeaderBurger isAuth={isAuth}/>
            </div>
        </div>
    </header>
  )
}

export default Header