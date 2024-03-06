import axios from 'axios'

const oneCountry =async (id, state)=>{
    const peticion  = await axios.get(`http://localhost:3001/countries/${id}`)
state(peticion.data)
}


export {oneCountry}