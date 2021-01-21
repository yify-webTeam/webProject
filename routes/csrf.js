const Router = require('@koa/router');
const router = new Router();

// const accountController = require('../controller/account');

// page
router
    .get('/page/index', async (ctx) => {
        let { referer } = ctx.request.headers;
        await ctx.render('csrf', {
            referer
        })
    })


// ****************page和api分隔线*********************
// api
// router
//     .get('/api/login', accountController.login)
//     .get('/api/register', accountController.register)

module.exports = router;