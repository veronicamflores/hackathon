let router = require('express').Router()
let Posts = require('../models/post')

router.get('/', (req, res, next)=>{
  Posts.find({})
  .then(posts => res.send(posts))
  .catch(next)
})
router.get('/by-user/:userId', (req, res, next) => {
  Posts.find({
    userId: req.params.userId
  }).then(plist => {
    res.send(plist)
  }).catch(next)
})

router.get('/:id', (req, res, next)=>{
  Posts.findById(req.params.id)
    .then(post=>{
      res.send(post)
    })
})

router.post('/', (req, res, next) => {
  Posts.create(req.body)
    .then(post => {
      res.send(post)
    }).catch(next)
})
router.put('/:id', (req, res, next) => {
  Posts.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})
router.delete('/:id', (req, res, next) => {
  Posts.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'It worked'
    })).catch(next)
})


module.exports = router