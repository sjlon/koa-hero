const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()
app.use(bodyParser())

app.use(async ctx => {
    ctx.body = '你好世界'
})


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log(`server runing at http://127.0.0.1:3000`)
})
