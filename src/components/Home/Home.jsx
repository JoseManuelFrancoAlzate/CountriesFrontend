import axios from "axios"
import { useEffect,useState } from "react";
import {useDispatch} from "react-redux"
import styled from "./Home.module.css"
import CardsContainer from "../CardsContainer/CardsCountainer"
import {getCountries} from "../../redux/actions/actions"
import Prueba from "../Prueba/Prueba";
import { Link } from "react-router-dom";

const Home = ()=>{
  

    return (
      
<>
<center>
<div  className={styled.B}>
<Link  to={`/form`} >
<h2 className={styled.container}>Create Activity</h2>
</Link>
</div>
</center>
<Prueba/>
</>
      );
}

export default Home


/*
<Card
name= {"Jose Manuel Franco Alzate"}
email={"Jose123@gmail.com"}
phone={322922773}
/>
*/