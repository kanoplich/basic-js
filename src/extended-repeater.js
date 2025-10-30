const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';
  const obj = {
    separator: '+',
    additionSeparator: '|',
    ...options,
  };

  if ('repeatTimes' in obj) {
    for (let i = 0; i < obj.repeatTimes; i++) {
      result += str;
      if ('additionRepeatTimes' in obj) {
        for (let j = 0; j < obj.additionRepeatTimes; j++) {
          result += obj.addition;
          if (j + 1 !== obj.additionRepeatTimes) {
            result += obj.additionSeparator;
          }
        }
      } else if ('addition' in obj) {
        result += obj.addition;
      }
      if (i + 1 !== obj.repeatTimes) {
        result += obj.separator;
      }
    }
  } else {
    result += str;
    if ('additionRepeatTimes' in obj) {
      for (let j = 0; j < obj.additionRepeatTimes; j++) {
        result += obj.addition;
        if (j + 1 !== obj.additionRepeatTimes) {
          result += obj.additionSeparator;
        }
      }
    } else if ('addition' in obj) {
      result += obj.addition;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
