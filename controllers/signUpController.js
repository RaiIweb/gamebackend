const express = require("express")
var router = express.Router()

var { userSignups } = require("../models/userSignup.js")

router.post("/", async (req, res) => {
  const { email = undefined, password = undefined } = req.body;

  if(!email) res.json('email required')
  if(!password) res.json('password required')

  if(password.length < 8) res.json('password  must be more than 8 character')
  const user = await userSignups.findOne({ email })
  
  console.log(user)
  if (user) {

    res.json('user exists')

  } else {

    console.log('user not exists')

    console.log(email)
    var newRecord = new userSignups({
      //saving in signup table in db
      email: email,
      password: password,
    })
  

    await newRecord.save()
    res.json('user saved')
  }
})

module.exports = router;
