const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let season = date.getMonth();

  return season <= 1 ? 'winter' :
         season <= 4 ? 'spring' :
         season <= 7 ? 'summer' : 
         season <= 10 ? 'autumn' : 'winter';
}

module.exports = {
  getSeason
};
