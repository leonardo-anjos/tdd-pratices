var should = require('should');
var sum = require('../sum');

describe('sum.js', function () {
  it('sum of 1 + 1 should return 2', function () {
    sum(1, 1).should.be.equal(2);
  });
  it('sum of 10 + 10 should return 20', function () {
    sum(10, 10).should.be.equal(20);
  });
  it('sum of 12 + 24 should return 36', function () {
    sum(12, 24).should.be.equal(36);
  });
  // verificar se o usuario entra com algo diferente de numero
});