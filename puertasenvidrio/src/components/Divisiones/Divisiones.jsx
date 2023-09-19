import { useSelector, useDispatch } from "react-redux"
import { getDivisiones, getFachada } from "../../redux/actions"
import { useEffect } from "react"
import styled from "./Divisiones.module.css"
import Card from "../Card/Card"

const Divisiones=()=>{

    const divisiones = useSelector(state => state.divisiones)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getDivisiones())
            },[dispatch])
      
    return (
        <div>
<h1 className={styled.let}>Divisiones</h1>

<div className={styled.container}>     

{
    divisiones.map((img)=>{
        return(
            <Card
            name= {img.name}
            image={img.image}
            description={img.description}/>        )
    })
}
</div>
</div>

    )
}


export default Divisiones