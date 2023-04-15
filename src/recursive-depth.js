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
  function calculateDepth(arr, level){
    if ( !level ){
      level = 0;
    }
    if ( Array.isArray(arr) ) {
      level += 1;
      var p = level;
      for(var i=0; i<arr.length; i++){
        var c = arr[i];
        var sublevel = calculateDepth(c, level);
        p = Math.max( p, sublevel);
      }
      return p;
    }  else {
      return level;
    }
  }
}

module.exports = {
  DepthCalculator
};
