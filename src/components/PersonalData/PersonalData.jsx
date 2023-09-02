import styles from './PersonalData.module.css'
import { ReactComponent as ProfileMan } from '../../assets/icon/profile_man.svg'
import { ReactComponent as ProfileKey } from '../../assets/icon/Key.svg'
import { Translate } from '../Translate/Translate'
import InputWithLabel from '../Ui/InoutWithLabel/InputWithLabel'
import OrangeButton from '../Ui/Button_orange/OrangeButton'


const formInputs = [
  {
    label: 'Фамилия *',
    placeholder: 'Фамилия',
    name: 'surname'
  },
  {
    label: 'Имя *',
    placeholder: 'Имя',
    name: 'name'
  },
  {
    label: 'Дата рождения',
    placeholder: '0000.00.00',
    name: 'data'
  },
  {
    label: 'Город область',
    placeholder: 'Город область',
    name: 'city'
  },
  {
    label: 'Мобильный номер *',
    placeholder: '0 703 000 000',
    name: 'number'
  },
  {
    label: 'E-mail *',
    placeholder: 'name.surname@gmail.com',
    name: 'email'
  },
]


const PersonalDataForm = () => {
  return (
    <div className={styles.root_personal_data}>
      <div className={styles.root_personal_data_title}>
        <ProfileMan/>
        <span>
          <Translate>Личные данные</Translate>
        </span>
      </div>
      <form className={styles.root_personal_data_form}>
        {formInputs.map(item=><InputWithLabel key={item.label} name={item.name} placeholder={item.placeholder} label={item.label}/>)}
        <p className={styles.root_personal_data_helper}>
          <Translate>*поля обязательные для заполнения</Translate>
        </p>
        <OrangeButton type='submit' variant='Сохранить'/>
      </form>
    </div>
  )
}

const PersonalDataPassword = () => {
  return (
    <div className={styles.root_password}>
      <div className={styles.root_password_title}>
        <ProfileKey/>
        <span><Translate>Смена пароля</Translate></span>
      </div>
      <form className={styles.root_password_form} >
        <div className={styles.root_password_input}>
          <span>
            <Translate>
              Изменить пароль
            </Translate>
          </span>
          <InputWithLabel placeholder='новый пароль'/>
        </div>
        <div className={styles.root_password_input}>
          <span>
            <Translate>
              Повторить пароль
            </Translate>
          </span>
          <InputWithLabel placeholder='повторите пароль'/>
        </div>
        <OrangeButton variant='Сохранить'/>
      </form>
    </div>
  )
}


const PersonalData = () => {
  return (
    <div className={styles.main_root_personal_data}>
      <PersonalDataForm/>
      <PersonalDataPassword/>
    </div>
  )
}

export default PersonalData