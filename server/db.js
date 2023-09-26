const Pool = require('pg').Pool;
const HOST = "localhost"
const pool = new Pool({
    user: 'postgres',
    password: 585999,
    host: HOST,
    port: 5050,
    database: ''
});


module.exports = pool;