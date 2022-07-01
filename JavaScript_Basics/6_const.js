// Const = a variable that can't be changed.
const PI = 3.1416;
let radious;
let circumference;

radious = window.prompt("Enter the radious of a circle");
radious = Number(radious);
// pi = 43.54; is not possible
circumference = 2 * PI * radious;
console.log("The circumference is", circumference);
