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
import { Translate } from '../Translate/Translate'

const typesError = {
    required: true,
    pattern: true,
    minLength: true,
}

export const Error = ({type,children})=>{
    return typesError[type] && <p className={styles.error}>
        <Translate>
            {children}
        </Translate>
    </p>
}

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
                <Error type={errors.name?.type}>
                    Field is required
                </Error>
                <Error type={errors.name?.type}>
                    Only in english
                </Error>

                <Input  register={{...register("email", {required: true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}} type='text' variant='simple' placeholder='E-mail *'/>
                <Error type={errors.email?.type}>
                    Field is required
                </Error>
                <Error type={errors.email?.type}>
                    Not valid email
                </Error>
                <Input  register={{...register("password", {required: true, minLength: 8})}} type='password' variant ="password" placeholder='Пароль *'/>
                <Error type={errors.password?.type}>
                    Field is required
                </Error>
                <Error type={errors.password?.type}>
                    Min length of password 8 character
                </Error>
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