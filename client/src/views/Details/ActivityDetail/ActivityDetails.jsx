/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from './activity.details.module.css'

const activityDetail = () => {
    const [activity, setActivity] = useState({});
    const { name } = useParams()
    
    useEffect(() => {
        axios(`http://localhost:3001/${name}`).then(({ data }) => {

            if (data.name) {
                setActivity(data);
            } else {
                window.alert('Actividad no encontrada');
            }
        });
        return setActivity({});
    
    }, [ID]);

    return (
        <div className={style.activityDetails}>
            {activity?.ID ?<h2>{activity.ID}</h2>:''}
            {activity?.picture?<img src ={activity.picture} alt=""/>:''}            
            {activity?.difficulty ?<h2>{activity.difficulty}</h2>:''}
            {activity?.duration ?<h2>{activity.duration}</h2>:''}
            {activity?.name ?<h2>{name}</h2>:''}
            {activity?.season?<h2>{activity.season}</h2>:''}          
        </div>
    )    
};

export default activityDetail;


