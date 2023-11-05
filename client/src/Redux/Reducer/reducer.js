/* eslint-disable no-undef */
import {
    GET_COUNTRIES,
    GET_COUNTRY_DETAIL,
    GET_COUNTRIES_NAME,
    ORD_ALPHA_ASC,
    ORD_ALPHA_DESC,
    ORD_POPULATION_ASC,
    ORD_POPULATION_DESC,
    ORD_BY_CONTINENT, 
    GET_ACTIVITIES,
    DELETE_ACTIVITY,
    POST_ACTIVITY,
    FILTER_BY_ACT

} from '../Action/action-types'

import { ordAlphabetic, ordPopulation } from '../../Components/Order/Orders'

const initialState = {
    countries: [],
    countryDetail: [],
    activities: [],
    allCountries: [],
    continents: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        }
        case GET_COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload
            }
        }
        case GET_COUNTRIES_NAME: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case ORD_ALPHA_ASC: {
            return {
                ...state,
                countries: state.countries.slice().sort(ordAlphabetic)
            }
        }
        case ORD_ALPHA_DESC: {
            return {
                ...state,
                countries: state.countries.slice().sort((a, b) => ordAlphabetic(a, b, true))
            }
        }
        case ORD_POPULATION_ASC: {
            return {
                ...state,
                countries: state.countries.slice().sort(ordPopulation)
            }
        }
        case ORD_POPULATION_DESC: {
            return {
                ...state,
                countries: state.countries.slice().sort(ordPopulation).reverse()
            }
        }
        case ORD_BY_CONTINENT: { 
            return {
                ...state,
                countries: (action.payload === 'All Continents') ? state.allCountries :
                    state.allCountries.filter((c) => c.continents === action.payload)
            }
        }
        case GET_ACTIVITIES: {
            return{
                ...state,
                activities: action.payload
            }
        }

        case FILTER_BY_ACT: {
            if(action.payload === 'null') return {...state, countries: state.allCountries} 
            return {
                ...state,
                countries: state.allCountries.filter((country) => {
                    return country.Activities.some((activity) => activity.ID === parseInt(action.payload))
                })
            }
        }
        case DELETE_ACTIVITY: {
            return {
                ...state,
                activities: state.activities.filter((activity) => activity.id !== activityToDelete)//action.payload activityToDelete
            }
        }
        case POST_ACTIVITY: {
            return {
                ...state,
                activities: state.activities.push(newActivity)
            }
        }

        default:
            return state;
    }
};

export default rootReducer;
