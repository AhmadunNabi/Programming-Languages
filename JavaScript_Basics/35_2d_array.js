// 2D array = An array of arrays
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];
// console.log(groceryList);

for (let list of groceryList) {
    // console.log(list);
    for (let food of list) {
        console.log(food);
    }
}

groceryList[0][0] = "mangoes";
console.log(groceryList);