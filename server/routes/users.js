let router = require('express').Router()
let Users = require('../models/user')

router.post('/', (req, res, next) => {
  Users.findOne({
    username: req.body.username,
    pin: req.body.pin
  }).then(user => {
    if (user) {
      return res.send(user)
    }
    return res.status(401).send({
      error: "Invalid Login"
    })
  })
})

router.post('/', (req, res, next) => {
  Users.create(req.body).then(user => {
    res.send(user)
  }).catch(next)
})


module.exports = router