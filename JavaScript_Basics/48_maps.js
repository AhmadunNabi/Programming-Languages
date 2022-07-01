// Maps = Object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

// To iterate over the pairs of map
store.forEach((value, key) => console.log(`${key} $${value}`));

/* 
store.forEach(function (value, key) {
    console.log(`${key} $${value}`);
}) 
*/

// Get an item from the store
let shoppingCart = 0;
shoppingCart += store.get("t-shirt");
console.log(shoppingCart);

// Add item to the store
store.set("hat", 40);
store.forEach((value, key) => console.log(`${key} $${value}`));

// Delete an item store
store.delete("socks");
store.forEach((value, key) => console.log(`${key} $${value}`));

// Is any item in store
console.log(store.has("sock"));

// Size of map
console.log(store.size);