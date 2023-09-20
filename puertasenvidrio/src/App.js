
import './App.css';
import Escritura from './Views/Escritura';
import Home from './components/Home/Home';
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/escritura' element={<Escritura /> }/>
      </Routes>
    </div>
  );
}

export default App;

//El build
