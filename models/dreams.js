const DreamController = require("../controllers/dreams")
// const mongoose = require("../db/connection")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Dream = new Schema({
    dream: String,
    date: String
})

module.exports = mongoose.model("Dreams", Dream)