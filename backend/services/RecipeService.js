const recipes = require('./recipes')


class RecipeService {
    getRecipes() {
        return recipes ? recipes : []
    }
}

module.exports = new RecipeService()
