import React, { useEffect } from 'react'
import Login from '../../components/Login/Login'
import Signin from '../../components/Signin/Signin'
import styles from './Log_Sign.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Log_Sign() {
  const [chooosen , setChoosen] = useState(true)
  const location = useLocation()

  const toggleColor=(numberofswitch)=>{
    if(numberofswitch===1){
        setChoosen(true)
    }else if(numberofswitch===2){
        setChoosen(false)
    }
  }
  useEffect(()=>{
    if(location.state === 'login') {
      setChoosen(true)
    }else{
      setChoosen(false)
    }
  },[location])
  
  const activeColor = (active) => active ? "#000" : "#BDBDBD"
  return (
    <div className={styles.wrapper}>
      <div className={styles.log_sign_block}>
        <div className={styles.switch_place}> 
          <span className={styles.switch}
          style={{color:activeColor(chooosen)}}
          onClick={()=>{toggleColor(1)}}>Войти</span>
          <span className={styles.switch}
          style={{color:activeColor(!chooosen)}}
          onClick={()=>{toggleColor(2)}}>Регистрация</span>
        </div>
        {
          chooosen ? <div><Login/></div> : <div><Signin/></div> 
        }
      </div>
    </div>
  )
}

export default Log_Sign