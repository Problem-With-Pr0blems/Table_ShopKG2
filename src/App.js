
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Loader from './components/Ui/Loader/Loader';
import Log_Sign from './pages/Log_Sign/Log_Sign';
const cacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
      language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {},
    };
    existing[key] = {...existing[key], [language]: value};
    localStorage.setItem('translations', JSON.stringify(existing));
  },
 };

function App() {
  return (
    <div className="App">
      <Routes>
        <Route loader={<Loader/>}  element={<Layout/>} >
            <Route index  path='/' element={<h1>Hello</h1>}/>
            <Route path='/auth' element={<Log_Sign/>}/>
        </Route>
        <Route path='*' element={<h1>Not found page 404</h1>}/>
      </Routes> 
    </div>
  );
}

export default App;
