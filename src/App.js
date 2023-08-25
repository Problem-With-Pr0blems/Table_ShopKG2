
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Loader from './components/Ui/Loader/Loader';
import Log_Sign from './pages/Log_Sign/Log_Sign';
import Profile from './pages/Profile/Profile';
import RequestModal from './components/RequestModal/RequestModal';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Routes>
        <Route loader={<Loader/>}  element={<Layout/>} >
            <Route index  path='/' element={<h1>Hello</h1>}/>
            <Route path='/auth' element={<Log_Sign/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='*' element={<h1>Not found page 404</h1>}/>
      </Routes> 
      <button onClick={handleOpen}>
        open modal request
      </button>
      <RequestModal open={open} onClose={handleClose}/>
    </div>
  );
}

export default App;
