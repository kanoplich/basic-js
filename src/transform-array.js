const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let copyArr = arr.slice();
  let transformArr = [];

  for(let i = 0; i < copyArr.length; i++) {
    if(copyArr[i] === '--discard-next' && i !== arr.length - 1) {
      i++;
    } else if(copyArr[i] === '--discard-prev' && i !== 0 && copyArr[i - 2] !== '--discard-next') {
      transformArr.pop();
    } else if(copyArr[i] === '--double-next' && i !== arr.length - 1) {
      transformArr.push(copyArr[i + 1]);
    } else if(copyArr[i] === '--double-prev' && i !== 0 && copyArr[i - 2] !== '--discard-next') {
      transformArr.push(copyArr[i - 1]);
    } else if (copyArr[i] !== '--discard-prev' && copyArr[i] !== '--double-prev' && copyArr[i] !== '--double-next' && copyArr[i] !== '--discard-next') {
      transformArr.push(copyArr[i]);
    }
  }

  console.log(transformArr);

  return transformArr;
}

module.exports = {
  transform
};
