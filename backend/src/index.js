const express = require('express')
const mongoose = require('mongoose')
//const cors = require('cors')
// const Customer = require('models/customer')

// Set mongoose here
mongoose.connect('mongodb+srv://bradleyloh:dbsseed123%21%40%23@cluster0.zgytf.mongodb.net/dbs_seed?retryWrites=true&w=majority')

const customerRouter = require('./routers/customer')
const customerloanRouter = require('./routers/customerloan')
const loanRouter = require('./routers/loan')
const paymentRouter = require('./routers/payment')

const app = express()
const port = 3002


//app.use(cors({origin: '*'}))
app.use(express.json())
app.use(customerRouter)
//app.use(customerloanRouter)
//app.use(loanRouter)
//app.use(paymentRouter)

app.listen(port, () => console.log(`Server is up on port ${port}.`))