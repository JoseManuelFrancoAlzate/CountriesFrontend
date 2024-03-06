import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY_SUCCESS= "GET_COUNTRY_SUCCES"
export const FILTER = "FILTER"
export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES'
export const ORDER = "ORDER"
export const ORDER_POPULATION = "ORDER_POPULATION"
export const SEARCH = 'SEARCH'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const POST_ACTIVITIES = 'POST_ACTIVITIES'
export const GET_COUNTRIES_DOS = "GET_COUNTRIES_DOS"
export const GET_OCCUPATIONS = 'GET_OCCUPATIONS'


export const getCountries = ()=>{
    return async function(dispatch){
        try{
            const countriesData = await axios.get(
                "/countries"
                )
            const countries = countriesData.data
            dispatch({type:GET_COUNTRIES, payload: countries})
        }catch(error){
console.log(error)
        }
    
    }
    }



    export const getCountriesDos = ()=>{
        return async function(dispatch){
            try{
                const countriesData = await axios.get(
                    "/countries"
                    )
                const countries = countriesData.data
                dispatch({type:GET_COUNTRIES_DOS, payload: countries})
            } catch (error){
        console.log(error)
        
            }

        }
        }
    
    


export function postActivities (payload){
    return async function(){
        try{
const response = await axios.post('/activities', payload)
alert('ACTIVITY CREATED!')      
return response;
        }catch(error){
alert('ACTIVITY NOT CREATED')      
        }
    }
}



    
    
export const searchCountries =  (name)=>{
    return async function (dispatch) {
      try{
        var api = await axios.get(`/countries?name=${name}`)
        return dispatch({
            type: SEARCH,
            payload: api.data
        } )   
      } catch(error){
        console.log(error)
      }
    }
}


export const filterCards = (continent)=>{
    return{
        type: FILTER,
        payload: continent
    }
}


export const filterActivities = (activity)=>{
return{
    type: FILTER_ACTIVITIES,
    payload: activity
}
}

export const orderCards = (abc)=>{
return {type: ORDER,
payload: abc
}

}

export const orderCards_population = (population)=>{
    return {type: ORDER_POPULATION,
    payload: population
    }
    }



export const getCountrySuccess = (country)=>{
return{
    type: GET_COUNTRY_SUCCESS,
    payload: country
}
}






export const getCountry=(name)=>{
return (dispatch)=>{
    try{
        axios.get(`/countries/${name}`)
        .then(response=>{
            dispatch(getCountrySuccess([response.data]))
        })
    } catch (error){
        console.log(error)

    }
   

}
}





export function getActivity() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/activities`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}









export default getCountries