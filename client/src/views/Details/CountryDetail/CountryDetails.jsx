/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import style from './countryDetails.module.css'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ActivityRender from "../../../Components/ActivityRender/ActivityRender";

const CountryDetails = () => {
    const [country, setCountry] = useState({});
    const { ID } = useParams()

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${ID}`)
        
            if (data.name) {
                setCountry(data)
            }
            else {
                window.alert('País no encontrado')
            }

        }
        catch (error) {
            console.log('Ocurrio algo inesperado', error)
            window.alert('Ocurrio algo inesperado')
        }
    }

    useEffect(() => {
        getData();
        return () => {
            setCountry({});
        };
    
    }, [ID]);

    return (
        <div className={style.countryDetails}>
            <div className={style.countryInfo}>
                {country?.flags ? <img src={country.flags} alt='country' className={style.flags} /> : ''}
                <div className={style.countryData}>
                    {country?.ID ? <h2>ID: {country.ID}</h2> : ''}
                    {country?.name?.common ? <h2>País: {country.name.common}</h2> : ''}
                    {country?.continents ? <h2>Continente: {country.continents}</h2> : ''}
                    {country?.capital ? <h2>Capital: {country.capital}</h2> : ''}
                    {country?.subregion ? <h2>Subregion: {country.subregion}</h2> : ''}
                    {country?.area?<h2>Area: {country.area} Km<sup>2</sup></h2> : ''}
                    {country?.population ? <h2>Población: {country.population}</h2> : ''}
                </div>
            </div>

            {country?.Activities ? <ActivityRender activities={country.Activities} /> : ''}
        </div>
    )
};

export default CountryDetails;