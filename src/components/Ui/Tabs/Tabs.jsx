import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';


const tabListStyle = { 
  maxWidth: 'fit-content',
  borderBottom: 1,
  borderColor: '#D9D9D9',
  '.MuiTabs-indicator':{
    backgroundColor: '#2A2A2A'
  },
  '.MuiButtonBase-root': {
    fontSize: '14px',
    color: '#000 !important',
    minWidth: 100,
    padding: '0 30px 0 0',
    marginRight: '30px',
    alignItems: 'flex-start'
  },
  '.MuiTabs-scroller': {
    overflow: 'auto'
  }
}

const tabStyle = { width: '100%', typography: 'body1','.MuiTabPanel-root': {
  paddingLeft: 0
}}

const Tabs = ({tabList,children,value, handleChange}) => {
  return (
    <Box sx={tabStyle}>
      <TabContext  value={value}>
        <Box sx={tabListStyle}
       >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
           {tabList}
          </TabList>
        </Box>
        {children}
      </TabContext>
  </Box>
  )
}

export default Tabs