const express = require('express')
const Customer = require('../models/customer')
const Penguin = require('../models/penguin')
const router = new express.Router()

router.get('/penguin', async(req,res)=>{
    try {
        const data = await Penguin.find({})
        res.send(data)
    } catch(e){
        res.status(500).send(e)
    }
})

router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find({})
        res.json(customers)
    } catch(e) {
        //console.log(e)
        res.status(500).send(e)}
})

// Return everything 1 row from customer base on id
router.get('/customers/:id', async (req, res) => {
    try {
        const product = await Customer.find({id: req.params.id})
        res.send(product)
    } catch(e) {res.status(500).send(e)}
})

// Authentication [1]
router.post('/login', async (req, res) => {
    try{
        const customer = await Customer.findOne({username: req.body.phone, password: req.body.password})
        if (!customer) {return res.send(404)}
        res.send(customer)
    } catch(e) {res.status(500).send(e)}
})

module.exports = router