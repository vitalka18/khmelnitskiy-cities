const expect = require('chai').expect;
const cities = require('./index');

describe('cities:', function() {
  describe('all:', function() {
    it('shold be an array of string', function() {
      expect(cities.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(i) {
          return typeof(i) === 'string';
        });
      }
    });

    it('should contain Хмельницький city', function() {
      expect(cities.all).to.include('Хмельницький');
    });
  });

  describe('random:', function() {
    it('shold be a string', function() {
      expect(cities.random()).to.be.string;
    });

    it('shold be an city from cities.all array', function() {
      expect(cities.random()).to.satisfy(oneOfCitiesList);

      function oneOfCitiesList(city) {
        return cities.all.includes(city)
      }
    });
  });
});

