const mongoose = require('../index');

const spyerSchema = require('../schema/spyer');
const spyerModel = mongoose.model('Spyer', spyerSchema);

module.exports = spyerModel;


