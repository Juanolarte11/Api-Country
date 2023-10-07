const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.ENUM(['Africa',	  'Asia',	  'Europe',	 'North America',	  'South America'	,  'Antarctica',	  'Oceania']), 
      allowNull:false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subregion: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    years_of_life: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      }
    },
    languages: {
      type: DataTypes.JSON,
    },    
    population: {
      type: DataTypes.STRING,
    },
  },{
    timestamps: false
  });
};
