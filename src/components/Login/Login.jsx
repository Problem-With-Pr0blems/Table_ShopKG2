import React from 'react'
import Input from '../Ui/Input/Input'
import styles from './Login.module.css'
import vk from '../../assets/logAndSign/vk.svg'
import facebook from '../../assets/logAndSign/facebook.svg'
import google from '../../assets/logAndSign/google.svg'
import Button_img from '../Ui/Button_img/Button_img'
import Radio from '../Ui/Radio/Radio'
import OrangeButton from '../Ui/Button_orange/OrangeButton'

function Login() {
  return (
    <div className={styles.main}>
        <div className={styles.signin_from}>
                <Button_img img={vk}/>
                <Button_img img={google}/>
                <Button_img img={facebook}/>
        </div>
        <p className={styles.or}>or using e-mail for log in</p>
        <div className={styles.signin_inputs}>
                <Input type='text' variant='simple' placeholder='Имя или E-mail'/> 
                <Input type='password' variant ="password" placeholder='Пароль'/>
            </div>
        <div className={styles.radio}>
                <Radio text='Соглашаюсь с правиласми пользования торговой площадкой и 
возврата'/>
            </div>
        
        <div className={styles.orangeButton}>
          <OrangeButton  variant="Войти"/>
        </div>
    </div>
  )
}

export default Login