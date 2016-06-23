/* jshint esversion: 6 */

/**
 * @name words
 * @param {String} str - A string to split into an array of words
 * @returns {String[]} An array of individual words
 */
const words = compose(removeEmpty, split(' '), trim);
