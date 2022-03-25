const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    CustomerLoanId: {
        type: Number,
        required: true,
        unique: true
    },
    CustomerId: {
        type: Number,
        required: true
    },
    LoanId: {
        type: Number,
        required: true
    }
})

const Customerloan = mongoose.model('customerloan', categorySchema)

module.exports = Customerloan