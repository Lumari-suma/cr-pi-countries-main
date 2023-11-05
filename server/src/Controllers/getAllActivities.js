const { Country, Activity } = require('../db'); 

// Defino la funcion "getAllActivities" para traer todas las acrtividades
const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ['ID','name','flags', 'continents', 'capital', 'subregion', 'area', 'population']
      }
    });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
    getAllActivities
};
