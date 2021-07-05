const db = require('../configs/db')
const bag = {}

bag.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.bag ORDER BY id_product DESC')
        .then((res) => {
            resolve(res.rows)
        }).catch((err) => {
            reject(err)
        });
    })
}

bag.addData = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO public.bag (id_product, count) VALUES ($1, $2)', [data.id_product, data.count])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

bag.updateData = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE public.bag SET count = $1 WHERE id_product = $2",[data.count, data.id_product])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

bag.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.bag WHERE id_product = ${id}`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

module.exports = bag