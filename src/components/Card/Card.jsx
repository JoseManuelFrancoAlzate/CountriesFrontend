import styled from "./Card.module.css"
import { Link } from 'react-router-dom'



const Card =(props)=>{
    return(
        
        <div   className={styled.card}>
              <Link  to={`/detail/${props.id}`}>

           <img   className={styled.imgCss}src={props.image}/> 
           </Link>
            <p  className={styled.LetraCards}>Name:{props.name}</p>
            <p  className={styled.LetraCards}>Continent:{props.continent}</p>
            <p className={styled.LetraCards}> Population: {props.population}</p>

        </div>
    )
}

export default Card