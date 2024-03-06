import {oneCountry} from '../funciones/funciones'
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import styled from './LocalCountry.module.css'
import { Link } from 'react-router-dom'

const LocalCountry = () =>{

    const [country, setCountry] = useState(null)

    const params = useParams()

    useEffect(()=>{

       oneCountry(params.id, setCountry)

    },[])

    return(
        <div>
        
                   <center>
<Link  to='/home' >
    <button className={styled.button}>
    Home
    </button></Link>
    </center>
        <div  className={styled.card}>
     
        {country !== null ? (   <center>
             <div >
                <div>
                    
                <h1 className={styled.letraColor}>ID:</h1>
         <h2 className={styled.letras}> {params.id}</h2> 
         <h1 className={styled.letraColor}>Name:</h1>
  
         <h3 className={styled.letras}> {country.name}</h3>
         <img src={country.image} alt="" width="500px" height="400px"></img>
         </div>
         <div>
         <h1 className={styled.letraColor}>Continent:</h1>

    <h2 className={styled.letras} > {country.continent}</h2>
    <h1 className={styled.letraColor}>Capital:</h1>

   <h2 className={styled.letras}>{country.capital}</h2>
   <h1 className={styled.letraColor}>subregion:</h1>
   <h2 className={styled.letras}>{country.subregion}</h2>
   <h1 className={styled.letraColor}>area:</h1>

   <h2 className={styled.letras}>{country.area}</h2>
   <h1 className={styled.letraColor}>population:</h1>

<h2 className={styled.letras}>{country.population}</h2>

</div>





             </div>
             </center>) : <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Mundo_hecho_de_Banderas.gif' alt="" width="400px" height="200px"/>}
        </div > 
        <div className={styled.card}>
        {country !== null ? (   <center>
            <div>
<h1 className={styled.letraColor}>Activities:</h1>


<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'no activities' : country.Activities[0].name}</h2>

<h1 className={styled.letraColor}>Difficulty:</h1>
<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'there is no difficulty' : country.Activities[0].difficulty}</h2>

<h1 className={styled.letraColor}>Season:</h1>

<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'there is no station' : country.Activities[0].season}</h2>


</div>
             </center>) : <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Mundo_hecho_de_Banderas.gif' alt="" width="400px" height="200px"/>}
        </div>   
        </div>
    )

}


export default LocalCountry
//<h1 className={styled.letraColor}>activities</h1>
//<h2 >{ country.Activities[0].name}</h2>


/*

<div>
<h1 className={styled.letraColor}>Activities:</h1>


<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'no hay actividades' : country.Activities[0].name}</h2>

<h1 className={styled.letraColor}>Dificultad:</h1>
<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'no hay difficultad' : country.Activities[0].difficulty}</h2>

<h1 className={styled.letraColor}>Temporada:</h1>

<h2 className={styled.letras}>{ country.Activities[0] === undefined  ? 'no hay estacion ' : country.Activities[0].season}</h2>


</div>

*/