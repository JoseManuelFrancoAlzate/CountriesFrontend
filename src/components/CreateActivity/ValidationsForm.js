import React from 'react'

function validateForm(input){

    let errors = {}

    if(!input.name){
        errors.name = 'a name is required'
    } else if(!input.difficulty){
        errors.difficulty= 'Difficulty must be completed'
    }


    if(input.difficulty  > 5 ){

        errors.difficulty = "Difficulty must be less than 5"
     }

     if(input.difficulty  <= 0 ){

        errors.difficulty = "Difficulty must be a positive number greater than 0"
     }
    return errors

}

export default validateForm