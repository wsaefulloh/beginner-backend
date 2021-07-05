const category = {}
const model = require('../models/models_category')

category.getAll = async (req, res) => {
    try {
        const respone = await model.getAll()
        res.send(respone)
    } catch (error) {
        res.send(error)
    }
}

category.addData = async (req, res) => {
    try {
        const respone = await model.addData(req.body)
        res.send('Successfully Added Product')
    } catch (error) {
        res.send(error)
    }
}

category.updateData = async (req, res) => {
    try {
        const respone = await model.updateData(req.body)
        res.send('Update Product Success')
    } catch (error) {
        res.send(error)
    }
}

category.removeData = async (req, res) => {
    try {
        const respone = await model.removeData(req.params.id_category)
        res.send('Delete Success')
    } catch (error) {
        res.send(error)
    }
}

module.exports = category