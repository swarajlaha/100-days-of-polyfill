/**
 * Polyfill - Function.prototype.call()
 * The call() method calls a function with a given this value and arguments provided individually.
 * The call() allows for a function/method belonging to one object to be assigned and called for a different object.call() provides a new value of this to the function/method.
 * With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
 * The below user defined function is a polyfill for the .call() function, which is predefined in the prototype of Function object.
 * myCall() - Changes the pointing of 'this'
 *          - Whatever args we pass to .myCall() should in turn be passed to the original method which it points to and,
 *          - Should not cause side effects(doesn't modify) to the originak objects and functions
 */

function showWelcomeMessage(message) {
  console.log(message, this.user);
}

const obj = {
  user: "Swaraj Srj",
};

// Function.prototype.call()
showWelcomeMessage.call(obj, "Welcome "); // O/p: 'Welcome  Swaraj Laha'

// Implementing .myCall()
Function.prototype.myCall = function (myThis) {
  let uniqueId = "00" + Math.random();
  while (myThis.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }

  myThis[uniqueId] = this;

  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  
  let result = eval("myThis[uniqueId](" + args + ")");
  delete myThis[uniqueId];
  return result;
};

showWelcomeMessage.myCall(obj, "Hello "); // O/p: 'Hello  Swaraj Srj'
