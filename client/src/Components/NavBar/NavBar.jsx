/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation } from "react-router-dom";
import style from './navBar.module.css'
import { useDispatch } from 'react-redux';
import { getCountries } from '../../Redux/Action/action';

const NavBar = (props) => {
    const dispatch = useDispatch()

    const location = useLocation().pathname
    return (
        <div className={style.navBar}>
            <Link to='/home'>
                <button onClick={()=>dispatch(getCountries())} className={style.buttonNav}>Paises</button>
            </Link>
            <Link to = '/activities'>
                <button className={style.buttonNav}>Actividades</button>
            </Link>
            <Link to = '/form'>
                <button className={style.buttonNav}>Crea tu Experiecia</button>
            </Link>
            <Link to = '/'>
                <button className= {style.buttonNav}>Salir</button>
            </Link>
            {(location === '/home')? <SearchBar onSearch={props.onSearch}/>: ''}   
        </div>
    )
};


export default NavBar;