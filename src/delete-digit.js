const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  n = '' + n;
  let arr = [];
  let str = '';

  for (let i = 0; i < n.length; i++) {
    str = ''
    for (let j = 0; j < n.length; j++) {
      if(i !== j) {
        str = str + n[j];
      }
    }
    arr.push(+str);
  }

  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
