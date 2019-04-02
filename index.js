import isFunction from 'lodash/isFunction';
import get from 'lodash/get';

export const checkAndRun = (func, ...args) => isFunction(func) && func(...args);
export const checkAndRunLog = (func, ...args) =>
  isFunction(func)
    ? func(...args)
    : console.log(`Argument ${func} is not a function`);
