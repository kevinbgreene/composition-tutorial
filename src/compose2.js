/* jshint esversion: 6 */

/**
 * @name compose2
 * @param {Function} second - The second function to call
 * @param {Function} first - The first function to call
 * @returns {*} The result of the second function
 */
function compose2(second, first) {
  return function composition(arg) {
    return second(first(arg));
  };
}
