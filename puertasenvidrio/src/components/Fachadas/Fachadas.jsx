import { useSelector, useDispatch } from "react-redux"
import { getFachada } from "../../redux/actions"
import { useEffect } from "react"
import styled from "./Fachadas.module.css"
import Card from "../Card/Card"

const Fachadas=()=>{

    const fachadas = useSelector(state => state.fachadas)
    const dispatch = useDispatch()

    console.log(fachadas)

    useEffect(()=>{
        dispatch(getFachada())
    },[dispatch])
      
    return (
     
            <div>
            <h1 className={styled.let}>Fachadas</h1>
<div className={styled.container}>     
{

    fachadas.map((img)=>{
        return(
             <Card
    name= {img.name}
    image={img.image}
    description={img.description}
   />

   )
    }
    )
}
</div>
</div>

    )
}


export default Fachadas