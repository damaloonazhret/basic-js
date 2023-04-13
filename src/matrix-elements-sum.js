const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;
  arr.map((elG, index) => {
    elG.map((el, i) => {
      if (el == 0) {
        if (index < arr.length - 1 && index !== 0) {
          sum -= arr[index + 1][i];
        }
      }
      sum += el;
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
