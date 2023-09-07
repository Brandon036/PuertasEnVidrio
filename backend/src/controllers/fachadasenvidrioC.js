const { fachadasenvidrio } = require("../db");


const getIFachadasEnVidrio = async ()=> { 
  
    const allIpuertasEnVidrio = await fachadasenvidrio.findAll()
   
return allIpuertasEnVidrio;
}

const createIFachadasEnVidrioC = async ( name,image,description  )=> {
 const newImage = await fachadasenvidrio.create ({
       name,image, description 
 })
 return newImage
}



module.exports = {
    getIFachadasEnVidrio,
    createIFachadasEnVidrioC
}