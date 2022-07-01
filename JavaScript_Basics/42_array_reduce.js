// array.reduce() = reduces an array to a single value

let prices = [2, 45, 23, 4, 5, 30];

function checkOut(total, element) {
    return total + element;

}
let total = prices.reduce(checkOut);
console.log(`The total is: $${total}`);