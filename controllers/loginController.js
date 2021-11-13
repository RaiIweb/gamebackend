const express = require("express")
var router = express.Router()
const { v4: uuidv4 } = require("uuid")

var { userLogins } = require("../models/userLogin.js")
var { userSignups } = require("../models/userSignup.js")

router.post("/", async (req, res) => {
  const { email = undefined, password = undefined } = req.body

  console.log("in login")
  if (!email) res.json("email required")
  if (!password) res.json("password required")

  const userWithEmail = await userSignups.findOne({ email })

  if (userWithEmail) {
    const user = await userSignups.findOne({ email, password })

    if (user) {
      const newId = uuidv4()

      var newRecord = new userLogins({
        //saving in signup table in db
        email: email,
        cookie: newId,
      })

      await newRecord.save()
      res.cookie(`login`, newId, {httpOnly: false, secure: true, sameSite: "none"})
      return res.json({ login: true })

    } else {
      res.json("invalid password")
    }
  } else {
    res.json("user not exists")
  }
});

module.exports = router;
