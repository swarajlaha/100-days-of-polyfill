/**
 * Polyfill - Array.prototype.map()
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * The below user defined function is a polyfill for the .map() function, which is predefined in the prototype of Array object.
 * myMap() - Takes a callback as it's argument and returns a new array, whose each element would be travered and the callback function implemented on it.
 */

const arr = [1, 2, 3];

Array.prototype.myMap = function(callback) {

  let resArr = [];

  for(let i=0; i<this.length; i++) {
    const eachEle = callback(this[i]);
    resArr.push(eachEle);
  }

  return resArr;
};

arr.myMap(ele => ele);
// arr.myMap(ele => ele + 1);