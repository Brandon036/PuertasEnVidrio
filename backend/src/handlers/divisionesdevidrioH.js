const {getIDivisionesDeVidrio, createIDivisionesDeVidrioC } = require("../controllers/divisionesdevidrioC")


const iDivisionesDevidrioH = async ( req, res) => {
   // const {id} = req.params
    try {
        const imagenpuertasenvidrio = await getIDivisionesDeVidrio();
        res.status(200).json(imagenpuertasenvidrio)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const  postIDivisionesDeVidrioH = async (req, res) => {// req (la solicitud HTTP) y res (la respuesta HTTP)
    const { name, image,description,  } = req.body;
    try {
      const createGame = await  createIDivisionesDeVidrioC(
        name,
       image, 
        description,
      );
      res.status(200).json(createGame);

  
    } catch (error) {
      res.status(500).json({ error: "Error al crear la imagen" });
    }
  
  };
module.exports = {iDivisionesDevidrioH,  postIDivisionesDeVidrioH}