const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const [
    winter,
    spring,
    summer,
    autumn,
] = [
    new Date(2019, 11, 22, 23, 45, 11, 500),
    new Date(2018, 4, 17, 11, 27, 4, 321),
    new Date(2017, 6, 11, 23, 45, 11, 500),
    new Date(1994, 8, 26, 3, 0, 11, 500),
];

function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (Object.getOwnPropertyNames(date).length > 0 || !date.getTime) {
        throw new Error('Invalid date!');
    }
    const month = date.getMonth();
    if (month < 2 || month === 11) {
        return 'winter';
    }
    if (month < 5) {
        return 'spring';
    }
    if (month < 8) {
        return 'summer';
    }
    if (month < 11) {
        return 'autumn';
    }
}

module.exports = {
    getSeason
};
