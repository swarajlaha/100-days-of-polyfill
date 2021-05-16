/**
 * Polyfill - Array.prototype.reduce()
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * The below user defined function is a polyfill for the .reduce() function, which is predefined in the prototype of Array object.
 * myReduce() - Takes a callback as it's argument and returns a new element, whose each element would be traversed and the callback function implemented on it. The reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
 */

const arr = [1, 2, 3];
const strArr = ['S', 'r', 'j'];

Array.prototype.myReduce = function(callback, accumulator = 0) {
  let res = accumulator;
  this.forEach(ele => {
    res = callback(res, ele)
  });
  return res;
};

arr.myReduce((accumulator, ele) => accumulator + ele, 2); // O/p: 8
strArr.myReduce((accumulator,ele) => accumulator + ele, 'Hello '); // Hello Srj
