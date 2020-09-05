const recipeService= require('../services/recipe.service')


class RecipeController {
    getRecipes = async (ctx, next) => {
        try {
            ctx.body = await recipeService.listRecipes()
        } catch (error) {
            ctx.throw(500, `Failed to fetch all recipes with error: ${error.message}`)
        }
    }
}

module.exports = new RecipeController()