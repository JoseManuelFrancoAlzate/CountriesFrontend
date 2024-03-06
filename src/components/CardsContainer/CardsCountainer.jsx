import axios from "axios"
import { useEffect,useState } from "react";
import styled from "./CardsContainer.module.css"
import Card from "../Card/Card"
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";

const CardsContainer = ()=>{

 const [countries, setCountries]= useState([])
const [tableCountry, setTableCountry] = useState([])
const [search, setSearch] = useState("")
const dispatch = useDispatch()

const peticionGet = async()=>{
  await axios.get("http://localhost:3001/countries")
  .then(response=>{
    setCountries(response.data);
    setTableCountry(response.data)
  }).catch(error=>{
    console.log(error)
  })
}


useEffect(()=>{
  peticionGet()
},[])

const handleChange=e=>{
  setSearch(e.target.value);
  filtrar(e.target.value)
}
const filtrar=(terminoBusqueda)=>{
  var resultadoBusqueda=tableCountry.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
      return elemento;
    }
  })
  setCountries(resultadoBusqueda);
}

const handlerOrder = (event)=>{
dispatch(orderCards(event.target.value))
}

const handlerFilter = (event)=>{
  dispatch(filterCards(event.target.value))
  }

    return (
      <div>
      <input
        valor={search}
        placeholder="search by name"
        onChange={handleChange}/>
           <button className={styled.botones}>Buscar</button>

        
  <div className={styled.container} >
    <div>
      <select onChange={handlerOrder}>
<option value="Ascendente">
  Ascendente
</option>
<option value="Descendente">
Descendente
</option>
      </select>
      <select onChange={handlerFilter}>

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
    </div>

{countries &&
  countries.map(countries=>{
    return <Card id={countries.id}
    image={countries.image}
    name= {countries.name}
    continent={countries.continent}
   />
  })

}

  </div>
  </div>
      );
}

export default CardsContainer

