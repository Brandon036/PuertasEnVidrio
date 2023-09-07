const { Router } = require('express');
const router = Router();

const {iFachadasenvidrioH, postIFachadasEnVidrioH} = require("../handlers/fachadasenvidrioH")


router.get("/", iFachadasenvidrioH)

router.post("/", postIFachadasEnVidrioH)


module.exports = router
