
import './App.css';
import Escritura from './Views/Escritura';
import Home from './components/Home/Home';
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"
import FormImage from './components/FormImage/FormImage';
import ImagenVidrios from './components/ImagenVidrios/ImagenVidrios';
import FormFachada from './components/FormFachada/FormFachada';
import FormDivisiones from './components/FormDivisiones/FormDivisiones';
import Fachadas from './components/Fachadas/Fachadas.jsx';
import Divisiones from './components/Divisiones/Divisiones';
import Admin from './components/Admin/Admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/escritura' element={<Escritura /> }/>
        <Route path='/formimg' element={<FormImage/>} />
        <Route path='/imgvidrio' element={<ImagenVidrios/>}/>
        <Route path="/formfacha" element={<FormFachada/>}/>
        <Route path="formdivisiones" element={<FormDivisiones/>}/>
        <Route path='imgfachadas' element={<Fachadas/>}/>
        <Route path='/imgdivisiones' element={<Divisiones/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>

      </Routes>
    </div>
  );
}

export default App;

//El build
