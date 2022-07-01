// arrow function = compact alternative to a traditional function
//                  =>

/* 
const greeting = function (userName) {
    console.log(`Hello ${userName}`);
} 
*/
const greeting = (userName) => console.log(`Hello ${userName}`);
greeting("Rifat");

/* 
const percent = function (x, y) {
    return x / y * 100;
} 
*/
const percent = (x, y) => x / y * 100;
console.log(`${percent(75, 100)}%`);

let grades = [100, 50, 90, 60, 80, 70];

/* 
grades.sort(descending);
grades.forEach(print);

function descending(x, y) {
    return x - y;
}
function print(element) {
    console.log(element);
} 
*/

grades.sort((x, y) => x - y);
grades.forEach((element) => console.log(element));
