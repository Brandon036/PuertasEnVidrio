import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

//El build
