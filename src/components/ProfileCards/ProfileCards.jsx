import { Box } from "@mui/material"
import ProfileCard from "../ProfileCard/ProfileCard"
import { ReactComponent as ProfileMan } from '../../assets/icon/profile_man.svg'
import  { ReactComponent as ProfileArrow } from '../../assets/icon/ProfileArrow.svg'
import  { ReactComponent as ProfileFile }   from '../../assets/icon/profileFIle.svg'
import ButtonReq from "../Ui/ButtonReq/ButtonReq"
import styles from './ProfileCards.module.css'


const ProfileCards = ({changeTab}) => {
  const changeToOne = () => changeTab('1')
  const changeToSecond = ()=> changeTab('2')
  return (
    <Box className={styles.cards}>
      <ProfileCard Icon={<ProfileMan/>} title={'Name Surname'} Button={<ButtonReq>Выйти</ButtonReq>} />
      <ProfileCard onClick={changeToOne} Icon={<ProfileMan />} title={'Личные данные'} Button={<ProfileArrow />} />
      <ProfileCard onClick={changeToSecond} Icon={<ProfileFile />} title={'История заказов'} Button={<ProfileArrow />} />
    </Box>
  )
}

export default ProfileCards