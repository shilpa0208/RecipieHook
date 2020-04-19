const recipeService= require('../services/RecipeService')


class RecipeController {
    getRecipes = (ctx, next) => {
        try {
            ctx.body = recipeService.getRecipes()
        } catch (error) {
            ctx.throw(500, `Failed to fetch all recipes with error: ${JSON.stringify(error)}`)
        }
    }
}

module.exports = new RecipeController()