const mongoose = require('mongoose');
const db = require('./connection');
const productSchema = new mongoose.Schema({
    name : String,
    desc : String,
    date : Date,
    category : Array
})

const Product = db.model('product',productSchema)
module.exports = Product;