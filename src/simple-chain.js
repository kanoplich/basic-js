const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  temp: [],
  getLength() {
    return this.temp.length;
  },
  addLink(value) {
    this.temp.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.temp.length ||
      !Number.isInteger(position)
    ) {
      this.temp = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.temp.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.temp.reverse();
    return this;
  },
  finishChain() {
    let result = this.temp.join('~~');
    this.temp = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
