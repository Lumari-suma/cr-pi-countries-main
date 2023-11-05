const axios = require('axios') // Librería 'axios', que se utiliza para realizar solicitudes HTTP.
const server = require("./src/server");//servidor Express.
const { conn } = require('./src/db.js');//la conexión a la base de datos 
const {Country} = require('./src/db');

const PORT = 3001;

//'force: false' indica que no se eliminarán y recrearán las tablas en la base de datos si ya existen.
conn.sync({ force: false}).then(() => {
//Realizamos una solicitud HTTP GET a 'http://localhost:5000/countries' utilizando axios.
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  const {data} = await axios.get('http://localhost:5000/countries');

  // Iteramos sobre los datos recibidos y realizamos operaciones en la base de datos.
  data.map(async({cca3,name,flags,continents,capital,subregion,area,population}) =>{

    // Buscamos un registro en la tabla 'Country' o lo creamos si no existe.
    await Country.findOrCreate({
      where: {
       ID: cca3
      },
      defaults:{
        name: name.common,
        flags: flags.png,
        continents:continents?continents[0]:'undefined',
        capital: capital?capital[0]:'undefined',
        subregion:subregion,
        area: area,
        population: population
      }
    
    })
  })
  
})
}).catch(error => console.error(error))
