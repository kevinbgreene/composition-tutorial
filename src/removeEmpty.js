/* jshint esversion: 6 */

/**
 * @name removeEmpty
 * @param {Array} xs - List to filter
 * @returns {Array} New array with empty elements removed
 */
const removeEmpty = (xs) => xs.filter(notEmpty);
