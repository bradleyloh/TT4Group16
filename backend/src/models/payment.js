const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    PaymentId: {
        type: Number,
        required: true,
        unique: true
    },
    LoanId: {
        type: Number,
        required: true,
    },
    payment_date: {
        type: String,
        required: true,
    },
    payment_amount: {
        type: Number,
        required: true,
    }
})

const Category = mongoose.model('payment', categorySchema)

module.exports = Category