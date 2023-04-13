const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let arrayF = array.filter((x) => {
        if (x !== -1) {
          return x;
        }
      }).sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      array[i] = arrayF.shift();
    }
  }
  return array;
}

module.exports = {
  sortByHeight
};
