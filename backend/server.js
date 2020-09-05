const  Koa = require('koa')
const KoaLogger = require('koa-logger')
const Router = require('koa-router')
const send = require('koa-send')


const app = new Koa()
const port = process.env.port || 3030

app.use(KoaLogger())

const router = new Router()

// Serve frontend files
router.get('/static/:folder/:path', 
    ctx => send(ctx, `_build_frontend/static/${ctx.params.folder}/${ctx.params.path}`))
router.get('/:path', ctx => send(ctx, `_build_frontend/${ctx.params.path}`))
router.get('/images/:path', ctx => send(ctx, `_build_frontend/images/${ctx.params.path}`))
router.get('/', ctx => send(ctx, '_build_frontend/index.html'))
app.use(router.routes())


// Setup routes
const recipeRoute = require('./routes/recipe.router')
app.use(recipeRoute.routes())


app.listen(port, () => { console.log(`backend listening on port ${port}!`)})
