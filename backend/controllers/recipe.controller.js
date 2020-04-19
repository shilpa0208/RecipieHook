const recipeService= require('../services/RecipeService')


class RecipeController {
    getRecipies = (ctx, next) => {
        try {
            ctx.body = recipeService.getRecipies()
        } catch (error) {
            ctx.throw(500, `Failed to fetch all recipies with error: ${JSON.stringify(error)}`)
        }
    }
}

module.exports = new RecipeController()