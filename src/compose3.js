/* jshint esversion: 6 */

/**
 * @name compose3
 * @param {Function} third - The third function to call
 * @param {Function} second - The second function to call
 * @param {Function} first - The first function to call
 * @returns {*} The result of the second function
 */
function compose3(third, second, first) {
  return function composition(arg) {
    return third(second(first(arg)));
  };
}
