const recipies = require('./recipes')


class RecipeService {
    getRecipies() {
        return recipies ? recipies : []
    }
}

module.exports = new RecipeService()
