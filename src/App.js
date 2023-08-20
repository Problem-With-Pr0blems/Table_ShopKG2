
import './App.css';
import Header from './components/Header/Header';
import NavAssistant from './components/NavAssistant/NavAssistant';
import Basket from './pages/Basket/Basket';
function App() {
  return (
    <div className="App">
      <Header/>
      <NavAssistant title="ЦЕНЫ НА ШКОЛЬНУЮ СКАМЬЮ"/>
      <Basket/>
    </div>
  );
}

export default App;
