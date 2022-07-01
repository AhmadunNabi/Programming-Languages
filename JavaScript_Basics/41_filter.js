// array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];

function checkAge(element) {
    return element >= 18;
}

let adults = ages.filter(checkAge);
console.log(adults);

function print(element) {
    console.log(element);
}

adults.forEach(print);