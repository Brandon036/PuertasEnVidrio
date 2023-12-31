import styled from './Home.module.css'



import ImgTypee from "./imgType/ImgType.1.jsx"
import Videos from './videos/Videos';
import { /*Titulos*/ Titulos2,Titulos3 } from './Titulos/Titulos';
import TextOne from './Text/TextOne';
import TextTwo from './TextTwo/TextTwo';
import Contactanos from "./Contactanos/Contactanos";
import {postAdmin} from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const adminP = useSelector((state)=>state.admin)
  const dispatch = useDispatch();

  const [on, onInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    onInput({
      ...on,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch(postAdmin(on))
  }
  useEffect(() => {
    // Solo ejecutar el dispatch cuando adminP cambie (por ejemplo, cuando se registre un usuario)
    if (adminP) {
      dispatch(postAdmin(adminP));
    }
  }, [dispatch, adminP]);

  return (
    <div className={styled.divF} >
      <header>
        {/* <h3>{Titulos()}</h3> */}
  <h1>Puertas En Vidrio</h1>
      </header>
      
   <body>

<div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <form onSubmit={handleSubmit} >
    <p>NOMBRE
      <input type="text" name='name' value={on.name} onChange={handleChange}/>
    </p>
    <p>Gmail
      <input type="text" name='email' value={on.email} onChange={handleChange}/>
    </p>
    <p>Password
      <input type="password" name="password" value={on.password} onChange={handleChange}/>
    </p>
    <button type='submit' >Registrar</button>
  </form>

</div>

    <TextOne />

<div>
  <Videos />
</div>


<br />
<br />
<TextTwo />


<h1 className={styled.cualidades}>{Titulos2()}</h1>
<p>
<div className={styled.div1}>
{/* <img  className={styled.imgT}src="https://www.vidriosdelasabana.com/wp-content/uploads/2016/04/logo-empresa-300x248-300x212.png" alt=""/>
<img  className={styled.imgT}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGfeNrmoQnW1o3YPMM00C2guPP5csN0f4AoJb-CASS45xz_eK0IWz1sCYgif835E7YNE&usqp=CAU"alt=""/>
<img  className={styled.imgT}src="https://distribuidoranikoll.com/wp-content/uploads/2023/04/IMG_20230426_120951_692.jpg"alt=""/>
<img  className={styled.imgT}src="https://mir-s3-cdn-cf.behance.net/projects/404/e6ea2a46532305.Y3JvcCw0MDQsMzE2LDQ5Myw2NzM.jpg"alt=""/> */}
<img  className={styled.imgT}  src="" alt="" />
<img  className={styled.imgT}  src="" alt="" />
<img  className={styled.imgT} src="" alt="" />
<img  className={styled.imgT} src="" alt="" />
<img  className={styled.imgT} src="" alt="" />
</div>
</p>

<h1 className={styled.cualidades}>CUALIDADES DE LA EMPRESA </h1>
<img  className={styled.imgT}src=""alt=""/>
<h1 className={styled.letComunes}>{Titulos3()}</h1>

<div>
    <ImgTypee />
</div>
  
   </body>

   <footer>
    <Contactanos />
   </footer>

    </div>
    
  );
}

export default Home


