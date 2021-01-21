const accountModel = require('../model/spyer');

async function save(list) {
    return new Promise((resolve, reject) => {
        // const spyerModelI = new spyerModel(obj);
        // spyerModelI.save((err, res) => {
        //     if (err) {
        //         return reject(err)
        //     }
        //     resolve(res);
        // })
        accountModel.insertMany(list, (err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res);
        })
    })
}

async function find(opt) {
    return new Promise((resolve, reject) => {
        spyerModel.find(opt, (err, res) => {
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