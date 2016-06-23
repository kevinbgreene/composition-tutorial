/* jshint esversion: 6 */

/**
 * @name log
 */
const log = (obj) => (console.log(obj), obj);

/**
 * @name not
 * @param {Function} fn - Function to negate
 * @param {*} arg - Argument for the function to negate
 * @returns {Boolean} Negation of the result of the function
 */
const not = curry((fn, arg) => !(!!fn(arg)));

/**
 * @name isEmpty
 * @param {String|Array} obj - String or array to test
 * @returns {Boolean} Is the length greater than 0?
 */
const isEmpty = (obj) => (obj.length === 0);

/**
 * @name notEmpty
 * @param {String|Array} str - String or array to test
 * @returns {Boolean} Is the length greater than 0?
 */
const notEmpty = not(isEmpty);

/**
 * Returns true/false is the object a number
 *
 * @name isNumber
 * @param {*} obj
 * @returns {Boolean}
 */
const isNumber = (obj) => (typeof obj === 'number');

/**
 * Returns a boolean telling us if a given value is a boolean
 *
 * @name isBoolean
 * @param {*} obj
 * @returns {Boolean}
 */
const isBoolean = (obj) => (typeof obj === 'boolean');

/**
 * Returns true/false indicating if object is a String
 *
 * @name isString
 * @param {*} obj
 * @returns {Boolean}
 */
const isString = (obj) => (typeof obj === 'string');

/**
 * Returns true/false is the value a primitive value
 *
 * @name isPrimitive
 * @param {*} obj
 * @returns {Boolean}
 */
const isPrimitive = (obj) => (
  isNumber(obj) ||
  isBoolean(obj) ||
  isString(obj)
);

/**
 * Returns true/false is the object null
 *
 * @name isNull
 * @param {*} obj
 * @returns {Boolean}
 */
const isNull = (obj) => (obj === null);

/**
 * Returns true/false indicating if object is undefined
 *
 * @name isUndefined
 * @param {*} obj
 * @returns {Boolean}
 */
const isUndefined = (obj) => (typeof obj === 'undefined');

/**
 * Returns true/false is the object null or undefined
 *
 * @name isNothing
 * @param {*} obj
 * @returns {Boolean}
 */
const isNothing = (obj) => (isUndefined(obj) || isNull(obj));
