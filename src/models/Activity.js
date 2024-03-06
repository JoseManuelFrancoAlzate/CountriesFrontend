const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Activity", {
        id:{
            type: DataTypes.INTEGER,
        primaryKey: true,
                autoIncrement: true,
           },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty:{
        type: DataTypes.INTEGER,
      },
      duration:{
        type: DataTypes.TIME
      },
      season:{
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring',)
      }
    },
    {timestamps:false});
  };