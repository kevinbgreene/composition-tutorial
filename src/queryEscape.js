/* jshint esversion: 6 */

/**
 * @name queryEscape
 * @param {String} str - The string to escape
 * @returns {String} The escaped string
 */
const queryEscape = compose(join('+'), split('%20'), encodeURIComponent);
