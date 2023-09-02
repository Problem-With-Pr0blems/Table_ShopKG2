
import './App.css';
import { Routes,Route } from 'react-router-dom'
import { lazy, useState } from 'react';
import { Translate } from './components/Translate/Translate';
const LogSign = lazy(()=>import('./pages/Log_Sign/Log_Sign'))
const Profile = lazy(()=>import('./pages/Profile/Profile'))
const Layout = lazy(()=>import('./components/Layout/Layout'))
const DetailProduct = lazy(()=> import('./components/DetailProduct/DetailProduct'))


function App() {
  const [openDetail,setOpenDetail] = useState(false)
  const handleOpen = async() => {
    setOpenDetail(true)
  };

  return ( 
    <div className="App">
      <Routes>
        <Route  element={<Layout/>} >
            <Route index  path='/' element={<h1>Hello</h1>}/>
            <Route path='/auth' element={<LogSign/>}/>
            <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<h1>Not found page 404</h1>}/>
        </Route>
      </Routes> 
      <button onClick={handleOpen}>
        <Translate>
          open modal request
        </Translate>
      </button>
      <Translate >
        Hello
      </Translate>
      <DetailProduct open={openDetail} onClose={()=> setOpenDetail(false)} />
    </div>
  );
}

export default App;
