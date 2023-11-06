/* eslint-disable no-case-declarations */
/* eslint-disable no-useless-escape */
export const validate = (stateAux, name) => {
  const errors = {
    name: '',     // Inicializa los errores en blanco
    picture: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: '',
  };

  const REGEX_SYMBOL = /^[a-zA-ZñÑ\s]+$/;  // Expresión regular para letras y espacios
  const REGEX_URL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*/;  // Expresión regular para URL

  if (name === 'name') {
    if (!stateAux.name.length) {
      errors.name = 'Nombre requerido';
    } else if (!REGEX_SYMBOL.test(stateAux.name)) {
      errors.name = 'No se permiten símbolos ni números';
    } else if (stateAux.name.length > 30) {
      errors.name = 'Nombre de actividad demasiado largo';
    }
  }

  if (name === 'duration') {
    const durationValue = parseFloat(stateAux.duration);
    if (isNaN(durationValue) || !Number.isInteger(durationValue) || durationValue < 0) {
      errors.duration = 'Entrada no válida. Debe ser un número entero positivo';
    } else if (durationValue > 5) {
      errors.duration = 'Duración máxima de la actividad: 5 horas';
    }
  }

  if (name === 'picture') {
    if (!REGEX_URL.test(stateAux.picture)) {
      errors.picture = 'Se permite formato de imagen jpg, png y jpng';
    }
  }

  if (name === 'season') {
    if (!stateAux.season) {
      errors.season = 'Por favor, seleccione una temporada.';
    }
  }

  if (name === 'countries') {
    if (stateAux.countries.length === 0) {
      errors.countries = 'Elige al menos un país';
    }
  }

  return errors;
};




/*  export const validate = (stateAux, name,) => {
  const errors = {
    name: '',
    picture: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: '',
  };

  const REGEX_SYMBOL = /^[a-zA-ZñÑ\s]+$/;
  const REGEX_URL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  switch (name) {
    case 'name':
        if (!REGEX_SYMBOL.test(stateAux.name)) {
          errors.name = 'No se permiten símbolos ni numeros';
        } else if (!stateAux.name.length) {
          errors.name = 'Nombre requerido';
        } else if (stateAux.name.length > 30) {
          errors.name = 'Nombre de actividad demasiado largo';
        }
      break;

    case 'duration':
      const durationValue = parseFloat(stateAux.duration);

      if (
        isNaN(durationValue) ||
        !Number.isInteger(durationValue) ||
        durationValue < 0
      ) {
        errors.duration = 'Entrada no válida. Debe ser un número entero positivo';
      } else if (durationValue > 5) {
        errors.duration = 'Duración máxima de la actividad: 5 horas';
      }
      break;

    case 'picture':
      if (!REGEX_URL.test(stateAux.picture)) {
        errors.picture = 'Se permite formato de imagen jpg, png y jpng';
      }
      break;

    case 'season':
      if (!stateAux.season) {
        errors.season = 'Por favor, seleccione una temporada.';
      }
      break;

    case 'countries':
      if (stateAux.countries.length === 0) {
        errors.countries = 'Elige al menos un país';
      }
      break;

    default:
      break;
  }

  return errors;
};  */