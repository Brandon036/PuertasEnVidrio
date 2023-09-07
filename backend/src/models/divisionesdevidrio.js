const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('divisionesenvidrio', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        unique:true,   
    },
   
    image:{
        type:DataTypes.TEXT,       
    },
     description:{
        type:DataTypes.STRING,   
    },

  });
};