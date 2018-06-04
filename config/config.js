const fs = require('fs');

module.exports = {
    development: {
        username: "root",
        password: "123456",
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306
    },
    test: {
        username: "root",
        password: null,
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306
    },
    production: {
        username: "root",
        password: null,
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306
    }
};