const express = require("express")
var router = express.Router()

var { userScores } = require("../models/userScores.js")
var { userLogins } = require("../models/userLogin.js")


const checkCookie = async (req, res, next) => {
  const cookie = req.cookies.login;

  const user = await userLogins.findOne({ cookie })

  if(user) {

    next()
    
  }
  else {
    res.status(401).json({ response: 'invalid cookie'});

  }
  
};


router.get("/", checkCookie ,async (req, res) => {


  //const cookie = req.cookies.login;

  //const user = await userLogins.findOne({ cookie })
  //const scoresOfUser = await userScores.findOne({ email: user.email })

  const filter = {};
  const all = await userScores.find(filter)
  
  if(all) {

    res.json(all)
   
  
  } else  {

    res.json('score npt updated')

  }



  
})

module.exports = router;
