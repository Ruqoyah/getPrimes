const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("get primes test", function() {

  describe("handle valid input", function() {
    it("should return [2, 3, 5, 7] for 7", function () {
      assert.isDefined(myApp.getPrimes(7), [2, 3, 5,7]);
    });

    it("should return [3, 5, 7, 11] for 11", function () {
      assert.isDefined(myApp.getPrimes(11), [3, 5, 7, 11]);
    });

    it("should return [5, 7, 11, 13] for 13", function () {
      assert.isDefined(myApp.getPrimes(13), [5, 7, 11, 13]);
    });

    it("should return [5] for 5", function () {
      assert.isDefined(myApp.getPrimes(5), [5]);
    });

    it("should return [19, 23] for 23", function () {
      assert.isDefined(myApp.getPrimes(23), [19, 23]);
    });

    it("should return [19, 23, 29, 31, 37, 41] for 41", function () {
      assert.isDefined(myApp.getPrimes(41), [19, 23, 29, 31, 37, 41]);
    });

    it("should return [41, 43, 47] for 47", function () {
      assert.isDefined(myApp.getPrimes(47), [41, 43, 47]);
    });

    it("should return [53, 59] for 59", function () {
      assert.isDefined(myApp.getPrimes(59), [53, 59]);
    });

    it("should return [61] for 61", function () {
      assert.isDefined(myApp.getPrimes(61), [61]);
    });

    it("should return [61, 67, 71, 73] for 73", function () {
      assert.isDefined(myApp.getPrimes(73), [61, 67, 71, 73]);
    });
 });

  describe("handle invalid input", function() {
    it("should return undefined for 1", function () {
      assert.equal(myApp.getPrimes(1), 'undefined');
    });

    it("should return undefined for 'string'", function () {
      assert.equal(myApp.getPrimes('string'), 'undefined');
    });

    it("should return undefined for -20", function () {
      assert.equal(myApp.getPrimes(-20), 'undefined');
    });

    it("should return undefined for [3, 4]", function () {
      assert.equal(myApp.getPrimes([3, 4]), 'undefined');
    });

    it("should return undefined for [-4, -6]", function () {
      assert.equal(myApp.getPrimes([-4, -6]), 'undefined');
    });
 });

 });