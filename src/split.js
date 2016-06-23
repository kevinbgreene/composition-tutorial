/* jshint esversion: 6 */

/**
 * @name split
 * @param {String} separator - Character to split string on
 * @param {String} str - The string to split
 * @returns {String[]} An array of strings
 */
const split = curry((separator, str) => str.split(separator));
