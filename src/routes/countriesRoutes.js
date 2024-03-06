const { Router } = require("express");

const router = Router();

const { 
    getCountriesHandler, 
    getCountryHandler, 
    createCountryHandler,
    
} = require ('../handlers/countriesHandlres')

//get: informacion
//post: creacion
//delete: eliminar


    

router.get('/',getCountriesHandler)

router.get('/:id',getCountryHandler)

router.post('/',createCountryHandler)


module.exports = router;

