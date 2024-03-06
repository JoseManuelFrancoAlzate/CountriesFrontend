import React,{ useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate,} from 'react-router-dom'
import {  getCountriesDos, postActivities } from "../../redux/actions/actions";
import validateForm from "./ValidationsForm";
import styled from './CreateActivity.module.css'


export default function ActivitiesCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const countries = useSelector((state)=> state.activities).sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    })

    const activity = useSelector((state)=> state.activity)
    const [errors, setErrors] = useState({})


let [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: []
  
})

let handleChange = (e)=>{
setInput({
    ...input,
    [e.target.name] : e.target.value
})
setErrors(validateForm({
    ...input,
    [e.target.name] : e.target.value
}))}

function handleSeason(e) {
    setInput({
        ...input,
        season: e.target.value
    })
}


const handleSelect = (e)=>{
    setInput({
        ...input,
        countryId: [...input.countryId, e.target.value]
    })
}


const handleSubmit = (e)=>{
e.preventDefault();
console.log(input)
dispatch(postActivities(input))
setInput({
	name: "",
	difficulty: "",
	duration: "",
	season: "",
    countryId: []
})
navigate('/home')
}


function handleDelete(e) {
    setInput({
        ...input,
        countryId: input.countryId.filter(c => c !== e)
    })
}

useEffect(()=>{
    dispatch(getCountriesDos())
},[])


const season = ['Winter', 'Spring', 'Autumn', 'Summer'];

return(
    <center>
              <Link to="/home" ><button className={styled.button}>Home</button></Link>

    <div className={styled.card}>
      <h1 className={styled.letraColor}>Create Activity</h1>
      <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
   <div >
                                <label className={styled.letras}>Activity: </label>
                                <input className={styled.inputCss} type="text" value={input.name} name="name" onChange={handleChange} placeholder="Activity name..." required />
                                {errors.name && (
                                    <p className={styled.letraErr}>{errors.name}</p>
                                )}
                            </div>
     
        <div>
            <p>
            <label className={styled.letras}>
               Difficulty:                 
            </label>
            <input
            className={styled.inputCss}
            type="number"
            value={input.difficulty}
            name="difficulty"
            onChange={handleChange}
            placeholder="Difficulty..."
            required
            />
   {errors.difficulty && (
       <p className={styled.letraErr}>{errors.difficulty}</p>
                                )}   </p>
            <p>
            <label className={styled.letras}>Duration: </label>
            <input 
            type="string"
            value={input.duration}
            name="duration"
            onChange={handleChange}
            placeholder="Ejm: 00:01:30"
            required
            className={styled.inputCss}
            />
</p>
   <select className={styled.optionCss} onChange={handleSeason} required>
<option  value="" hidden>Select season</option>
                                    {season.map(e => (
                                        <option value={e} name="season" key={e} >{e}</option>
                                    ))}
                                </select>

        </div>
        <select className={styled.optionCss} onChange={handleSelect} >
            <option value="" required>Select country</option>
                                    {countries.map(e => (
                                        <option  value={e.id} name="countries" key={e.id} >{e.name}</option>
                                    ))}
        </select>
 <ul>
                                    <li >{input.countryId.map(i =>
                                        <div>
                                            <h1 className={styled.letras}>
                                            {i}
                                            </h1>
                                            <button className={styled.x} onClick={() => handleDelete(i)} type="button">X</button>
                                        </div>)}</li>
                                </ul>
<ul><li>{input.countryId.map(el => el + ' ,')}</li></ul>
        <button className={styled.buttonA} onSubmit={(e)=>handleSubmit(e)} type='submit'>Create Activity</button>
      </form>
   
      </div>
    </div>
    </center>
)


}