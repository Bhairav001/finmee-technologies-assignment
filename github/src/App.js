import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
       {/* <Navbar/>
       <HomePage/> */}
       <Page/>
    </div>
  );
}

export default App;
