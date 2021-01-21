const mongoose = require('mongoose');

const { db } = require('../config');

// 格式   协议://用户名:密码@host:port/database
const DBURL = `mongodb://${db.name}:${db.password}@${db.host}:${db.port}/${db.database}?authSource=${db.authbase}`;
mongoose.connect(DBURL, db.option);

mongoose.connection.on('connected', () => {
    console.log(`mongodb connected on protocol:"${DBURL}"`);
})

mongoose.connection.on('error', (err) => {
    console.log('mongodb eror', err)
})

mongoose.connection.on('disconnected', (err) => {
    console.log('mongodb disconnected')
})

module.exports = mongoose;
