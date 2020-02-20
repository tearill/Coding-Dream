const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose); // 绑定当前 mongoose
const ObjectId = mongoose.Schema.Types.ObjectId; // ObjectId 类型

// Schema 设计
// 商品表
const productSchema = Schema({
    id: ObjectId, // 唯一的 ObjectId --- hash 值
    name: String, // 商品名
    image: String, // 商品图片
    price: Number, // 价格
    description: String, // 商品描述
    manufacturer: {
        type: ObjectId, // 关联外键
        ref: 'Manufacturer' // 关联表
    }
});
// 商家表
const manufacturerSchema = Schema({
    id: ObjectId,
    name: String
});
// 生成模型映射数据库表 -> 存数据 --- 生成的数据库中表名会是定义的类名对应小写的复数 --- 由 mongoose 自动完成
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };