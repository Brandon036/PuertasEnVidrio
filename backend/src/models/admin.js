const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('admin', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },  
    name:{
        type:DataTypes.STRING,
        unique:true,   
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        unique:true,   
    },
  },
  {timestamps:false});
};