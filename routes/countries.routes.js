const { countries } = require('../data')
const express = require('express')
const routes = express.Router()

routes.get('/countries', (req, res) => {
  res.json(countries)
})

routes.get('/countries/:countryName', (req, res, next) => {
  const countryName = req.params.countryName
  const country = countries.find(country => country.countryName === countryName)

  if (country.length === 0) {
    res.send({ message: 'Not Found' }).statusCode(404)
    next('route')
  } else {
    return res.json(country)
  }
})

routes.get('/countries/:continentName', (req, res) => {
  const continentName = req.params.continentName
  const country = countries.filter(country => country.continentName === continentName)

  if (country.length === 0) {
    res.send({ message: 'Not Found' }).statusCode(404)
  } else {
    res.json(country)
  }
})

routes.post('/countries', (req, res) => {
  const country = req.body

  if (country.countryName === '') {
    return res.send({ message: 'required "countryName" field is missing' }).statusCode(204)
  }

  const newCountry = {
    countryName: country.countryName,
    population: country.population,
    capital: country.capital,
    continentName: country.continentName
  }

  countries.push(newCountry)

  res.send({ message: 'New Country Created' }).json(newCountry).statusCode(201)
})

routes.delete('/countries/:countryName', (req, res) => {
  const countryName = req.params.continentName
  countries.filter(country => country.countryName !== countryName)

  res.send({ message: 'Country Deleted' })
})

module.exports = routes
