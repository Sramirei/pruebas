let { notes } = require('../data')
const express = require('express')
const routes = express.Router()

routes.get('/notes', (req, res) => {
  res.json(notes)
})

routes.get('/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    res.json(note)
  } else {
    res.send({ message: 'Not Found' }).statusCode(404)
  }
})

routes.post('/notes', (req, res) => {
  const note = req.body

  if (!note.title) {
    return res.send({ message: 'Is required a title for created a note' }).statusCode(204)
  }

  const newNote = {
    id: notes.length + 1,
    title: note.title,
    body: note.body
  }

  notes.push(newNote)

  res.send({ message: 'New Note Created' }).json(newNote).statusCode(201)
})

routes.delete('/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.send({ message: 'Deleted a note' }).statusCode(204)
})

module.exports = routes
