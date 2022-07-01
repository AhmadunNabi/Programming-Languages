// array.forEach() = executes a provided callback function once for each array element.
let students = ["habul", "babul", "cabul"];

students.forEach(capitalize);
function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}
students.forEach(capitalize);
students.forEach(print);