/* eslint-disable react/prop-types */
//import React from "react";
import { Link } from "react-router-dom";
import style from './country.module.css'

const Country = ({ flags, name, continents, id, population }) => { 
    return (
        <div className={style.countryContainer}>
            <Link to={`/countries/${id}`} className={style.link}>
               <div className={style.countryName}> <h2>{name}</h2></div>
                <img src={flags} alt="Image no available" className={style.countryFlags}/>
                <div className={style.countryName}> <h2>{continents}</h2></div>
                <div className={style.countryName}><h3>Población: {population}</h3></div>          
            </Link>
        </div>

    );
};

export default Country;
