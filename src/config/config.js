const fs = require('fs');

module.exports = {
    development: {
        username: "root",
        password: "123456",
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false},
        force: false
    },
    test: {
        username: "root",
        password: null,
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false},
        force: true
    },
    production: {
        username: "lucasktrindade",
        password: "PASSWORD",
        database: "pay4you",
        host: "mysql427.umbler.com",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false},
        force: false
    }
};