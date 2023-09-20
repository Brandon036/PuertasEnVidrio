import styled from "./Card.module.css"
import { Link } from 'react-router-dom'



const Card =(props)=>{
    return(
        
        <div   className={styled.card}>

         
            <p  className={styled.LetraCards}>Name:{props.name}</p>
            <img   className={styled.imgCss}src={props.image}/> 

            <p className={styled.LetraCards}> Description {props.description}</p>

        </div>
    )
}

export default Card