import React from 'react'
import style from "./Contactanos.module.css"
import { Link } from "react-router-dom";
function Contactanos() {
  return (
    <div> 
    <div className={style.Contactanos}>
        <h1>
              CONTACTANOS<button 
              className={style.escon}>

<Link to={'/admin'}>
  .
  </Link>
  </button>
        </h1>
        
            <a className={style.gif1} href="https://wa.me/+573015995954?text=¡Hola! Estoy interesado en tus servicios.">
                 
            </a>
           <a className={style.gif2} href="mailto:">
           
            </a>
           {/* <a href="">
            <img src="" alt="" />
           </a> */}

        </div>
       
    </div>
  )
}

export default Contactanos