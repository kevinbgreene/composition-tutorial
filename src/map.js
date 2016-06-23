/* jshint esversion: 6 */

/**
 * @name map
 * @param {Function} fn - The function to apply to the array
 * @param {Array} xs - The array to apply the mapping function to
 * @returns {Array} A new array transfomred by the mapping function
 */
const map = curry((fn, xs) => xs.map(fn));
