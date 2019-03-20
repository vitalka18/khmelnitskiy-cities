const cities = require('./cities.json');
const uniqueRandomArray = require('unique-random-array');
const getRandomItem = uniqueRandomArray(cities);

module.exports = {
  all: cities,
  random: random
};

function random(count) {
  if (count === undefined) {
    return getRandomItem();
  }

  const randomItems = [];

  for (let i = 0; i < count; i++) {
    randomItems.push( getRandomItem() );
  }

  return randomItems; 
}

