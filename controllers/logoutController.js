const express = require("express")
var router = express.Router()

var { userLogins } = require("../models/userLogin.js")

router.post("/", async (req, res) => {
  const { login = undefined  } = req.cookies;


  if(!login) res.json('already logout')

  let cookie = login
  
  const user = await userLogins.findOneAndDelete({ cookie  })
  
  if (user) {
    res.json('session exists')

  } else {

    res.json('session not exists')
  }
})

module.exports = router;
