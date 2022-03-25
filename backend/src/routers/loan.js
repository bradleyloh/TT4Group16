const express = require('express')
const Loan = require('../models/loan')
const Loan = require('../models/loan')
const Payment = require('../models/payment')
const Customerloan = require('../models/customerloan')
const router = new express.Router()

// return 1 row base on the id [3,4]
router.get('/loans/:id', async (req, res) => {
    try {
        const loan = await Loan.find({LoanId: req.params.id})
        res.send(loan.loan_amount)
    } catch(e) {res.status(500).send(e)}
})

// PATCH one product to change its quantity [6]
router.patch('/loans-pay/:id', async (req, res) => {
    try {
        const payment = await Payment.findOne({PaymentId: req.params.id})
        payment.amount = req.body.amount
        await payment.save()

        const Loan = await Loan.findOne({LoanId: req.params.Id})
        await Loan.save()
        
        res.send("updated")
    } catch(e) {res.status(400).send(e)}
})

// Insert new loan to customerloan and loan tables
router.post('/loan/:id', async (req,res) => {
    req.body.map(async pdt =>{
        const newloan = new Customerloan({... pdt})
        try {
            await newloan.save()
            res.status(201).send(newloan)
        } catch(e) {res.status(400).send(e)}
    })
})

module.exports = router