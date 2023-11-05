/* eslint-disable react/prop-types */
import Activity from '../Activity/Activity'
import style from './activityRender.module.css'

const ActivityRender = ({activities, onDelete}) => {
   return (
    <div className={style.activityRenderContainer}>
      {activities.map((activity) => {
            return(
               <Activity
                  key={activity.ID}
                  id={activity.ID}
                  picture={activity.picture}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                  onDelete={() => onDelete(activity.ID)} // Llama a la función onDelete al hacer clic en el botón
               />
            )
         }
         )
      } 
    </div>);
}

export default ActivityRender;