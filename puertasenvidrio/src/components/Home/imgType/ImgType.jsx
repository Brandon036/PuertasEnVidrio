import React from 'react'
import { Link } from "react-router-dom";
import styles from "./ImgType.module.css"

function ImgType() {

  return (
    <div className={styles.divL}>
        
    <div className={styles.container_1}>
    <h2 className={styles.imgh2_1}  >PUERTAS DE VIDRIO</h2>
    <Link to={`/imgvidrio`}>
     <img  className={styles.img} src='./divisiones1.jpeg' alt=""/>
    </Link>
    
         <p className={styles.imgh2} >
            AQUI VERAS VIDEOS
E IMAGENES DE TRABAJOS
REALES REALIZADOS POR
NOSOTROS, NUESTRO
CATALOGO NO TIENE
CONTENIDO DUPLICADO,
TODO ES 100% REAL 
<div className={styles.imgh1}>   </div></p>

   
        </div>
   <div className={styles.container_1}>
    <h2 className={styles.imgh2_1} >DIVISIONES DE VIDRIO</h2>
     <Link to={`/imgfachadas`}>
    <img  className={styles.img} src='./fachada1.jpeg'alt="" />
    </Link>

    
    <p className={styles.imgh2} >
            AQUI VERAS VIDEOS
E IMAGENES DE TRABAJOS
REALES REALIZADOS POR
NOSOTROS, NUESTRO
CATALOGO NO TIENE
CONTENIDO DUPLICADO,
TODO ES 100% REAL 
<div className={styles.imgh1}>   </div></p>
   </div>
   <div className={styles.container_1}>
   <h2 className={styles.imgh2_1} >FACHADAS DE VIDRIO</h2>
    <Link to={'/imgdivisiones'}>
    <img  className={styles.img} src='./vidrio1.jpeg' alt=""/>
    </Link>

    
    <p className={styles.imgh2} >
            AQUI VERAS VIDEOS
E IMAGENES DE TRABAJOS
REALES REALIZADOS POR
NOSOTROS, NUESTRO
CATALOGO NO TIENE
CONTENIDO DUPLICADO,
TODO ES 100% REAL 
<div className={styles.imgh1}>   </div></p>
   </div>
    
   
    
    
    </div>
  )
}

export default ImgType