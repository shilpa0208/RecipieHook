const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    overview: String,
    description: String,
    image: Buffer,
})

const Recipe = mongoose.model('recipes', RecipeSchema)
module.exports =  Recipe