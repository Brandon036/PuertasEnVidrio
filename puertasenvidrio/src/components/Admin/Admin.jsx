import { Link } from "react-router-dom";
import styled from "./Admin.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/actions";

function Admin() {

  const dispatch = useDispatch()

 let state = useSelector((state) => state.isLoggeIn)

  console.log(state)

  //tenemos que crear un boton que haga cambiar true a false

  const handleTrue = ()=>{
    dispatch(login(true))
  }
  
  const handleFalse = ()=>{
    dispatch(login(false))
  }
  
if(state === true){   

    return (

      <div className={styled.div}>
      <h1>Admin</h1>
      <Link to={`/formimg`}>
        <div className={styled.B}>
<button className={styled.button1}>
Crear Puertas de vidrio
</button>
</div>
</Link>
<Link to={`/formfacha`}>
<button className={styled.button2}>
Crear Fachadas
</button>
</Link>
<Link to={`/formdivisiones`}>
<button className={styled.button3}>
Crear Divisiones
</button>
</Link>

<button onClick={()=>handleFalse()} className={styled.cs}>
  Cerrar sesion 
</button>

      </div>
  
    );
    } else {

      return (
        <div>
       <h1> Login</h1>
       <p>
       gmail:
<input
              type="text"
              name="gmail"
              placeholder="gmail"
              required
/>
</p>
<p>
password:
<input
type="text"
name="password"
placeholder="password"
required
/>
</p>

<button onClick={()=> handleTrue()}>
  Ingresar
</button>
        </div>
      )
    }
  }
  
  export default Admin;
  
 