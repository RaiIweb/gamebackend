//express
const express = require("express");
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

var { userLogins } = require("./models/userLogin.js")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//cors
var cors = require("cors");
app.use(cors({
  origin: 'https://raiiweb.github.io',
  credentials : true
}))

app.use(function (req, res, next) {	
  res.setHeader('Access-Control-Allow-Origin', 'https://raiiweb.github.io');    
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
  res.setHeader('Access-Control-Allow-Credentials', true);    
  next();
})


//db
require("./db");



const port = process.env.PORT || 8000;

var loginRoute = require("./controllers/loginController");
var signUpRoute = require("./controllers/signUpController");
var logoutRoute = require("./controllers/logoutController");
var scoreRoute = require("./controllers/scoreController");
var rankingsRoute = require("./controllers/gamerankingsController");


//signup
app.use("/signup", signUpRoute);


//login
app.use("/login",  loginRoute);


//update
app.use('/update' , scoreRoute)

//rankings
app.use('/rankings' , rankingsRoute)


//logout
app.use("/logout", logoutRoute)


app.get("/", async (req, res) => {
  if(req.cookies) {

    const user = await userLogins.findOne({ cookie: req.cookies.login })

    if(user) {

      
      res.json({ login : Boolean(req.cookies)})
    }
    else {
      res.send({})

    }

  } else {
    res.send({})
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})
