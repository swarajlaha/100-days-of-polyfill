/**
 * Polyfill - Function.prototype.bind()
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
 * The below user defined function is a polyfill for the .bind() function, which is predefined in the prototype of Function object.
 * myBind() - Returns a function.
 */

let name = {
  firstName: "Swaraj",
  lastName: "Laha"
};

let printName = function(job, location, country) {
  console.log(this.firstName + " " + this.lastName, "works as an " + job + " in " + location + ", " + country);
};

// Function.prototype.bind()
let printMyName = printName.bind(name, "Analyst");
printMyName("Hyderabad", "India");  // O/p: 'Swaraj Laha works as an Analyst in Hyderabad, India'

// Ployfill
Function.prototype.myBind = function(...args) {
  let value = this;
  let params = args.slice(1); // Returns all elements of array - args, except the 1st element
  return function (...argsPloyfill) {
    value.apply(args[0], [...params, ...argsPloyfill]);
  }
};

// Function.prototype.myBind()
let printMyNamePolyfill = printName.myBind(name, "Analyst");
printMyNamePolyfill("Hyderabad", "India");  // O/p: 'Swaraj Laha works as an Analyst in Hyderabad, India'