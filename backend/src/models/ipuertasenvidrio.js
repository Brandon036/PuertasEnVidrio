const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('ipuertasenvidrio', {
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
    type: DataTypes.JSONB,
    allowNull: true, 
   
  },
   description:{
      type:DataTypes.STRING,   
  },

  },
  
  {timestamps:false});
  
};