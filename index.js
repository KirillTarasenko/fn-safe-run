var isFunction = require('lodash').isFunction;

var checkAndRun = (func, ...args) => isFunction(func) && func(...args);
var checkAndRunLog = (func, ...args) =>
  isFunction(func)
    ? func(...args)
    : console.log(`Argument ${func} is not a function`);

module.exports = {
  checkAndRun: checkAndRun,
  checkAndRunLog: checkAndRunLog
}