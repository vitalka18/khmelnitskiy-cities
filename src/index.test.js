const expect = require('chai').expect;
const cities = require('./index');

describe('cities:', function() {
  describe('all:', function() {
    it('shold be an array of string', function() {
      expect(cities.all).to.satisfy(isArrayOfStrings);

      
    });

    it('should contain Хмельницький city', function() {
      expect(cities.all).to.include('Хмельницький');
    });
  });

  describe('random:', function() {
    it('should be a string if no arguments passed', function() {
      expect(cities.random()).to.be.string;
    });

    it('shold be an city from cities.all array', function() {
      expect(cities.random()).to.satisfy(oneOfCitiesList);

      function oneOfCitiesList(city) {
        return cities.all.includes(city)
      }
    });

    it('should return an array if passed a number', function() {
      const randomCities = cities.random(3);

      expect(randomCities).to.satisfy(isArrayOfStrings);
      expect(randomCities).to.have.length(3);
    });
  });
});

function isArrayOfStrings(array) {
  return array.every(function(i) {
    return typeof(i) === 'string';
  });
}
