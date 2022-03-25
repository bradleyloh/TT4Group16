const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    CustomerId: {
        type: Number,
        required: true,
        unique: true,
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true
    },
    customer_address: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Customer = mongoose.model('customer', categorySchema)

module.exports = Customer