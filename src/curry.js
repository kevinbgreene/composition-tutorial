/* jshint esversion: 6 */

/**
 * @name curry
 * @param {Function} fn - A function to curry
 * @returns {Function} A new function that is a curried version of fn
 */
function curry(fn, ...args) {

  // How many arguments do we expect to receive?
  const arity = fn.length;

  function curried(...args2) {

    const locals = args.concat(args2);

    // If we have all the arguments, apply the function and return result
    if (locals.length >= arity) {
      return fn(...locals);

    // If we don't have all the arguments,
    // return a new function that awaits remaining arguments
    } else {
      return curry(fn, ...locals);
    }
  }

  // If we have all the arguments apply the function,
  // else return a function to receive more arguments.
  return ((args.length >= arity) ? curried() : curried);
}
