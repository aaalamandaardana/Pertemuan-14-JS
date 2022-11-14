import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Pesan from './components/pesan';

function App() {
  return (
      <header className='App-header'>
        <Navbar/>
        <img src={logo}></img>
        <Pesan/>
        <i>~ Alamanda Ardana</i>
      </header>
      
  );
}

export default App;
