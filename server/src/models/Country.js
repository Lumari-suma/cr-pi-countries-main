const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
      },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.STRING
    },
    population:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { freezeTableName: true, timestamps: false 
  });
};


