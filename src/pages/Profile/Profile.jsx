import { TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import Tabs from '../../components/Ui/Tabs/Tabs';
import { Box } from '@mui/material';

const tabListContent = ["Главная" ,"Личные данные","История заказов" ]

const Profile = () => {
  return (
    <Box sx={{
      maxWidth: '1000px',
      margin: '80px auto'
    }}>
        <Tabs tabList={tabListContent.map((item,i)=><Tab key={item} disableRipple label={item} value={i.toString()} />)}
      >
        <TabPanel value={'0'}>Item One</TabPanel>
        <TabPanel value={'1'}>Item Two</TabPanel>
        <TabPanel value={'2'}>Item Three</TabPanel>
      </Tabs>
    </Box>
  )
}

export default Profile