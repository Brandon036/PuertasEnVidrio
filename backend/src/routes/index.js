const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ipuertasenvidrioR = require("./ipuertasenvidrioR")

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/ipuertasenvidrio', ipuertasenvidrioR);
//router.use('/activity', activities);

module.exports = router;