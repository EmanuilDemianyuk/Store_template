const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    price: Number,
    img: String,
    category: String,
    type: String,
    rating: Number
})

const Product = mongoose.model("Product", productSchema);
 
module.exports = Product;