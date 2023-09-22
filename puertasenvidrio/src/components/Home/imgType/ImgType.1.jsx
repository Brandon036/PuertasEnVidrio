import React from 'react';
import { Link } from "react-router-dom";
import styles from "./ImgType.module.css";

 function ImgType() {

  return (
    <div className={styles.divL}>

      <div className={styles.container_1}>
        <h2 className={styles.imgh2_1}>PUERTAS DE VIDRIO</h2>
        <Link to={`/imgvidrio`}>
          <p className={styles.imgh2}>
            AQUI VERAS VIDEOS
            E IMAGENES DE TRABAJOS
            REALES REALIZADOS POR
            NOSOTROS, NUESTRO
            CATALOGO NO TIENE
            CONTENIDO DUPLICADO,
            TODO ES 100% REAL
            <div className={styles.imgh1}>   </div></p>
        </Link>


      </div>

      <div className={styles.container_2}>
        <h2 className={styles.imgh2_1}>DIVISIONES DE VIDRIO</h2>
        <Link to={`/imgfachadas`}>
          <p className={styles.imgh2}>
            AQUI VERAS VIDEOS
            E IMAGENES DE TRABAJOS
            REALES REALIZADOS POR
            NOSOTROS, NUESTRO
            CATALOGO NO TIENE
            CONTENIDO DUPLICADO,
            TODO ES 100% REAL
            <div className={styles.imgh1}>   </div>
            
            </p>
        </Link>
      </div>

      <div className={styles.container_3}>
        <h2 className={styles.imgh2_1}>FACHADAS DE VIDRIO</h2>
         <Link to={'/imgdivisiones'}>
          <p className={styles.imgh2}>
            AQUI VERAS VIDEOS
            E IMAGENES DE TRABAJOS
            REALES REALIZADOS POR
            NOSOTROS, NUESTRO
            CATALOGO NO TIENE
            CONTENIDO DUPLICADO,
            TODO ES 100% REAL
            <div className={styles.imgh1}>   </div></p>
       </Link>
      </div>




    </div>
  );
}
export default ImgType