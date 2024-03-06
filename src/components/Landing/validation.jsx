import React from 'react'
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validation =  (inputs) => 
{

    
    let errors = {}

    if(inputs.username === '') {errors.username = "Se requiere un nombre"}


    if (!regexEmail.test(inputs.username)) {
        errors.email = 'Debe ser un correo electrónico';
     }

     
     if(inputs.username.length  > 35){

        errors.username = "el nombre de usuario no puede tener mas de 35 caracteres"
     }

     if(!inputs.password.includes('1' || '2' || '3' || '4' || '5' ||'6' || '7' || '8' || '9' || '0') ){
        errors.password = 'la password debe incluir almenos un numero'
     }

     if(inputs.password.length  > 20){

        errors.password = "el nombre de la password no puede tener mas de 20 caracteres"
     }

return errors
}

export default validation