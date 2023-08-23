
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Loader from './components/Ui/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route loader={<Loader/>}  element={<Layout/>} >
            <Route index  path='/' element={<h1>Hello</h1>}/>
            <Route path='/catalog' element={<h1>Lorem </h1>}/>
        </Route>
        <Route path='*' element={<h1>Not found page 404</h1>}/>
      </Routes> 
    </div>
  );
}

export default App;
