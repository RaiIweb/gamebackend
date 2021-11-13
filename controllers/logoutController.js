const express = require("express")
var router = express.Router()

var { userLogins } = require("../models/userLogin.js")

router.post("/", async (req, res) => {
  const { login = undefined  } = req.cookies;

  let obj = {
    logout : true
  }

  if(!login) res.json(obj)

  let cookie = login
  
  const user = await userLogins.findOneAndDelete({ cookie  })
  
  if (user) {

    
    res.clearCookie("login", {httpOnly: true, secure: true, sameSite: "none", maxAge: 120000})
    res.json(obj)

  } else {

    res.json('session not exists')
  }
})

module.exports = router;
