const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    let item = domains[i].split('.').reverse();
    let dns = '';
    for (let j = 0; j < item.length; j++) {
      dns += `.${item[j]}`;
      if (dns in result) {
        result[dns] += 1;
      } else {
        result[dns] = 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats,
};
