import style from './home.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {
  getCountries,
  orderByContinent,
  ordPopulationDesc,
  ordPopulationAsc,
  ordAlphabeticDesc,
  ordAlphabeticAsc,
  getActivities,
  filterByActivity
} from '../../Redux/Action/action'
import Countries from '../../Components/CountryRender/CountryRender'

const Home = () => {

  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);

  const handlerChange = (event) => {
    
    switch (event.target.name) {
      case 'continents':
        dispatch(orderByContinent(event.target.value))
        break;
      case 'activities':
        dispatch(filterByActivity(event.target.value))
        break;

      default:
        break;
    }
  }

  const handlerOrder = (event) => {
    
    switch (event.target.value) {
      case 'orderAcendent':
        dispatch(ordAlphabeticAsc())
        break;
      case 'orderDesendent':
        dispatch(ordAlphabeticDesc())
        break;
      case 'majorMinor':
        dispatch(ordPopulationAsc())
        break;
      case 'minorMajor':
        dispatch(ordPopulationDesc())
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  
  }, [dispatch])

  return (
    <div className={style.home}>
      <div className={style.homeFilters}>
        <select name='continents' onChange={handlerChange}>
          <option value="All Continents"> Todos los continentes </option>
          <option value="Africa"> África </option>
          <option value="South America"> America del Sur </option>
          <option value="Antarctica"> Antárctica </option>
          <option value="Asia"> Asia </option>
          <option value="Europe"> Europa </option>
          <option value="North America"> Norte America </option>
          <option value="Oceania"> Oceania </option>
        </select>

        <select name='Order' onChange={handlerOrder}>
          <optgroup label='Orden alfabetico'>
            <option value='orderAcendent'>Ordenar de la A-Z</option>
            <option value='orderDesendent'>Ordenar de la Z-A </option>
          </optgroup>
          <optgroup label='Población'>
            <option value='majorMinor'>Menor - Mayor</option>
            <option value='minorMajor'>Mayor - Menor</option>
          </optgroup>
        </select>

        <select onChange={handlerChange} name='activities'>
          <option value='null'>Seleccionar actividad</option>
          {allActivities?.map((act) => <option value={act.ID} key={act.ID}>{act.name}</option>)}
        </select>
        
      </div>
      <div className={style.countriesContainer}>
        <Countries />
      </div>
    </div>
  );
}

export default Home;

