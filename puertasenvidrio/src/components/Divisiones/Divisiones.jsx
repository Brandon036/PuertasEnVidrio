import { useSelector, useDispatch } from "react-redux"
import { getDivisiones, getFachada } from "../../redux/actions"
import { useEffect } from "react"
import styled from "./Divisiones.module.css"
import Card from "../Card/Card"
import { Link } from "react-router-dom";
const Divisiones=()=>{

    const divisiones = useSelector(state => state.divisiones)
    const dispatch = useDispatch()

console.log(divisiones)
    useEffect(()=>{
        dispatch(getDivisiones())
            },[dispatch])
      
    return (
        <div>
<h1 className={styled.let}>Divisiones</h1>

    

{
    divisiones.map((img)=>{
        return(
            <Card
            name= {img.name}
            image={img.image}
            description={img.description}/>        )
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


export default Divisiones