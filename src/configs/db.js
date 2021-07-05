const {Pool} = require("pg")

const pool = new Pool({
    user: "wahyu",
    host: "localhost",
    database: "product",
    password: "wahyu1234",
    port: 5432
})

module.exports = pool