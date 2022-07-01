// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function()

for (let i = 1; i <= 3; i++) {
    // console.log(i);
}
console.log(i);  // Uncaught referenceError: i is not defined. So let limited to the block scope, it doesn't exist outside {}

for (var i = 1; i <= 3; i++) {
    // console.log(i);
}
console.log(i); // results 4

function doSomething() {
    for (var i = 1; i <= 3; i++) {
        // console.log(i);
    }
    console.log(i);
}

doSomething();
console.log(i); //Uncaught referance error!

// global variable = is declared outside any function 
// (if global, var will change the browser's window properties.)
let name = "Dude";
var name1 = "Hello";