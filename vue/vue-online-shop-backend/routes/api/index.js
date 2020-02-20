const express = require('express');
const router = express.Router(); // 得到路由对象
const manufacturerController = require('../../controllers/manufacturer');
const productController = require('../../controllers/product');

router.get('/manufacturers', manufacturerController.all);
router.post('/manufacturers', manufacturerController.create);

router.get('/products', productController.all);
router.post('/products', productController.create);

module.exports = router;