const mysql = require('mysql');
const config = require('../config/mysqlDb.json');

let pool = mysql.createPool({
    connectionLimit:config.connectionLimit||100,
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});


module.exports = pool;