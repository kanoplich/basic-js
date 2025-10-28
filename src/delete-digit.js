const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const strNumber = n.toString();

  for (let i = 0; i < strNumber.length; i++) {
    let str = '';
    for (let j = 0; j < strNumber.length; j++) {
      if (i !== j) {
        str += strNumber[j];
      }
    }
    arr.push(+str);
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
