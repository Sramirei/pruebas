const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const countries = require('./routes/countries.routes')
const notes = require('./routes/notes.routes')
const users = require('./routes/users.routes')
const login = require('./routes/login.route')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// endpoints
app.use('/', countries)
app.use('/', notes)
app.use('/', users)
app.use('/', login)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
