const cities = require('./cities.json');
const random = require('unique-random-array');

module.exports = {
  all: cities,
  random: random(cities)
};

