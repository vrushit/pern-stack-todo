const Pool = require("pg");

const pool = new Pool({
    user:"postgres",
    password:"admin123",
    host:"localhost",
    port:5432,
    database: "perntodo"
})
