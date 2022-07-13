const DreamController = require("../controllers/dreams")
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Dream = new Schema({
    dream: String,
    date: Date
})

module.exports = mongoose.model("dream", "Dream")