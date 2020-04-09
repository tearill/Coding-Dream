const Model = require('../model');
const { Manufacturer, Product } = Model;

const manufacturerController = {
    all(req, res) {
        res.json({
            manufacturers: []
        })
    },
    create(req, res) {
        const requestBody = req.body; // 请求体 表单
        console.log(requestBody);
        const newManufacturer = new Manufacturer(requestBody); // 创建对应要存储的数据对象
        newManufacturer.save((err, saved) => {
            res.json({
                mes: 'ok'
            })
        })
    }
}

module.exports = manufacturerController;