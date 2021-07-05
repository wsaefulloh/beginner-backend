const bag = {}
const model = require('../models/models_bag')

bag.getAll = async (req, res) => {
    try {
        const respone = await model.getAll()
        res.send(respone)
    } catch (error) {
        res.send(error)
    }
}

bag.addData = async (req, res) => {
    try {
        const respone = await model.addData(req.body)
        res.send('Successfully Added Product to Bag')
    } catch (error) {
        res.send(error)
    }
}

bag.updateData = async (req, res) => {
    try {
        const respone = await model.updateData(req.body)
        res.send('Update Bag Success')
    } catch (error) {
        res.send(error)
    }
}

bag.removeData = async (req, res) => {
    try {
        const respone = await model.removeData(req.params.id_product)
        res.send('Delete Success')
    } catch (error) {
        res.send(error)
    }
}

module.exports = bag