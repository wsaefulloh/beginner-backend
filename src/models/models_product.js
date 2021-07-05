const db = require('../configs/db')
const products = {}

products.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.detail_product ORDER BY date_update DESC')
        .then((res) => {
            resolve(res.rows)
        }).catch((err) => {
            reject(err)
        });
    })
}

products.addData = (data) => {
    return new Promise((resolve, reject) => {
        let date_create = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
        db.query('INSERT INTO public.detail_product (name_product, price_product, brand_product, id_category, date_create, date_update) VALUES ($1, $2, $3, $4, $5, $6)', [data.name_product, data.price_product, data.brand_product, data.id_category, date_create, date_create])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

products.updateData = (data) => {
    return new Promise((resolve, reject) => {
        let date_create = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
        db.query("UPDATE public.detail_product SET price_product = $1, date_update = $2 WHERE id_product = $3",[data.price_product, date_create, data.id_product])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

products.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.detail_product WHERE id_product = ${id}`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

module.exports = products