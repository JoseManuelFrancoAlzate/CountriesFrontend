import { useEffect,useState } from "react";
import Card from "../Card/Card"
import { useSelector, useDispatch } from "react-redux";
import {getActivity,getCountries, filterCards, orderCards, orderCards_population, filterActivities} from "../../redux/actions/actions";
import styled from "./Prueba.module.css"
import Paginado from "../Paginado/Paginado";
import SearchCountry from "../SearchCountry/SearchCountry";
import { Link } from "react-router-dom";

const Prueba = ()=>{


const countries = useSelector(state=>state.countries)
const activity = useSelector(state => state.activity)


const dispatch = useDispatch()

const [order, setOrder] = useState('')

const [page, setPage] = useState(1)
const [countriesPage,setCountriesPage] = useState(10)
const indexOfLastCountry = page * countriesPage
const indexOfFirstCountry = indexOfLastCountry - countriesPage 
const currentCountry = countries.slice(indexOfFirstCountry,indexOfLastCountry)

const paginado = (pageNumber)=>{
  setPage(pageNumber)
}


      useEffect(()=>{
  dispatch(getCountries())
  dispatch(filterActivities())

      },[dispatch])

      useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])


      const handlerOrder = (event)=>{
        event.preventDefault();
        dispatch(orderCards(event.target.value))
        setOrder(`${event.target.value}`)
        }
        
        const handlerFilter = (event)=>{
          event.preventDefault();
          dispatch(filterCards(event.target.value))
          setOrder(event.target.value)
          }


          const handlerOrder_population = (event)=>{
            event.preventDefault();
            dispatch(orderCards_population(event.target.value))
            setOrder(`${event.target.value}`)}
            
const handlerFilterActivities = (e)=>{
  e.preventDefault();
          dispatch(filterActivities(e.target.value))
          setOrder(e.target.value)
  
}
    
        
          
    return (
      <div>
  
        <SearchCountry/>
     <select  className={styled.selectCss} onChange={handlerOrder}>
      <option disabled='disabled'> Alphabetically</option>
<option key="Ascendente"value="Ascendente">
Upward
</option>
<option key="Descendente"  value="Descendente">
Falling
</option>
      </select>

      <select className={styled.selectCss} onChange={handlerOrder_population}>
      <option disabled='disabled'> Population</option>
<option value="Ascendente" key='Ascendente'>
Upward
</option>
<option  value="Descendente" key='Descendente'>
Falling
</option>
      </select>
    
   
      <select  className={styled.selectCss} onChange={handlerFilter}>
<option value='allCountries'>
  All Countries
</option>
      <option key="North America" value="North America">
      North America
      </option>
      <option key="South America" value="South America">
      South America
      </option>
      <option key="Asia" value="Asia">
      Asia
      </option>
      <option key="Africa" value="Africa">
      Africa
      </option>
      <option key="Antarctica" value="Antarctica">
      Antarctica
      </option>
      <option key="Europe" value="Europe">
      Europe
      </option>
      <option  key="Oceania" value="Oceania">
      Oceania
      </option>

      </select>

      <select  className={styled.selectCss} onChange={handlerFilterActivities} >
      <option  value='All'>All activities</option>
                        {activity.map(e => (
                            <option value={e.name} key={e.id}>{e.name}</option>
                        ))}
      </select>
      <Paginado 
countriesPage={countriesPage}
countries={countries.length}
paginado={paginado}
/>
<div className={styled.container}>
  
{currentCountry  &&
  currentCountry.map(countries=>{
    return <Card id={countries.id}
    image={countries.image}
    name= {countries.name}
    continent={countries.continent}
    population={countries.population}
    key={countries.id}
   />
  })

}

</div>

</div>
      );
}

export default Prueba


/*
import { useEffect,useState } from "react";
import Card from "../Card/Card"
import { useSelector, useDispatch } from "react-redux";
import {getActivity,getCountries, filterCards, orderCards, orderCards_population, filterActivities} from "../../redux/actions/actions";
import styled from "./Prueba.module.css"
import Paginado from "../Paginado/Paginado";
import SearchCountry from "../SearchCountry/SearchCountry";

const Prueba = ()=>{


const countries = useSelector(state=>state.countries)
const activity = useSelector(state => state.activity)


const dispatch = useDispatch()

const [order, setOrder] = useState('')

const [page, setPage] = useState(1)
const [countriesPage,setCountriesPage] = useState(10)
const indexOfLastCountry = page * countriesPage
const indexOfFirstCountry = indexOfLastCountry - countriesPage
const currentCountry = countries.slice(indexOfFirstCountry,indexOfLastCountry)

const paginado = (pageNumber)=>{
  setPage(pageNumber)
}


      useEffect(()=>{
  dispatch(getCountries())
  dispatch(filterActivities())

      },[dispatch])

      useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])


      const handlerOrder = (event)=>{
        event.preventDefault();
        dispatch(orderCards(event.target.value))
        setOrder(`${event.target.value}`)
        }
        
        const handlerFilter = (event)=>{
          event.preventDefault();
          dispatch(filterCards(event.target.value))
          setOrder(event.target.value)

          }


          const handlerOrder_population = (event)=>{
            event.preventDefault();
            dispatch(orderCards_population(event.target.value))
            setOrder(`${event.target.value}`)}
            
const handlerFilterActivities = (e)=>{
  e.preventDefault();
          dispatch(filterActivities(e.target.value))
          setOrder(e.target.value)
  
}
    
        
          
    return (
      
    <div className={styled.container}>
      

     <select  className={styled.selectCss} onChange={handlerOrder}>
      <option disabled='disabled'> Alphabetically</option>
<option value="Ascendente">
Upward
</option>
<option  value="Descendente">
Falling
</option>
      </select>

      <select className={styled.selectCss} onChange={handlerOrder_population}>
      <option disabled='disabled'> Population</option>
<option value="Ascendente">
Upward
</option>
<option  value="Descendente">
Falling
</option>
      </select>
    
   
      <select  className={styled.selectCss} onChange={handlerFilter}>
<option value='allCountries'>
  All Countries
</option>
      <option value="North America">
      North America
      </option>
      <option value="South America">
      South America
      </option>
      <option value="Asia">
      Asia
      </option>
      <option value="Africa">
      Africa
      </option>
      <option value="Antarctica">
      Antarctica
      </option>
      <option value="Europe">
      Europe
      </option>
      <option value="Oceania">
      Oceania
      </option>

      </select>

      <select   >

      <option value='All'>All activities</option>
                        {activity.map(e => (
                            <option value={e} key={e}>{e}</option>
                        ))}
      </select>

      <Paginado 
countriesPage={countriesPage}
countries={countries.length}
paginado={paginado}
/>
  
<SearchCountry/>
{currentCountry  &&
  currentCountry.map(countries=>{
    return <Card id={countries.id}
    image={countries.image}
    name= {countries.name}
    continent={countries.continent}
    population={countries.population}
   />
  })

}

  
  </div>
      );
}

export default Prueba

 */