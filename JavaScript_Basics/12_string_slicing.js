// slice() extracts a section of a string and return it as a new string, without modifying the original string.
let fullName = "Ahmadun Nabi";
let firstName;
let lastName;

// lastName = fullName.slice(8);
// console.log(lastName);

// firstName = fullName.slice(0, 7); // doesn't include the last character.
// console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(lastName);
console.log(firstName);
