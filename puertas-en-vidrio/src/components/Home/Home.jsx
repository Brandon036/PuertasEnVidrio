import styled from './Home.module.css'

function Home() {
  return (
    <div >
      <h1>Puertas de vidrio</h1>
      <h3>BIENVENIDOS A UNA DE LAS TRES MEJORES EMPRESAS QUE TIENE BOGOTA Y CUNDINAMARCA
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

<h1>
TESTIMONIOS DE CLIENTES SATISFECHOS 
</h1>

<img className={styled.img} src="https://aspectspain.files.wordpress.com/2011/05/satisfaccic3b3n-con-el-servicio-de-atencic3b3n-al-cliente.jpg"/>

<h1>
    Testimonios
</h1>
<p>
<div className={styled.div}>
<img  className={styled.img}src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2017/02/video-stats@2x.png"/>
<img  className={styled.img}src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2017/02/video-stats@2x.png"/>
<img  className={styled.img}src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2017/02/video-stats@2x.png"/>

</div>
</p>
    </div>
    
  );
}

export default Home
