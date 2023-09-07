const {getIFachadasEnVidrio, createIFachadasEnVidrioC } = require("../controllers/fachadasenvidrioC")


const  postIFachadasEnVidrioH = async (req, res) => {// req (la solicitud HTTP) y res (la respuesta HTTP)
    const { name, image,description,  } = req.body;
    try {
      const createGame = await  createIFachadasEnVidrioC(
        name,
       image, 
        description,
      );
      res.status(200).json(createGame);

  
    } catch (error) {
      res.status(500).json({ error: "Error al crear la imagen" });
    }
  
  };

const iFachadasenvidrioH = async ( req, res) => {
   // const {id} = req.params
    try {
        const imagenpuertasenvidrio = await getIFachadasEnVidrio();
        res.status(200).json(imagenpuertasenvidrio)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {iFachadasenvidrioH,  postIFachadasEnVidrioH}