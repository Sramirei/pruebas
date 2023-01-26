const { users } = require('../data')
const express = require('express')
const routes = express.Router()
const jwt = require('jsonwebtoken')

routes.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => user.email === email && user.password === password)

  if (user === []) {
    res.send({ message: 'Email or Password invalid' }).statusCode(401)
  }

  const UserLogged = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    gender: user.gender,
    birthday: user.birthday
  }

  const token = jwt.sign(UserLogged, 'secretString', {
    expiresIn: 60 * 60 * 24 * 7
  })

  res.json({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    gender: user.gender,
    birthday: user.birthday,
    token
  })
})

module.exports = routes
