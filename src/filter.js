/* jshint esversion: 6 */

/**
 * @name filter
 * @param {Function} predicate - The function used to filter array
 * @param {Array} xs - The array to filter
 * @returns {Array} A new array with filter applied
 */
const filter = curry((predicate, xs) => xs.filter(predicate));
