/* jshint esversion: 6 */

/**
 * @name join
 * @param {String} separator - Character to separate elements in array
 * @param {String[]} xs - Array of strings to join
 * @returns {String} The joined string
 */
const join = curry((separator, xs) => xs.join(separator));
