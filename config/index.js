

module.exports = {
    server: {
        port: 3001
    },
    db: {
        host: "192.168.0.113",
        port: "27017",
        name: "root",
        password: "root",
        database: 'web',
        authbase: 'admin',
        option: { useNewUrlParser: true, useUnifiedTopology: true }
    }
}
