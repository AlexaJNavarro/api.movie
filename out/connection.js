"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const promise_1 = require("mysql2/promise");
exports.DB = promise_1.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'DBMovies'
});
