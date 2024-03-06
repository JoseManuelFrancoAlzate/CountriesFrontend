import './App.css';
import Landing from './components/Landing/Landing.jsx'
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"
import Home from './components/Home/Home'
import { useEffect,useState } from 'react';
import LocalCountry from './components/LocalCountry/LocalCountry';
import Prueba from './components/Prueba/Prueba';
import Paginado from './components/Paginado/Paginado';
import CardsContainer from './components/CardsContainer/CardsCountainer';
import ActivitiesCreate from './components/CreateActivity/CreateActivity';
import Img from './components/Img'
import axios from 'axios'
 axios.defaults.baseURL = "https://countriesback-1.onrender.com"



function App() {
  const navigate = useNavigate()

  const [access, setAccess] = useState(false)
    const username = 'country123@gmail.com'
  const password = 'country123'
  const login =(userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  /*
useEffect(()=>{
  !access && navigate('/')

},[access])
*/

  return (
    <div className="App" style={{ padding: '50px' }}>
 <Routes> 
 <Route path="/" element={<Landing login={login}/>}/>
=  <Route path='/home' element={<Home/>}/>
  <Route path="*" element={<Navigate to='/'/>}/>
 <Route path="/detail/:id" element={<LocalCountry/>}/>
<Route path="/prueba" element={<CardsContainer/>}/>
<Route path="/form" element={<ActivitiesCreate/>}/>
<Route path="/img" element={<Img/>}/>

 </Routes>   
  </div>
  );
}

export default App;
