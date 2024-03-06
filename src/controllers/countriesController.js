const {Country,Activity} = require('../db')

const createCountry =async(name,continent,capital)=>{
const newCountry = await Country.create({name, continent, capital})
return newCountry
}

const findAllCountries = async(query)=>{


if(query){

    let palabraM = query.name.toUpperCase()
    let primeraLetra = palabraM[0]
    
    let minuscula = query.name.toLowerCase().slice(1)
    
    let nombre = primeraLetra + minuscula 

 let union = query.name = nombre 

    const countries = await Country.findAll({where: query, include:{
        model: Activity
    }}) 

    return countries
} else {
        const countries = await Country.findAll({where: query,include:{
            model: Activity
        }}) 
        return countries
    }

}














const  findAllCountriesById = async (id)=>{

    if( typeof(id) === "number" || id.length === 3 ){
       const idMayus = id.toUpperCase()
const countries = await Country.findByPk(idMayus, {include:{
    model: Activity
}})
if(!countries) throw Error('country does not exist')
return countries
    } else return 'The ID must have 3 characters and must not be a number' 
s
}

module.exports ={createCountry, findAllCountries,findAllCountriesById}