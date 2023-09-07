const { Router } = require('express');
const router = Router();

const {iDivisionesDevidrioH, postIDivisionesDeVidrioH} = require("../handlers/divisionesdevidrioH")


router.get("/", iDivisionesDevidrioH)

router.post("/", postIDivisionesDeVidrioH)


module.exports = router