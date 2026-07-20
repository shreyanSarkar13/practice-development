const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "inventory_db",
    password: "L0rdsh1va#",
    port: 5432,
});

module.exports = pool;