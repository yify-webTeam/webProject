const accountDao = require('../db/dao/account');

async function login(ctx) {
    try {
        const { account, password } = ctx.query;
        if (!account || !password) { // 参数校验
            return ctx.body = {
                code: -2,
                msg: 'params is ivail',
            }
        }
        const accountList = await accountDao.find({ name: account });
        const accountObj = accountList && accountList[0];

        if (!accountObj) { // 账户不存在 302
            return ctx.body = {
                code: -1,
                msg: '302'
            }
        } else {
            if (accountObj.password != password) { //  账户存在 密码不正确 
                ctx.body = {
                    code: 1,
                    msg: 'login fail'
                }
            } else {
                ctx.body = {
                    code: 0,
                    msg: 'login success'
                }
            }
        }
    } catch (error) {
        console.log('login error', error)
        ctx.body = {
            code: 2,
            msg: "login error"
        }
    }
}

async function register(ctx) {
    try {
        const { account, password } = ctx.query;
        if (!account || !password) {
            return ctx.body = {
                code: -2,
                msg: "params is ivail"
            }
        }
        let accountList = await accountDao.find({ name: account });
        if (accountList && accountList.length) {
            return ctx.body = {
                code: -1,
                msg: 'account is exit'
            }
        }
        const accountSaveResult = await accountDao.save({ name: account, password: password });
        console.log('register result:', accountSaveResult);
        ctx.body = {
            code: 0,
            msg: 'register success',
        }
    } catch (error) {
        ctx.body = {
            code: 1,
            msg: 'error fail'
        }
        console.log('register error', error)
    }
}

module.exports = {
    register,
    login
}


