import React from 'react'
import Login from '../../components/Login/Login'
import Signin from '../../components/Signin/Signin'
import styles from './Log_Sign.module.css'
import { useState } from 'react'

function Log_Sign() {
  const [button1 , setButton1] = useState('#000')
  const [button2 , setButton2] = useState('#BDBDBD')
  const [chooosen , setChoosen] = useState(true)
  
  const toggleColor=(numberofswitch)=>{
    if(numberofswitch===1){
        setButton1(button1 === "#000" ? "#BDBDBD" : "#000")
        setButton2(button2 === "#BDBDBD" ? "#000" : "#BDBDBD")
        setChoosen(chooosen === false ? true : false)
        
    }else if(numberofswitch===2){
        setButton1(button1  === "#BDBDBD" ? "#000" : "#BDBDBD")
        setButton2(button2 === "#000" ? "#BDBDBD" : "#000")
        setChoosen(chooosen === true ? false :true)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.log_sign_block}>
        <div className={styles.switch_place}> 
          <span className={styles.switch}
          style={{color:button1}}
          onClick={()=>{toggleColor(1)}}>Войти</span>
          <span className={styles.switch}
          style={{color:button2}}
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