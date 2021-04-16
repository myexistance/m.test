const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllUsers()
    .then(users => {
      res.json(users)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOneUser(id)
    .then(user => {
      res.json(user)
    })
})

router.post('/', (req, res) => {
  const name = req.body.name
  const newUsers = {
    name: name,
    username: username,
    password: password
  }

  db.addPup(newPup)
    .then((ids) => {
      res.json({ message: 'it added. yay!'})
    })
})


module.exports = router