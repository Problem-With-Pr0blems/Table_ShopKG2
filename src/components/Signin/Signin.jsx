import React from 'react'
import Input from '../Ui/Input/Input'
import OrangeButton from '../Ui/Button_orange/OrangeButton'
import Radio from '../Ui/Radio/Radio'
import Button_img from '../Ui/Button_img/Button_img'
import vk from '../../assets/logAndSign/vk.svg'
import facebook from '../../assets/logAndSign/facebook.svg'
import google from '../../assets/logAndSign/google.svg'
import styles from './Signin.module.css'
import { useForm } from 'react-hook-form'


function Signin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
       const {radio, ...param} = data
       console.log(param)
    }
    console.log('error',errors)
  return (
    <div className={styles.login_cont}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.signin_from}>
                <Button_img img={vk}/>
                <Button_img img={google}/>
                <Button_img img={facebook}/>
            </div>
            <p className={styles.or}>or using e-mail for log in</p>
            <div className={styles.signin_inputs}>
                <Input  register={{...register("name", {required: true, minLength: 1, pattern: /\w+/,  })}} type='text' variant='simple' placeholder='Имя *'/>
                {errors.name?.type === 'required' && <p className={styles.error}>Field is required</p>}
                {errors.name?.type === 'pattern' && <p className={styles.error}>Only in english</p>}

                <Input  register={{...register("email", {required: true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}} type='text' variant='simple' placeholder='E-mail *'/>
                {errors.email?.type === 'required' && <p className={styles.error}>Field is required</p>}
                {errors.email?.type === 'pattern' && <p className={styles.error}>Not valid email</p>}
                <Input  register={{...register("password", {required: true, minLength: 8})}} type='password' variant ="password" placeholder='Пароль *'/>
                {errors.password?.type === 'required' && <p className={styles.error}>Field is required</p>}
                {errors.password?.type === 'minLength' && <p className={styles.error}>Min length of password 8 character</p>}
                
            </div>
            <p className={styles.warning}>Поля, помеченные звездочками, обязательны для заполнения.</p>
            <div className={styles.radio}>
                <Radio register={register('radio',{required: true})} text='Соглашаюсь с правиласми пользования торговой площадкой и возврата'/>
            </div>
            <div className={styles.orangeButton}>
                <OrangeButton  variant="Зарегистрироваться"/>
            </div>

        </form>
    </div>
  )
}

export default Signin