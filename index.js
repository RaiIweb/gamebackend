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
  origin: 'https://raiiweb.github.io'
}))



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
  res.cookie(`login`, 'newId', {httpOnly: false, sameSite: "none"})

  res.send("hi welcome to game");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})
