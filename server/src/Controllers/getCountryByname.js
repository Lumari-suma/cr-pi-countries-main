const { Country, Activity } = require('../db');
const { Op } = require('sequelize');//'Op' de Sequelize para realizar búsquedas flexibles.

// Definino la función asincrónica 'getCountryByName' que maneja la búsqueda de países por nombre.
const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);

    // Consulta a la DB para buscar países cuyos nombres contengan la cadena especificada 
    const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      // Incluimos las actividades relacionadas a los países.
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });

    // Respondemos con un código de status 200 y enviamos los países encontrados en formato JSON.
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

module.exports = {
  getCountryByName,
};
