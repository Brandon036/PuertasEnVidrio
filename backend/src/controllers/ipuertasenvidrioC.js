const { ipuertasenvidrio } = require("../db");


const getIpuertasEnVidrio = async ()=> { 
    console.log(ipuertasenvidrio)
    const allIpuertasEnVidrio = await ipuertasenvidrio.findAll()
   
return allIpuertasEnVidrio;
}

const createIPuertasEnVidrioC = async ( name,image,description  )=> {
 const newImage = await ipuertasenvidrio.create ({
       name,image, description 
 })
 return newImage
}



module.exports = {
    getIpuertasEnVidrio,
    createIPuertasEnVidrioC
}