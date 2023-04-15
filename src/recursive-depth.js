const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // throw new NotImplementedError('Not implemented');
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  // calculateDepth(arr, level){
  //   if ( !level ){
  //     level = 0;
  //   }
  //   if ( Array.isArray(arr) ) {
  //     level += 1;
  //     let p = level;
  //     for(let i=0; i<arr.length; i++){
  //       let c = arr[i];
  //       let subLevel = calculateDepth(c, level);
  //       p = Math.max( p, subLevel);
  //     }
  //     return p;
  //   }  else {
  //     return level;
  //   }
  // }
}

module.exports = {
  DepthCalculator
};
