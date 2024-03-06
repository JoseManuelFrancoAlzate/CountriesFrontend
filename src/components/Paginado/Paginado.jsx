import React from 'react'
import styled from './Paginado.module.css'

const Paginado = ({countriesPage,countries,paginado}) =>{

    const pageNumbers = []

for(let i=0; i<=Math.ceil(countries/countriesPage) ; i++){
pageNumbers.push(i+1)
}

return(
<nav>
<ul className={styled.number}>
   
    {pageNumbers &&
    pageNumbers.map(number =>(
        <li onClick={()=> paginado(number)} className={styled.number}key={number}>
            <button className={styled.button}>
<a >{number}</a>
</button>
</li>
    ))}
</ul>
</nav>
)
}

export default Paginado