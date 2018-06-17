const fs = require('fs');

module.exports = {
    development: {
        username: "root",
        password: "PASSWORD",
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false}
    },
    test: {
        username: "root",
        password: null,
        database: "pay4you",
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false}
    },
    production: {
        username: "lucasktrindade",
        password: "PASSWORD",
        database: "pay4you",
        host: "mysql427.umbler.com",
        dialect: "mysql",
        port: 3306,
        secret: "MyS3cr3tK3Y",
        jwtSession: {session: false}
    }
};