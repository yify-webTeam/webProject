const accountModel = require('../model/account');

async function save(obj) {
    return new Promise((resolve, reject) => {
        const accountModelI = new accountModel(obj);
        accountModelI.save((err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res);
        })
    })
}

async function find(opt) {
    return new Promise((resolve, reject) => {
        accountModel.find(opt, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        })
    })
}

module.exports = {
    save, 
    find
}