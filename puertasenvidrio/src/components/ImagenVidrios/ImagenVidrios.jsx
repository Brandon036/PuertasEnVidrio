import { useSelector, useDispatch } from "react-redux"
import { getImagen } from "../../redux/actions"
import { useEffect } from "react"
import styled from "./ImagenVidrios.module.css"
import Card from "../Card/Card"
import { Link } from "react-router-dom";
const ImagenVidrios=()=>{

    const imagenes = useSelector(state => state.imagenes)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getImagen())
            },[dispatch])
      
    return (
        <div>
<h1 className={styled.let}>Puertas en Vidrio</h1>

{
    imagenes.map((img)=>{
        return(
            <Card
            name= {img.name}
            image={img.image}
            description={img.description}/>           )
    })
} 
<Link to={"/"} >
<button>
    Atras
</button>
</Link>
</div>

    )
}


export default ImagenVidrios