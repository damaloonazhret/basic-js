const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  console.log(typeof arr);
  if (typeof arr !== "object" || Boolean(arr) === false) {
    return false;
  } else {
    const secret = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        secret.push(arr[i].trim()[0].toUpperCase());
      } else {
        continue;
      }
      console.log(typeof arr[i]);
    }
    return secret.sort().join("");
  }
}

module.exports = {
  createDreamTeam
};
