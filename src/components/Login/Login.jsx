import React, { useEffect } from 'react'
import Input from '../Ui/Input/Input'
import styles from './Login.module.css'
import vk from '../../assets/logAndSign/vk.svg'
import facebook from '../../assets/logAndSign/facebook.svg'
import googleSVG from '../../assets/logAndSign/google.svg'
import Button_img from '../Ui/Button_img/Button_img'
import Radio from '../Ui/Radio/Radio'
import OrangeButton from '../Ui/Button_orange/OrangeButton'
import { Translate } from '../Translate/Translate'

export function GoogleLogin() {
  // eslint-disable-next-line no-undef
  google.accounts.oauth2
            .initTokenClient({
                client_id:
                    '447596947513-4lklfsjlcq6fe8el9nn8vlifo77gh948.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/calendar.readonly',
                ux_mode: 'pop_up',
                callback: response => {
                    console.log(response)
                }
            })
            .requestAccessToken()
}

function Login() {
  return (
    <div className={styles.main}>
        <div className={styles.signin_from}>
                <Button_img img={vk}/>
                <Button_img onClick={GoogleLogin} img={googleSVG}/>
                <Button_img img={facebook}/>
        </div>
        <p className={styles.or}>
          <Translate>
            or using e-mail for log in
          </Translate>
        </p>
        <form >
          <div className={styles.signin_inputs}>
                  <Input type='text' variant='simple' placeholder='Имя или E-mail'/> 
                  <Input type='password' variant ="password" placeholder='Пароль'/>
              </div>
          <div className={styles.radio}>
                  <Radio text='Соглашаюсь с правиласми пользования торговой площадкой и возврата'/>
              </div>
          
          <div className={styles.orangeButton}>
            <OrangeButton  variant="Войти"/>
          </div>
        </form>
    </div>
  )
}

export default Login