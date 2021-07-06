const express = require("express");
const routing = express.Router();
const product = require("./routes/routes_product.js")
const category = require("./routes/routes_category.js")
const bag = require("./routes/routes_bag.js")
const respone = require('./helpers/respone')


routing.use('/product', product)
routing.use('/product/*',(req,res) => {
    return respone(res, 404)
})

routing.use('/category', category)
routing.use('/category/*',(req,res) => {
    return respone(res, 404)
})

routing.use('/bag', bag)
routing.use('/bag/*',(req,res) => {
    return respone(res, 404)
})

routing.use('*',(req,res) => {
    return respone(res, 404)
})

module.exports = routing