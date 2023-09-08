const { divisionesenvidrio } = require("../db");




const createIDivisionesDeVidrioC = async ( name,image,description  )=> {
 const newDivisionesDeVidrio = await divisionesenvidrio.create ({
       name, image, description 
 })
 return newDivisionesDeVidrio
}

const getIDivisionesDeVidrio = async ()=> { 
  
    const allDivisionesDeVidrio = await divisionesenvidrio.findAll()
   
return allDivisionesDeVidrio;
}

module.exports = {
    getIDivisionesDeVidrio,
    createIDivisionesDeVidrioC 
}