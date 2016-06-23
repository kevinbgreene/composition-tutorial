/* jshint esversion: 6 */

/**
 * @name titleCase
 * @param {String} str - A string to transform to title case
 * @returns {String} The transformed string
 */
const titleCase = compose(join(' '), map(capitalize), words);
