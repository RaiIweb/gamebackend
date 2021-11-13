//express
const express = require("express");
const cookieParser = require('cookie-parser')

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


//signup
app.use("/signup", signUpRoute);


//login
app.use("/login",  loginRoute);


//update
app.use('/update' ,  (req , res) => {
  
})


//logout
app.use("/logout", (req , res) => {

})


app.get("/", async (req, res) => {
  if(req.cookies) {

    res.json(req.cookies)
  } else {
    res.send('no cookies')
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})
