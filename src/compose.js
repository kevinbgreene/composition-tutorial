/* jshint esversion: 6 */

/**
 * @name compose
 * @param {...Function} fns - The functions to compose
 * @returns {Function} A new function that is the composition of fns
 */
function compose(...fns) {
  return function composition(arg) {
    return fns.reduceRight((acc, next) => {
      return next(acc);
    }, arg);
  };
}
