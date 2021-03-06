const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    LoanId: {
        type: Number,
        required: true,
        unique: true
    },
    loan_amount: {
        type: Number,
        required: true
    }
})

const Loan = mongoose.model('loan', categorySchema)

module.exports = Loan