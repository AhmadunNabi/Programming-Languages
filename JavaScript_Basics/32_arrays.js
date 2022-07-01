// array = a variable that can store multiple values

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[2]);

//Update and change the element of array
fruits[0] = "coconut";
console.log(fruits);

// Add an Element
fruits.push("mango");

//remove last element
fruits.pop();

// Add element to the beginning
fruits.unshift('Mango');

// Remove element from the beginning
fruits.shift();

//Length
let length = fruits.length;
console.log(length);

//get an index of an element
let index = fruits.indexOf("banana");
console.log(index);

// If the element is not in array - returns -1
let index_n = fruits.indexOf("Guava")
console.log(index_n);
