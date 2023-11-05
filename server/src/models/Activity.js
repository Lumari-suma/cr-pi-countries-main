const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type:DataTypes.TEXT,
            allowNull:false
        },
        difficulty: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.SMALLINT,
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Winter', 'Fall', 'Spring'),
            allowNull: false
        }
      }, { freezeTableName: true, timestamps: false 
    });
};
