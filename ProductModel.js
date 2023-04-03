const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    gia: Number,
    soluong: Number,
    giamgia: Number
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;
