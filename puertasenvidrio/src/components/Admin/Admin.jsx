import { Link } from "react-router-dom";
import styled from "./Admin.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, getAdmin, authenticated} from "../../redux/actions";


function Admin() {

  let state = useSelector((state) => state.isLoggeIn)
  let infoAdmin = useSelector((state) => state.admin)
let authent = useSelector((state)=>state.auth)


console.log(authent)

  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email:"",
password:""
  })



  //tenemos que crear un boton que haga cambiar true a false

 


  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
    const handleLogout = () => {
      setInput({
        ...input,
        email:"",
        password:""
      }); 
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
      dispatch(authenticated(input));
    
  }


  useEffect(()=>{
    dispatch(getAdmin())
  },[dispatch])

if(input.email === infoAdmin.adminInfoE && input.password === infoAdmin.adminInfoP ){   
console.log(input.email)

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

<button onClick={()=>handleLogout()} className={styled.cs}>
  Cerrar sesion 
</button>

      </div>
  
    );
    } else {

      return (
        <div>
                <form onSubmit={(e) => handleSubmit(e)}>

       <h1> Login</h1>
       <p>
       gmail:
<input
              type="text"
              name="email"
              value={input.email}
               onChange={(e) => handleChange(e)}
              placeholder="gmail"
             required
/>
</p>
<p>
password:
<input
type="text"
value={input.password}
name="password"
onChange={(e) => handleChange(e)}
placeholder="password"
required
/>
</p>

<button onSubmit={(e) => handleSubmit(e)} type="submit">
  Ingresar
</button>
</form>
        </div>
      )
    }
  }
  
  export default Admin;
  
 