import fizzbuzz from '../../src/lib/fizzbuzz';
import {expect} from 'chai';

describe('FizzBuzz', () => {
  describe('execute()', () => {
    it('returns the submitted number when it`s not multiple of 3, 5 or 7', () => {
      expect(fizzbuzz(17)).to.equal(17);
    });

    it('returns Fizz when the number is multiple of 3', () => {
      expect(fizzbuzz(3)).to.equal('Fizz');
    });

    it('returns Buzz when the number is multiple of 5', () => {
      expect(fizzbuzz(5)).to.equal('Buzz');
    });

    it('returns Dazz when the number is multiple of 7', () => {
      expect(fizzbuzz(7)).to.equal('Dazz');
    });

    it('returnz FizzBuzz when the number is multiple of 3 and 5', () => {
      expect(fizzbuzz(15)).to.equal('FizzBuzz');
    });

    it('returnz FizzDazz when the number is multiple of 3 and 7', () => {
      expect(fizzbuzz(21)).to.equal('FizzDazz');
    });

    it('returnz FizzBuzzDazz when the number is multiple of 3, 5 and 7', () => {
      expect(fizzbuzz(105)).to.equal('FizzBuzzDazz');
    });

    it('returns an empty string if the number supplied is actually a string', () => {
      expect(fizzbuzz('string')).to.equal('');
    });

    it('considers 0 as multiple of every number and returns FizzBuzzDazz', () => {
      expect(fizzbuzz(0)).to.equal('FizzBuzzDazz');
    });
  });
});
