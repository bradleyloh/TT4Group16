const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    Paymentd: {
        type: Number,
        required: true,
        unique: true
    },
    LoanId: {
        type: Number,
        required: true,
    },
    payment_date: {
        type: Number,
        required: true,
    },
    payment_amount: {
        type: Number,
        required: true,
    },
})

const Category = mongoose.model('customer', categorySchema)

module.exports = Category