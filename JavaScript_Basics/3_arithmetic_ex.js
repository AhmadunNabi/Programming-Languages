/*
    Arithmetic expression is a combination of operands (values, variables.. etc)
    & operators (+, - , *, /, %)
*/

let students = 20;
students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
let extraStudents = students % 6;
console.log(students);
console.log(extraStudents);

// Augmented assignment operator
students += 2;
console.log(students);

// Operator precedence
let result = 1 + 2 * (3 + 4);
console.log(result);
