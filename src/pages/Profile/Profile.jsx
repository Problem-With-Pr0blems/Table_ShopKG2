import { TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import Tabs from '../../components/Ui/Tabs/Tabs';
import { Box } from '@mui/material';
import ProfileCards from '../../components/ProfileCards/ProfileCards';
import styles from './Prrofile.module.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Translate } from '../../components/Translate/Translate';
import PersonalData from '../../components/PersonalData/PersonalData';


const tabListContent = ["Главная" ,"Личные данные","История заказов" ]

const Profile = () => {
  const [value, setValue] = useState('1');
  const location = useLocation()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeTab = (value) => {
    setValue(value)
  }

  useEffect(()=>{
    setValue(location.state ?? '1')
  },[location])

  return (
    <Box className={styles.root}>
        <Tabs value={value} handleChange={handleChange} tabList={tabListContent.map((item,i)=><Tab key={item} disableRipple label={<Translate>{item}</Translate>} value={i.toString()} />)}
      >
        <TabPanel value={'0'}>
          <ProfileCards changeTab={handleChangeTab}/>
        </TabPanel>
        <TabPanel value={'1'}>
          <PersonalData/>
        </TabPanel>
        <TabPanel value={'2'}>Item Three</TabPanel>
      </Tabs>
    </Box>
  )
}

export default Profile