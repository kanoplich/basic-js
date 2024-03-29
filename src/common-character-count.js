const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let count = 0;
  let index = [];

  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++) {
      if(!index.includes(j)) {
        if(s1[i] === s2[j]) {
          count++;
          index.push(j);
          break;
        }
      }
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
