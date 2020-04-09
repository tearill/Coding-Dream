const Model = require('../model');
const { Manufacturer, Product } = Model;

const productController = {
    all(req, res) {
        res.json({
            producets: []
        })
    },
    create(req, res) {
        const requestBody = req.body; // 请求体 表单
        console.log(requestBody);
        const newProduct = new Product(requestBody);
        newProduct.save((err, saved) => {
            res.json({
                mes: 'ok'
            })
        })
    }
}

module.exports = productController;