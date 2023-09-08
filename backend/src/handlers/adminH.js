const {adminH, createAdmin, findAdminName } = require("../controllers/adminC")

const getAdminNameH = async (req, res) => {
  const { name, password } = req.query
  try {
    const isAuthenticated = await findAdminName(name, password);
    if (isAuthenticated) {
      res.status(200).json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false });
    }
  } catch (error) {
    res.status(401).json({ authenticated: false, error: error.message });
  }
};




const getAdminH = async ( req, res) => {
    //const {id} = req.param
    try {
        const admin = await adminH();
        res.status(200).json(admin)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const  postAdminH = async (req, res) => {// req (la solicitud HTTP) y res (la respuesta HTTP)
    const { name,email,password } = req.body;
    try {
      const createAdminO = await  createAdmin(
        name,
        email,
        password,
      );
      res.status(200).json(createAdminO);

  
    } catch (error) {
      res.status(500).json({ error: "Error al crear el admin" });
    }
  
  };
module.exports = { getAdminH,   postAdminH, getAdminNameH }