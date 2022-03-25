const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// Set mongoose here
mongoose.connect('')

const customerRouter = require('./routers/customer')

const app = express()
const port = 3002

app.use(cors({origin: '*'}))
app.use(express.json())

app.use(customerRouter)

app.listen(port, () => console.log(`Server is up on port ${port}.`))