const Router = require('@koa/router');
const router = new Router();

const accountController = require('../controller/account');

// page
router
    .get('/page/login', async (ctx) => {
        await ctx.render('login', {
            title: 'jd'
        })
    })
    .get('/page/register', async (ctx) => {
        await ctx.render('register');
    })

// ****************page和api分隔线*********************
// api
router
    .get('/api/login', accountController.login)
    .get('/api/register', accountController.register)

module.exports = router;



