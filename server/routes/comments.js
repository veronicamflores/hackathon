let router = require('express').Router()
let Comments = require('../models/comment')


router.get('/by-user/:userId', (req, res, next) => {
  Comments.find({
    userId: req.params.userId
  }).then(clist => {
    res.send(clist)
  }).catch(next)
})

router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(comment => {
      res.send(comment)
    }).catch(next)
})
router.put('/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    }))
    .catch(next)
})
router.delete('/:id', (req, res, next) => {
  Comments.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'It worked'
    })).catch(next)
})


module.exports = router