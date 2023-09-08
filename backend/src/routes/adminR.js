const { Router } = require('express');
const router = Router();

const { getAdminH, postAdminH, getAdminNameH} = require("../handlers/adminH")

router.get("/", getAdminH)
router.post("/", postAdminH)
router.get('/name', getAdminNameH)



module.exports = router