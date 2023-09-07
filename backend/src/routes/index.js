const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ipuertasenvidrioR = require("./ipuertasenvidrioR")
const fachadasenvidrioR = require("./fachadasenvidrioR")
const divisionesdevidrioR = require("./divisionesdevidrioR")

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/fachadasenvidrio", fachadasenvidrioR)
router.use('/ipuertasenvidrio', ipuertasenvidrioR);
router.use("/divisionesdevidrio", divisionesdevidrioR)
//router.use('/activity', activities);

module.exports = router;