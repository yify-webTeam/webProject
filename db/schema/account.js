const mongoose = require('../index');

// account 定义规则
const accountSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = accountSchema;