const mongoose = require('../index');

const accountSchema = require('../schema/account');
const accountModel = mongoose.model('Account', accountSchema);

module.exports = accountModel;

