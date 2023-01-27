const { countries } = require('./data')

const country = countries.find(country => country.countryName === 'Colombi')

if (country === undefined) {
  console.log('vacio')
} else {
  console.log(country)
}
