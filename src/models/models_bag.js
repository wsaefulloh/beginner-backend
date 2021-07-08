const db = require('../configs/db')
const bag = {}

bag.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT id_bag, name_product, price_product, brand_product, count FROM public.bag JOIN public.detail_product ON public.bag.id_product = public.detail_product.id_product")
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
        db.query("UPDATE public.bag SET count = $1 WHERE id_bag = $2",[data.count, data.id_bag])
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

bag.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.bag WHERE id_bag = ${id}`)
        .then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        });
    })
}

module.exports = bag