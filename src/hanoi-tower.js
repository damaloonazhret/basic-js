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
  const turns = Math.pow(2, disk) - 1;
  const second = turn / 3600;
  const seconds = Math.floor(turns / second);
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
}

module.exports = {
  calculateHanoi
};
