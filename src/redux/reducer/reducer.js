import { GET_COUNTRIES, GET_COUNTRY_SUCCESS, FILTER,ORDER,
ORDER_POPULATION, FILTER_ACTIVITIES, SEARCH, POST_ACTIVITIES,GET_COUNTRIES_DOS, GET_ACTIVITY } from "../actions/actions"

const initialState ={
    countries: [],
    allCountries:[],
    allActivities:[],
    activity: [],
    activities:[]

}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
        return {...state, 

            countries: action.payload,
        allCountries: action.payload,
        allActivities: action.payload

    };

    case GET_ACTIVITY:
        return {
            ...state,
            activity: action.payload
        }

    case SEARCH:
        return{
            ...state,
            countries: action.payload   
        }

    case GET_COUNTRY_SUCCESS:
        return{
            ...state,
            countries: action.payload,
        }


        case FILTER:
    

             const allCountryFiltered = action.payload=== "allCountries" ? state.allCountries : state.allCountries.filter(countries => countries.continent === action.payload)

             return {
                ...state,
           countries: allCountryFiltered
            } 

            case FILTER_ACTIVITIES : 

            const allActivities = state.allActivities;
            const activityFilter = action.payload === 'All' ? allActivities.filter(e => e.Activities.length > 0) :
                allActivities.filter(c => c.Activities.find((element) => element.name.toLowerCase() === action.payload))
            return {
                ...state,
                countries: activityFilter
            }

            case ORDER: 

            const OrderAbc = action.payload === 'Ascendente' 
            ?   state.allCountries.sort(function (a, b) {
                if (a.name > b.name) {return 1;}
                if (b.name > a.name) {return -1}
                return 0;
            }) :
            state.allCountries.sort(function (a, b) {
                if (a.name > b.name) {return -1;}
                if (b.name > a.name) {return 1;}
                return 0;
            })
            return{
                ...state,
              countries:  OrderAbc
            }

    

 
case ORDER_POPULATION:
    const statusFilter = action.payload === 'Ascendente' ? state.allCountries.sort((a,b)=>a.population - b.population ) : state.allCountries.sort((a,b)=>b.population - a.population )

            return {...state,
            
                countries: statusFilter       

     }   


     case GET_COUNTRIES_DOS:

     return{
         ...state,
        activities: action.payload
     }

     case POST_ACTIVITIES:
        return{
            ...state,
        }


        default:
            return{...state};
    }
}







export default rootReducer


/*
const statusFilter = action.payload === 'Ascendente' ? state.allCountries.sort((a,b)=>a.population - b.population ) : state.allCountries.sort((a,b)=>b.population - a.population )

            return {...state,
            
                countries: statusFilter       

     }          */ 



     /**
      *       case ORDER: 

    let OrderAbc = action.payload === 'Ascendente' ?
    state.allCountries.sort(function(a,b){
        if(a.name > b.name){
            return 1
        }
        if(b.name > a.name) {
            return -1
        }
        return 0;
    }) :
    state.allCountries.sort(function(a,b){
        if(a.name > b.name) {
            return -1
        }
        if(b.name > a.name){
            return 1;
        }
        return 0
    })
    
    
    return {
        ...state,
        countries:OrderAbc
    }
 
/*/