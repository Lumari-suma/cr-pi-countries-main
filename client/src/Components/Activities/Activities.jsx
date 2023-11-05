/* eslint-disable react-hooks/exhaustive-deps */
import ActivityRender from '../ActivityRender/ActivityRender'
import style from './activities.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getActivities, deleteActivity} from '../../Redux/Action/action'


const Activities = () => {
    const dispatch = useDispatch()
    const allActivities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    
    }, []) 

    const handleDeleteActivity = (id) => {
        // Dispatch para eliminar la actividad.
        dispatch(deleteActivity(id));
      };
    return (
        <div className={style.activitiesContainer}>
            <ActivityRender activities={allActivities} onDelete={handleDeleteActivity} />
        </div>
    )
};

export default Activities;