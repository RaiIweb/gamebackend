const express = require("express")
var router = express.Router()

var { userSignups } = require("../models/userSignup.js")
var { userScores } = require("../models/userScores.js")

router.post("/", async (req, res) => {
  const { email = undefined, password = undefined, username = undefined } = req.body;

  if(!email) res.json('email required')
  if(!password) res.json('password required')
  if(!username) res.json('username required')

  if(password.length < 8) res.json('password  must be more than 8 character')
  const user = await userSignups.findOne({ email })
  
  console.log(user)
  if (user) {

    res.json({ status : 'user exists'})

  } else {



    var newRecord = new userSignups({
      //saving in signup table in db
      email: email,
      password: password,
      username: username
    })
    
    var scoreRecord = new userScores({
      //saving in signup table in db
      email: email,
      wins: 0,
      defeats: 0,
      username: username
    })
  

    await scoreRecord.save()
    await newRecord.save()

    res.json({ status : 'success'})
  }
})

module.exports = router;
