/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import style from './activity.module.css'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteActivity } from "../../Redux/Action/action";

const Activity = ({ id, name, picture, difficulty, duration, season }) => {
    const location = useLocation().pathname
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handlerDelete =()=>{
  
    dispatch(deleteActivity(id))
    navigate('/home')
    
}

    return(
        <div className={style.activityContainer}>
            <div><img src={picture} alt="Imagen no disponible" /></div>
            <div className={style.activityData}>
            <h3>Actividad: {name}</h3>
            <h3>Dificultad: {difficulty}</h3>
            <h3>Duración en horas: {duration}</h3>
            <h3>Mejor temporada: {season}</h3> 
            {(location === '/activities')? <button onClick={handlerDelete} className={style.activityButton}>Eliminar</button>:''}  
            </div>   
        </div>
    )
};

export default Activity;