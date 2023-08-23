import React, { useState } from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/header_image/Group 68.svg"
import searchIMG from '../../assets/header_image/Vector.svg'
import basketIMG from '../../assets/header_image/Group 56.svg'
import humanSVG from '../../assets/header_image/human.svg'
import ButtonReq from '../Ui/ButtonReq/ButtonReq'
import BurgerMenuSvg from '../../assets/header_image/BurgerMenu.svg'
import  Drawer  from '@mui/material/Drawer'
import { useLocation } from 'react-router-dom'


export const Line = () => (<div className={styles.line}></div>)

export const Search = () => {
    return (
        <div className={styles.search_block}>
            <input type="text" placeholder='search'/>
            <img src={searchIMG} alt="" />
        </div>
    )
}

export const SelectLang = () => {
    const [value, setValue] = useState('кы')
    return (
        <div className={styles.language_block}>
            <select value={value} onChange={(e)=>setValue(e.target.value)}>
                <option value="ру">русский</option>
                <option value="кы">кыргызча</option>  
            </select>
        </div>
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
    <ButtonReq>Оставить заявку</ButtonReq>
    <Line/>
    <SelectLang/>
    <Line/>
    <div className={styles.basket}>
        <img src={basketIMG} alt="" />
    </div>
    <Line/>
    <Profile/>
   </>
   )
}

const Profile = () => {
    return (
        <div className={styles.profile}>
        <img src={humanSVG} alt="" />
        </div>
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
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                    <Line/>
                </div>
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