const express = require("express")
const mongoose = require("mongoose")
const app = express()
const routes = require("./routes")
const cors = require("cors")
const {
    PORT = 4040,
    DB_URI = "mongodb://localhost:27017/dreams"
} = process.env

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors({origin: "*"}))

app.use(routes)

app.listen(PORT, () => console.log('App is listening'))

module.exports = mongoose;