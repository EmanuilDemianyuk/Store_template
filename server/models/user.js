const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    userName: String,
    email: String,
    password: String,
    phone: String,
    address: {
        city: String,
        street: String,
        number: Number,
        entrance: Number,
        floor: [String],
        apartment: [String],
    },
    orders: [Array]
})

const User = mongoose.model("user", userSchema);

module.exports = User;