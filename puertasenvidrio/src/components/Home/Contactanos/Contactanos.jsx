import React from 'react'
import style from "./Contactanos.module.css"

function Contactanos() {
  return (
    <div> 
    <div className={style.Contactanos}>
        <h1>
              CONTACTANOS 
        </h1>
           
            <a href="https://wa.me/+573105689393?text=¡Hola! Estoy interesado en tus servicios.">
                 <img src="https://media.giphy.com/media/8rElnPqWAxlP83PPI3/giphy.gif" alt=""  />
            </a>
           <a href="mailto:bcbjpro036crak@gmail.com">
            <img src="https://cdn.dribbble.com/users/2118564/screenshots/4240923/gmail-sent-animation.gif" alt="" />
           </a>
           {/* <a href="">
            <img src="" alt="" />
           </a> */}

        </div>
       
    </div>
  )
}

export default Contactanos