const { Activity } = require('../db')

//Defino la función 'deleteActivity' que maneja la eliminación de una actividad.
const deleteActivity = async (req,res) => {
        try{
            // Extraemos el ID de la actividad por params
            const {idActivity} = req.params

            //Buscamo la actividad por ID...
            const activityToDelete = await Activity.findOne({where: {ID: parseInt(idActivity)}})
            if (!activityToDelete) {
                res.status(404).json({ error: 'Actividad no encontrada' })
            }
            else {
                await Activity.destroy({where: {ID: parseInt(idActivity)}}) // where = donde
                res.status(200).json({message: 'La actividad se ha eliminado correctamente'})
            }
        }
        catch (error){
            res.status(500).json({message: error.message})
            console.log(error.message)
        }
            
}

module.exports = {
    deleteActivity
}
