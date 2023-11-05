import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/Action/action";
import style from './searchBar.module.css'
import lupa from '../../assets/icon-lupa.png'

const SearchBar = () => {
   const [input, setInput] = useState('')
   const dispatch = useDispatch()
   
   const handleChange = (event) =>{
       setInput (event.target.value) 
   }
   const handlerClick = () => {
    dispatch(getCountriesByName(input))
    }
   return (
      <div className={style.searchBar}>
         <input onChange = {handleChange}  type='search' placeholder="Buscar un país"/>
         <button onClick={handlerClick} className={style.buttonNav}>
          <img src={lupa} width='20px'/>
         </button>
      </div>
   );
}

export default SearchBar;
