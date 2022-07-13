const express = require("express")
const router = express.Router()
const dreamRoutes = require("./dream")

router.use("/dream", dreamRoutes)

module.exports = router
