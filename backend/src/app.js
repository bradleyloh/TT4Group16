const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Set mongoose here
mongoose.connect('mongodb+srv://user123:asdASD123%21%40%23@cluster0.hdr0f.mongodb.net/dbsseed?retryWrites=true&w=majority')

const customerRouter = require('./routers/customer')
const loanRouter = require('./routers/loan')
const User = require("./model/user");

const app = express()
const port = 3002


app.use(cors({origin: '*'}))
app.use(express.json())
app.use(customerRouter)
app.use(loanRouter)

app.listen(port, () => console.log(`Server is up on port ${port}.`))

// importing user context

// Register
app.post("/register", async (req, res) => {
    try {
        // Get user input
        const { name, phone, address, password } = req.body;
    
        // Validate user input
        if (!(name && password && phone && address)) {
          res.status(400).send("All input is required");
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ phone });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        const user = await User.create({
          name,
          phone,
          address,
          password: encryptedPassword,
        });
    
        // Create token
        const token = jwt.sign(
          { user_id: user._id, phone },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
    
        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
        res.send(err);
      }
});

// Login
app.post("/login", (req, res) => {
    try {
        // Get user input
        const { phone, password } = req.body;
    
        // Validate user input
        if (!(phone && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ phone });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, phone },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          // user
          res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
        res.send(err)
      }
});

const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;