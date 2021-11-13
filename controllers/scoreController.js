const express = require("express")
var router = express.Router()

var { userScores } = require("../models/userScores.js")
var { userLogins } = require("../models/userLogin.js")


const checkCookie = async (req, res, next) => {
  const loginCookie = req.cookies.login;

  const user = await userLogins.findOne({ cookie })

  if(user) {

    next()
    
  }
  else {
    res.status(401).send("Invalid token");

  }
  
};


router.post("/", checkCookie ,async (req, res) => {

  const { status = undefined } = req.body;

  if(!status) res.json('status required')

  const cookie = req.cookies.login;

  const user = await userLogins.findOne({ cookie })
  const scores = await userScores.findOne({ email: user.email })

  if(status == 'win') {

    scores.wins = scores.wins + 1
    await scores.save()

    res.json('score updated')
  
  } else {

    scores.defeats = scores.defeats + 1
    await scores.save()

    res.json('score updated')
  }

  res.json('score npt updated')


  
})

module.exports = router;
