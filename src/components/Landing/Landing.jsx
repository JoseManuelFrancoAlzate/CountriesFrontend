import React from 'react'
import styled from './Landing.module.css'
import {Link} from "react-router-dom"
import {useState} from 'react'
import validation from './validation'
const Landing = ({login})=>{
  const [userData, setUserData] = useState({ 
    username: '', 
    password: '' 
  });

    const [errors, setErrors] = useState({
      username: '', 
      password: '' 
    })

    const handleInputChange = (event)=>{
setUserData({
  ...userData,
  [event.target.name]: event.target.value
})
setErrors(validation({
  ...userData,
  [event.target.name]: event.target.value

}))
    }


    const handleSubmit = (event)=>{
      event.preventDefault()
      login(userData)
    }
    return (
      <center>
        <div className={styled.App} >
       
          <img className={styled.imgCss}src='https://www.nationsonline.org/gallery/World/World-map-countries-flags.jpg'/>
          <h1 className={styled.styledLetra}>Bienvenidos a mi proyecto individual</h1>
          <h2 className={styled.styledLetra}>Countries</h2>
          <form onSubmit={handleSubmit}>
            
            <label  className={styled.letraUser} htmlFor="username">Username:</label>
            <input value={userData.username}type="text" name="username" onChange={handleInputChange}/>
            {errors.username && <p className={styled.letraErr}>{errors.username}</p>}
          
            
            <label className={styled.letraUser} htmlFor="">Password:</label>
            <input value={userData.password} type="password" name="password" onChange={handleInputChange}/>
            {errors.password && <p className={styled.letraErr}>{errors.password}</p>}
          
            <button className={styled.styledButton}>
           Login
            </button>
          </form>
        


        
<h5  className ={styled.l}>username: country123@gmail.com</h5>
<h5 className ={styled.l}>password: country123</h5>
        
        </div>
        </center>
      );
}

export default Landing