const conn = require('./connection')

function getAllUsers(db = conn) {
  return db('users')
    .select()
    .catch(err => ({ message: 'the db broke...' }))
}

function getOneUser(id, db = conn) {
  return db('users')
    .where('id', id)
    .select()
    .first()
    .catch(err => ({ message: 'the db broke...' }))
}

function addUser(newUser, db = conn) {
  return db('users')
    .insert(newUser)
    .catch(err => ({ message: 'the db broke...' }))
}

module.exports = {
  getAllUsers,
  getOneUser,
  addUser
}  
