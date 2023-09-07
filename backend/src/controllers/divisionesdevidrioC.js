const { divisionesenvidrio } = require("../db");




const createIDivisionesDeVidrioC = async ( name,image,description  )=> {
 const newImage = await divisionesenvidrio.create ({
       name,image, description 
 })
 return newImage
}

const getIDivisionesDeVidrio = async ()=> { 
  
    const allIpuertasEnVidrio = await divisionesenvidrio.findAll()
   
return allIpuertasEnVidrio;
}

module.exports = {
    getIDivisionesDeVidrio,
    createIDivisionesDeVidrioC 
}