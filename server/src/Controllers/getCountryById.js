const { Country, Activity } = require('../db');

// Defino la función asincrónica 'getCountryById' que maneja la búsqueda de un país por su ID.
const getCountryById = async (req, res) => {
    try {
        // Se extrae el ID del país por params
        const { idPais } = req.params;

        // Se consulta a la DB para buscar un país con el ID especificado.
        const countryId = await Country.findOne({
            where: {
                ID: idPais
            },
            include: {
                model: Activity,
                attributes: ['ID', 'name', 'difficulty', 'duration', 'season'],
                through: { attributes: [] }
            }
        });

        if (!countryId) {
            return res.status(404).json({ error: 'Error 404: Not found' });
        }

        return res.json(countryId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCountryById,
};

