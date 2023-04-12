const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disk, turn) {
  const obj = { turns: 0, seconds: 0 };
  const second = (turn/3548.32258064);
  let count = [];
  toh(disk, 'A', 'B', 'C');
  function toh(n, src, des, aux) {
    if (n >= 1) {
      toh(n - 1, src, aux, des);
      count.push(1)
      toh(n - 1, src, des, aux);
    }
    return;
  }
  obj.turns = count.length;
  obj.seconds = Math.ceil(count.length / second);
  return obj;
}

module.exports = {
  calculateHanoi
};
