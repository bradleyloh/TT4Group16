const express = require('express')
const Customer = require('../models/customer')
const router = new express.Router()

// Return everything in table
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find({})
        res.send(customers.balance)
    } catch(e) {
        res.status(500).send(e)}
})

// Return everything 1 row from customer base on id [2]
router.get('/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.find({CustomerId: req.params.id})
        res.send(customer.balance)
    } catch(e) {res.status(500).send(e)}
})

// Authentication [1]
// router.post('/login', async (req, res) => {
//     try{
//         const customer = await Customer.findOne({username: req.body.phone, password: req.body.password})
//         if (!customer) {return res.send(404)}
//         res.send(customer)
//     } catch(e) {res.status(500).send(e)}
// })

module.exports = router