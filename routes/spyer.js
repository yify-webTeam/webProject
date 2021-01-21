const Router = require('@koa/router');
const router = new Router();

const spyerController = require('../controller/spyer');

// page


// ****************page和api分隔线*********************

router.get('/api/spy58', spyerController.spy58page);


module.exports = router;

