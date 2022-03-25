const express = require('express')
const Loan = require('../models/loan')
const router = new express.Router()

// return everything
router.get('/loans/:id', async (req, res) => {
    try {
        const product = await Loan.find({id: req.params.id})
        res.send(product)
    } catch(e) {res.status(500).send(e)}
})


module.exports = router