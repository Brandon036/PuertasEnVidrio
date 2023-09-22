import styled from './Home.module.css'

import  { useEffect, useState } from 'react';
import ImgType from './imgType/ImgType';
function Home() {
  
  const [text, setText] = useState('');
  const originalText = "PUERTAS EN VIDRIO";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= originalText.length) {
        setText(originalText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Velocidad de escritura (en milisegundos)

    return () => clearInterval(interval);
  }, []);

  // const [text1, setText1] = useState('');
  // const originalText1 = "CLIENTES QUE CONFIAN EN NOSOTROS";
  // let index1 = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (index1 <= originalText1.length) {
  //       setText1(originalText1.slice(0, index1));
  //       index1++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100); // Velocidad de escritura (en milisegundos)

  //   return () => clearInterval(interval);
  // }, []);

  // const [text2, setText2] = useState('');
  // const originalText2 = "PRODUCTOS";
  // let index2 = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (index2 <= originalText2.length) {
  //       setText2(originalText2.slice(0, index2));
  //       index2++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100); // Velocidad de escritura (en milisegundos)

  //   return () => clearInterval(interval);
  // }, []);



  return (
    <div className={styled.divF} >
  
      
      <div className={styled.glassText}>
      <div className={styled.word}>
        <h2 className={styled.letter}>{text}</h2>
        

      </div>

      </div>
      <h3 className={styled.letComunes}>BIENVENIDOS A UNA DE LAS TRES MEJORES EMPRESAS QUE TIENE BOGOTA Y CUNDINAMARCA
EN EL RAMO DEL VIDRIO ARQUITECTONICO, CON NUESTRO CONOCIMIENTO DE MAS DE 15 AÑOS DE EXPERIENCIA
Y UN GRUPO DE TRABAJO EXPERTO NUESTRO SERVICIO PREMIUM ES TOTALMENTE
INCOMPARABLE!</h3>
<h1 className={styled.let}>NUESTRA MISION:</h1>
<p className={styled.letMis}>En PUERTAS EN VIDRIO Trabajamos constantemente en mejorar nuestros productos y
servicios, el cliente es el activo mas importante para nosotros y sabemos que sin él este sueño
no podrá continuar, es por eso que nuestra misión es escucharlos siempre, porque solo así podremos
día a día ser mejores y llegar al lugar tan soñado de nuestra empresa, ser N° 1 en Colombia,
prestando servicios arquitectónicos relacionados con el Vidrio, Acero, y aluminio, basados
exclusivamente en la calidad, precio justo y transparencia a la hora de la contratación sobre
cualquier tema relacionado en el área de la construcción, reparación, remodelación o arreglos
locativos en general, nos reinventamos constantemente, pero nuestros valores no serán cambiados,
solo nuestras técnicas de trabajo y conocimiento,algo necesario en la evolución de cualquier compañía
que realmente quiera escalar a la cima del mundo.</p>

<h1 className={styled.letComunes}>
TESTIMONIOS DE CLIENTES SATISFECHOS 
</h1>

<img className={styled.img} src="https://aspectspain.files.wordpress.com/2011/05/satisfaccic3b3n-con-el-servicio-de-atencic3b3n-al-cliente.jpg"/>

<h1 className={styled.letComunes}>
    Testimonios
</h1>
<p>
<div className={styled.div}>
{/* <iframe
        width="560" // Ancho del video (ajusta según tus necesidades)
        height="315" // Altura del video (ajusta según tus necesidades)
        src="https://www.youtube.com/watch?v=YaOorZmNVck" // Reemplaza TU_URL_DEL_VIDEO con el enlace de inserción que copiaste
        frameborder="0"
        allowfullscreen
        title="Video de YouTube"
      ></iframe> */}

<iframe src="https://www.youtube.com/embed/YaOorZmNVck?si=u2m2DRTEPSynLGCm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  hola
</iframe>
<iframe  src="https://www.youtube.com/embed/3lBg3dRpg40?si=MI1TA7rG_sygmqJB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  hola2
</iframe>

<iframe  src="https://www.youtube.com/embed/_J_LNeypkyk?si=RP9aAYyeqRM3J6EW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  hola3
</iframe>

</div>
</p>

<h1 className={styled.letComunes}>¿Quienes somos?</h1>
<p className={styled.letMis}>
Somos Fabricantes e instaladores de Puertas de Vidrio Templado, Fachadas en vidrio para locales,
puertas de vidrio para oficinas, puertas de vidrio correderas, puertas de vidrio templado, puertas
para centros comerciales en vidrio, etc, divisiones en vidrio para cualquier área, divisiones de baño
en vidrio, Fabricamos pasamanos en acero inoxidable y vidrio, barandas en acero para balcones,
escaleras o espacios abiertos y que necesiten seguridad o un diseño moderno, pueden ser con
vidrio o solo acero, pisos en vidrio, puertas de seguridad en vidrio, ventaneria acústica, puertas
acústicas, Cerramientos en vidrio para cualquier área, terraza, techos, etc, Instalamos cualquier
tipo de obra relacionada con Vidrio, Acero y Aluminio, realizamos reparaciones en puertas de vidrio
o mantenimiento de instalaciones en vidrio,arreglo de puertas en vidrio en general.
</p>

<h1 className={styled.letComunes}>{/*text1*/}CLIENTES QUE CONFIAN EN NOSOTROS</h1>
<p>
<div className={styled.div1}>
<img  className={styled.imgT}src="https://www.vidriosdelasabana.com/wp-content/uploads/2016/04/logo-empresa-300x248-300x212.png"/>
<img  className={styled.imgT}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGfeNrmoQnW1o3YPMM00C2guPP5csN0f4AoJb-CASS45xz_eK0IWz1sCYgif835E7YNE&usqp=CAU"/>
<img  className={styled.imgT}src="https://distribuidoranikoll.com/wp-content/uploads/2023/04/IMG_20230426_120951_692.jpg"/>
<img  className={styled.imgT}src="https://mir-s3-cdn-cf.behance.net/projects/404/e6ea2a46532305.Y3JvcCw0MDQsMzE2LDQ5Myw2NzM.jpg"/>


</div>
</p>
<p>
</p>
<h1 className={styled.letComunes}>CUALIDADES DE LA EMPRESA</h1>
<img  className={styled.img}src="https://exactitudeconsultancy.com/wp-content/uploads/2022/03/column-chart-98-e1648821697714.jpg"/>
<h1 className={styled.letComunes}>{/*text2*/}PRODUCTOS</h1>

<ImgType />
    </div>
    
  );
}

export default Home


