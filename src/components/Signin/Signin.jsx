import React from 'react'
import Input from '../Ui/Input/Input'
import OrangeButton from '../Ui/Button_orange/OrangeButton'
import Radio from '../Ui/Radio/Radio'
import Button_img from '../Ui/Button_img/Button_img'
import vk from '../../assets/logAndSign/vk.svg'
import facebook from '../../assets/logAndSign/facebook.svg'
import google from '../../assets/logAndSign/google.svg'
import styles from './Signin.module.css'
function Signin() {
  return (
    <div className={styles.login_cont}>
        <form action="">
            <div className={styles.signin_from}>
                <Button_img img={vk}/>
                <Button_img img={google}/>
                <Button_img img={facebook}/>
            </div>
            <p className={styles.or}>or using e-mail for log in</p>
            <div className={styles.signin_inputs}>
                <Input type='text' variant='simple' placeholder='Имя *'/>
                <Input type='text' variant='simple' placeholder='E-mail *'/>
                <Input type='password' variant ="password" placeholder='Пароль *'/>
            </div>
            <p className={styles.warning}>Поля, помеченные звездочками, обязательны для заполнения.</p>
            <div className={styles.radio}>
                <Radio text='Соглашаюсь с правиласми пользования торговой площадкой и 
возврата'/>
            </div>
            <div className={styles.orangeButton}>
                <OrangeButton  variant="Зарегистрироваться"/>
            </div>

        </form>
    </div>
  )
}

export default Signin