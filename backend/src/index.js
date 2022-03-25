const express = require('express')
const mongoose = require('mongoose')
//const cors = require('cors')

// Set mongoose here
mongoose.connect('mongodb+srv://user123:asdASD123%21%40%23@cluster0.hdr0f.mongodb.net/dbsseed?retryWrites=true&w=majority')

const customerRouter = require('./routers/customer')
//const customerloanRouter = require('./routers/customerloan')
//const loanRouter = require('./routers/loan')
//const penguinRouter = require('./routers/payment')

const app = express()
const port = 3002


//app.use(cors({origin: '*'}))
//app.use(express.json())
app.use(customerRouter)
// app.use(customerloanRouter)
// app.use(loanRouter)
//app.use(penguinRouter)

app.listen(port, () => console.log(`Server is up on port ${port}.`))