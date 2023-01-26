const { users } = require('../data')
const express = require('express')
const routes = express.Router()

const randomString = (length) => {
  const banco = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let random = ''
  for (let i = 0; i < length; i++) {
    random += banco.charAt(Math.floor(Math.random() * banco.length))
  }
  return random
}

routes.get('/users', (req, res) => {
  res.json(users)
})

routes.get('/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(user => user.id === id)
  res.json(user)
})

routes.post('/users', (req, res) => {
  const user = req.body

  if (!user.first_name) {
    return res.send({ message: 'Is required a name for created a user' }).statusCode(204)
  }

  if (!user.email) {
    return res.send({ message: 'Is required a email for created a user' }).statusCode(204)
  }

  if (!user.password) {
    return res.send({ message: 'Is required a password for created a user' }).statusCode(204)
  }

  const newUser = {
    id: randomString(8),
    title: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    gender: user.gender,
    birthday: user.birthday
  }

  users.push(newUser)

  res.send({ message: 'New User Created' }).json(newUser).statusCode(201)
})

routes.delete('/users/:id', (req, res) => {
  const id = req.params.id
  users.filter(user => user.id !== id)
  res.send({ message: 'Deleted a user' }).statusCode(204)
})

module.exports = routes
