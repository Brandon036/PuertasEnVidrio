const { Router } = require('express');
const router = Router();

const {ipuertasenvidrioH, postIPuertasEnVidrioH} = require("../handlers/ipuertasenvidrioH")

router.get("/", ipuertasenvidrioH)

router.post("/", postIPuertasEnVidrioH)


module.exports = router