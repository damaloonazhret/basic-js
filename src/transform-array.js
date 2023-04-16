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
function transform(data) {
  // throw new NotImplementedError('Not implemented');
  if(!Array.isArray(data)){
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }
  let arr = data.flatMap((v, i, a) => {
    if (a[i] === "--double-next" && a[i+1] !== undefined) return [a[i+1]];
    if (a[i + 1] === "--discard-prev") return [];
    if (a[i - 1] === "--discard-next") return [];
    if (a[i+1] === "--double-prev") return [v,v];
    if (v.toString().startsWith('--d')) return [];
    return v;
  });
  return arr;
}

module.exports = {
  transform
};
