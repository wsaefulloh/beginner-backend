const db = require('../configs/db')
const category = {}

category.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.category ORDER BY id_category DESC')
        .then((res) => {
            resolve(res.rows)
        }).catch((err) => {
            reject(err)
        });
    })
}

category.addData = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO category (name_category, id_category) VALUES ($1, $2)', [data.name_category, data.id_category])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

category.updateData = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE public.category SET name_category = $1 WHERE id_category = $2",[data.name_category, data.id_category])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

category.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.category WHERE id_category = ${id}`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

module.exports = category