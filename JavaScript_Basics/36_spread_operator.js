// spread operator (...) = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected. (Unpacks the elements into individual arguments)
// It's like opening a box and taking whatever inside.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);

let userName = "Ahmadun Nabi";
console.log(...userName);

let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ['Bablu', 'Hablu', "Kablu"];
let class2 = ['Dablu', 'Shiblu', 'Mablu'];
// class1.push(class2);
// console.log(class1);

class1.push(...class2);
console.log(class1);
console.log(...class1);
