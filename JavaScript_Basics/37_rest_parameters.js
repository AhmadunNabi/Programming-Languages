// rest parameters = represents an indefinite number of parameters 
//                   (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(sum(a, b));
console.log(sum(a, b, c));
// Here we will need rest parameter;

/* 
function sum(a, b) {
    return a + b;
}
function sum(a, c, c) {
    return a + b + c;
} 
*/
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(a, b, c, d, e));
console.log(sum(a, b, c, d));