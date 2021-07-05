const express = require("express");
const routing = express.Router();
const product = require("./routes/routes_product.js")
const category = require("./routes/routes_category.js")
const bag = require("./routes/routes_bag.js")


routing.use('/product', product)
routing.use('/category', category)
routing.use('/bag', bag)

module.exports = routing