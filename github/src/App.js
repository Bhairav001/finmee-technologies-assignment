import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <HomePage/>
    </div>
  );
}

export default App;
