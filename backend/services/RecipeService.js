const recipes = require('./recipes')


class RecipeService {
    getRecipies() {
        return recipes ? recipes : []
    }
}

module.exports = new RecipeService()
