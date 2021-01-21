const mongoose = require('../index');

// spyer 定义规则
const spyerSchema =  mongoose.Schema({
    jobName: {
        type: String,
        required: true,
    },
    jobSalary: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    }
})

module.exports = spyerSchema;