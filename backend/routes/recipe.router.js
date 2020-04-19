const Router = require('koa-router')
const recipeController = require('../controllers/recipe.controller')


const router = new Router({
    prefix: '/api/v1/recipes',
})

router.get('/', recipeController.getRecipies)


module.exports = router