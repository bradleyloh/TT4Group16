const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    CustomerId: {
        type: Number,
        required: true,
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
    },
    password: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('customer', categorySchema)

module.exports = Category