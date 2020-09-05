const RecipeModel = require('../models/recipe.model')
const recipes = require('./recipes.json')


class RecipeService {
    constructor(recipeModel = RecipeModel) {
        this.recipeModel = recipeModel
    }

    async listRecipes() {
        const response = await this.recipeModel.find({})
        console.log('Found recipes: ', JSON.stringify(response))
        return !response.length ? recipes : response
    }
}

module.exports = new RecipeService()