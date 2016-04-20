/**
 * Events that should happen when the according predicate is true.
 *
 * @type {Array}
 */
const EVENTS = [
  ['Fizz', i => i % 3 === 0],
  ['Buzz', i => i % 5 === 0],
  ['Dazz', i => i % 7 === 0],
];

/**
 * Expose default fizzbuzz function.
 *
 * @param {Number} number to be checked for multiplication.
 * @returns {String|Number}
 * @api public
 */
export default (num) => {
  const number = parseInt(num, 10);
  if (isNaN(number)) return '';

  const parts = EVENTS.filter(event=> {
    const [_, predicate] = event;
    return predicate(number);
  });

  return parts.length > 0 ? parts.map(p => p[0]).join('') : number;
}
