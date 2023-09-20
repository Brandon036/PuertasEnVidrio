import React from 'react'
import  { useEffect, useState } from 'react';
import style from "./Escritura.module.css"
function Escritura(props) {

    const [text, setText] = useState('');
  const originalText = "Esto es un ejemplo de escritura animada.";
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



  return (
    <div>
    <div className={style.typingeffect}>
      <p>{text}</p>
    </div>
    </div>
  )
}



export default Escritura
