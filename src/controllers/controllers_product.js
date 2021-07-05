const products = {}
const model = require('../models/models_product')

products.getAll = async (req, res) => {
    try {
        const respone = await model.getAll()
        res.send(respone)
    } catch (error) {
        res.send(error)
    }
}

products.addData = async (req, res) => {
    try {
        const respone = await model.addData(req.body)
        res.send('Add Product Success')
    } catch (error) {
        res.send(error)
    }
}

products.updateData = async (req, res) => {
    try {
        const respone = await model.updateData(req.body)
        res.send('Update Product Success')
    } catch (error) {
        res.send(error)
    }
}

products.removeData = async (req, res) => {
    try {
        const respone = await model.removeData(req.params.id_product)
        res.send('Delete Success')
    } catch (error) {
        res.send(error)
    }
}

module.exports = products