/**
 * Polyfill - Array.prototype.filter()
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * The below user defined function is a polyfill for the .filter() function, which is predefined in the prototype of Array object.
 * myFilter() - Takes a callback as it's argument and returns a new array of element(s), whose each element would be traversed and the callback function implemented on it. IF the callback function condition is met, the corresponding element is added to the new array.
 */

const arr = [1, 2, 3];

Array.prototype.myFilter = function (callback) {
  let values = this;
  let resArr = [];

  for (let i = 0; i < values.length; i++) {
    let eachValue = callback(values[i]);
    if (eachValue) {
      resArr.push(values[i]);
    }
  }
  return resArr;
};

arr.myFilter(ele => ele !== 1); // O/p: [2, 3]
