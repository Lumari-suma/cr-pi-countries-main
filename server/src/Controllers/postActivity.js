const { Activity, Country } = require('../db')

// Defino la función asincrónica 'postActivity' que maneja la creación de actividades.
const postActivity = async (req, res) => {
  try {
    const { name, picture, difficulty, duration, season, countries } = req.body;

// Buscamos una actividad con el mismo nombre en la base de datos o la creamos si no existe.
    const [activity] = await Activity.findOrCreate({
      where: { name }, 
      defaults: {
        picture,
        difficulty,
        duration,
        season,
      },
    });

    // Si se proporcionan países relacionados a la actividad, los establecemos.  
     if (countries && countries.length > 0) {
      await activity.setCountries(countries);
    }

  // Buscamos la actividad recién creada con la relación a los países en la base de datos.
    const activityWithCountries = await Activity.findOne({
      where: { ID: activity.ID },
      include: { model: Country },
    });

    res.status(200).json(activityWithCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
module.exports = {
  postActivity,
}
