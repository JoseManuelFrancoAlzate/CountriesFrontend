import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { searchCountries } from "../../redux/actions/actions";
import styled from './SearchCountry.module.css'

 const SearchCountry = ()=>{
const dispatch = useDispatch()
const [name, setName] = useState('')

function handlerInputCountry(event){
    event.preventDefault()
    setName(event.target.value)
    console.log(name)
}

function handleButton(event){
    event.preventDefault()
    dispatch(searchCountries(name))
}

return (
    <div>
<input
className={styled.inputCss}
type='text'
placeholder="Search Country..."
onChange={handlerInputCountry}/>

<button className={styled.searchB} onClick={handleButton} type='submit'>
Search
</button>
    </div>
)
}


export default SearchCountry