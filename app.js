global.Promise = require('bluebird');

const Koa = require('koa');
const compose = require('koa-compose')
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const staticFiles = require('koa-static');
const logger = require('koa-logger')
const path = require('path');

const conf = require('./config');
const router = require('./routes');

const app = new Koa();

// app.use(compose([
//     logger(),
//     staticFiles(path.join(__dirname, 'assets')), // 注册静态目录
//     views('views', { map: { html: 'ejs' } }), // 注册ejs模板引擎
//     bodyParser(),
//     router.routes(), // 启用路由
//     router.allowedMethods()
// ]));

app.listen(conf.server.port);
console.log('server is listen in 3001');
