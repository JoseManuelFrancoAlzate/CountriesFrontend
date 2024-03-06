const {createCountry, findAllCountries,  findAllCountriesById} = require('../controllers/countriesController')

const getCountriesHandler = async (req,res)=>{
  const {name}= req.query


try {
  const Countries = name 

  ? await findAllCountries({name})  :  await findAllCountries()

  res.status(201).json(Countries)

} catch (error) {
  res.status(500).json({error: error.message }) 

}}

const getCountryHandler = async (req,res)=>{

  try {
    const {id} = req.params
  const countries = await findAllCountriesById(id)
  res.status(200).json(countries)

} catch (error) {
  res.status(400).json({error: error.message = 'nonexistent country'}) 

}
  }







const createCountryHandler = async (req,res)=>{
  try {
    const {name, continent,capital} = req.body;
const newCountry = await createCountry(name,continent,capital)
res.status(201).json(newCountry)
  } catch (error) {
    res.status(400).json({error:error.message});
  }
}



module.exports = {
    getCountriesHandler, 
    getCountryHandler, 
    createCountryHandler,
}