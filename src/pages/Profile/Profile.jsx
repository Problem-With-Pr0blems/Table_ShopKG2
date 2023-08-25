import { TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import Tabs from '../../components/Ui/Tabs/Tabs';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{
      maxWidth: '1000px',
      margin: '80px auto'
    }}>
        <Tabs tabList={
          [ 
          <Tab disableRipple label="Главная" value={'1'} />,
          <Tab disableRipple label="Личные данные" value={'2'} />,
          <Tab disableRipple label="История заказов" value={'3'} />
          ]
          }
      >
        <TabPanel value={'1'}>Item One</TabPanel>
        <TabPanel value={'2'}>Item Two</TabPanel>
        <TabPanel value={'3'}>Item Three</TabPanel>
      </Tabs>
    </Box>
  )
}

export default Profile