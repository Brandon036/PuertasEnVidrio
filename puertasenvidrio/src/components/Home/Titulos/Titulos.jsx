import React from 'react'
import  { useEffect, useState } from 'react';

 export function Titulos() {

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

  return (
    <div>
     <h1>
      {text}
      </h1> 
    </div>
  )
}
 export function Titulos2() {


  const [text1, setText1] = useState('');
  const originalText1 = "CLIENTES QUE CONFIAN EN NOSOTROS";
  let index1 = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index1 <= originalText1.length) {
        setText1(originalText1.slice(0, index1));
        index1++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Velocidad de escritura (en milisegundos)

    return () => clearInterval(interval);
  }, []);
 

  return (
    <div>{text1}</div>
  )
}
 export function Titulos3() {


  
  const [text2, setText2] = useState('');
  const originalText2 = "PRODUCTOS";
  let index2 = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index2 <= originalText2.length) {
        setText2(originalText2.slice(0, index2));
        index2++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Velocidad de escritura (en milisegundos)

    return () => clearInterval(interval);
  }, []);
   
  
    return (
      <div>{text2}</div>
    )
  }
