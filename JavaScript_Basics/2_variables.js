// A variable is a container for storing data
// A variable behaves as if it was the value that it contains.

// Two steps:
//  1. Declaration (var, let, const)
//  2. Assignment ( = assignment operator)

let age;
console.log(age);

let age1 = 26; // Numeric Data type
let firstName = "Ahmadun"; // String Data type
let student = true; // Boolean Data type

age1 = age1 + 1;
console.log(firstName);
console.log(age1);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age1 + " years old.";
document.getElementById("p3").innerHTML = "Enrolled " + student;
