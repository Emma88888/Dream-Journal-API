const express = require("express")
const mongoose = require("mongoose")
const app = express()
const routes = require("./routes")
const cors = require("cors")
const connection = require("./db/connection")

const {
    PORT = 4040,
    DB_URI = "mongodb://localhost:27017/dreams"
} = process.env

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors({origin: "*"}))

app.use(routes)

app.get('/test', function(req, res) {
    res.json({hello: "helllo"})
})

app.listen(PORT, () => console.log('App is listening'))

// module.exports = mongoose;