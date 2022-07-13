const express = require("express")
const router = express.Router()
const dreamRoutes = require("./dreams")

router.use("/dream", dreamRoutes)

module.exports = router
