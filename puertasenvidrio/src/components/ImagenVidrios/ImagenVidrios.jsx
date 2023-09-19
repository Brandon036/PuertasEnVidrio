import { useSelector, useDispatch } from "react-redux"
import { getImagen } from "../../redux/actions"
import { useEffect } from "react"
import styled from "./ImagenVidrios.module.css"
import Card from "../Card/Card"

const ImagenVidrios=()=>{

    const imagenes = useSelector(state => state.imagenes)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getImagen())
            },[dispatch])
      
    return (
        <div>
<h1 className={styled.let}>Puertas en Vidrio</h1>
<div className={styled.container}>     

{
    imagenes.map((img)=>{
        return(
            <Card
            name= {img.name}
            image={img.image}
            description={img.description}/>           )
    })
}
</div>
</div>

    )
}


export default ImagenVidrios