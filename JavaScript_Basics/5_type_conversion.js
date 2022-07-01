// TypeConversion = change the datatype of a value to another
//                  (strings, numbers, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;
console.log("You are", age, "years old.");

let x;
let y;
let z;

x = Number("3.14");
y = String(3.15);
z = Boolean();

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
