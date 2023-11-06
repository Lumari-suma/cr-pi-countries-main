/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
 import style from './createActivity.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getCountries } from '../../Redux/Action/action'
import  {validate}  from './validate'

const CreateActivity = () => {

 const allCountries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  // Efecto que se ejecuta al cargar el componente para obtener la lista de países.
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])


// Estado para almacenar los datos del formulario.
  const [state, setState] = useState({
    name: '',
    picture: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

// Estado para almacenar las actividades locales.
  const [activities, setActivities] = useState([]); // Estado local de actividades

  const [error, setError] = useState({
    name: 'Nombre requerido',
    picture: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: 'Selecciona al menos un país'
  })

  useEffect(() => {
    disableFunction()
  }, [error])

  //Eliminar selección de países
  const handleDelete = (event) => {
    if (state.countries.length <= 1) setError({ ...error, countries: 'Selecciona al menos un País' })
    setState({
      ...state,
      [event.target.name]: state.countries.filter(c => c !== event.target.id)
    })
  }

  //Manejador de cambios de los países seleccionados
  const handleChange = (event) => {
    if (event.target.name === 'countries') {
      if (!state.countries.includes(event.target.value)) {
        setState({
          ...state,
          [event.target.name]: [...state[event.target.name], event.target.value],
        });
      }
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  
    const updatedErrors = validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  
    
    setError({
      ...error,
      ...updatedErrors,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newActivity = dispatch(postActivity(state));
      if (newActivity) {
        setActivities([...activities, newActivity]);
        resetForm(); // Limpia el formulario
      }
    } catch (error) {
      console.error('Hubo un error al crear la actividad:', error);
    }
  };
  
  const resetForm = () => {
    setState({
      name: '',
      picture: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    });
    setError({
      name: 'Nombre requerido',
      picture: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: 'Selecciona al menos un país'
    });
  };
   
   /*  for (let property in state) {
          document.getElementById(property).value = "";
        }*/
  
  const [handlerDisable, setHandlerDisable] = useState(true)

  const disableFunction = () => {
    const hasErrors = Object.values(error).some((err) => err.length !== 0);
    const hasEmptyFields = Object.values(state).some((value) => value === '');
  
    // Deshabilitar el botón si hay errores o campos vacíos.
    setHandlerDisable(hasErrors || hasEmptyFields);
  };

 /*  const disableFunction = () => {
    let disabledAux = false; 

    for (let err in error) {
      if (err.length) disabledAux = true
    }
    disabledAux = Object.values(error).some((err) => err.length !== 0)
    console.log(error)
    setHandlerDisable(disabledAux)
  }  */

  return (
    
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.form_title}>Crea tu nueva actividad Turistica</h2>
        <div >
          <label className={style.form_label}>Actividad: </label>
            <input className={style.form_input}
              id='name' 
              name='name' 
              type="text" 
              onChange={handleChange} 
              value={state.name} 
              placeholder="Nombre de la actividad" />
          <label className={style.error}>{error.name}</label> 
        </div>

        <div >
          <label className={style.form_label}>Imagen: </label>
            <input className={style.form_input}
              id='picture'  
              name='picture' 
              type="text" 
              onChange={handleChange} 
              value={state.picture} 
              placeholder='ingresa URL de la imgen'/>
          <label className={style.error}>{error.picture}</label>
        </div>

        <div>
          <label className={style.form_label}>Dificultad: </label>
           <select className={style.form_input} 
              id='difficulty'
              name='difficulty' 
              onChange={handleChange} >
                <option value=''>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
           </select>
        </div>

        <div>
          <label className={style.form_label}>Duración de la Actividad: </label>
           <input className={style.form_input} 
              id='duration'  
              name='duration' 
              type="text" 
              onChange={handleChange} 
              value={state.duration} 
              placeholder='Max. 5 horas ' />
          <label className={style.error}>{error.duration}</label>
        </div>

        <div>
          <label className={style.form_label}>Temporada:</label>
           <select className={style.form_input} 
             name='season'
             onChange={handleChange}>
               <option value=''>-Selecciona temporada-</option>
               <option value='Summer'>Verano</option>
               <option value='Fall'>Otoño</option>
               <option value='Winter'>Invierno</option>
               <option value='Spring'>Primavera</option>
          </select>
          <label className={style.error}>{error.season}</label>
        </div>
        <div>
          <label className={style.form_label}>Paises: </label>
           <select className={style.form_input} 
            name='countries'
            onChange={handleChange}>
            <option>- Selecciona un país -</option>
            {allCountries?.map((c) => <option value={c.ID} key={c.ID}>{c.name}</option>)}
           </select>
          <div className={style.form_group}>
              {
                state.countries?.map((c, index) => (
                  <div key={index}>
                    <label>{c}</label> 
                    <button className={style.buttonX} 
                    name='countries' 
                    id={c} 
                    type='button' 
                    onClick={handleDelete}
                    >x</button>
                  </div>
                ))
              }

          </div>
            <label className={style.error}>{error.countries}</label> 
        </div>
        
        {handlerDisable ? (
          <button className={style.buttonCrear}type="submit" disabled>Crear</button>
        ) : (
          <button className={style.buttonCrear}type="submit">Crear</button>
        )}
      </form>
    </div>
  )
};

export default CreateActivity;
