import styled from "./Card.module.css"




const Card =(props)=>{
    return(
        
        <div   className={styled.card}>

         <div className={styled.parteOne}>

            <h1 className={styled.LetraCards}>{props.name}</h1> 
               <p className={styled.LetraCards}>{props.description}</p>

         </div >
            <div className={styled.parteTwo} >
                      <img   className={styled.imgCss} src={props.image}/> 
            </div>
      

        

        </div>
    )
}

export default Card