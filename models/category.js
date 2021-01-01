const mongoose = require('mongoose');
const db = require('./connection');

const categorySchema = new mongoose.Schema({
    name : String,
    desc : String,
    date : Date,
    subCategory : Array
})

const Category = new mongoose.Model('category',categorySchema)
module.exports = Category;