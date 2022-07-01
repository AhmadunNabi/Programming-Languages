// function expression = function without a name (anonymous function)
// avoid polluting the global scope with names write it, then forget about it.

function sayHello() {
    console.log("Hello");
}

sayHello();

const greeting = function () {
    console.log("Hello");
}

greeting();
let count = 0
function decreaseCount() {
    count -= 1;
    document.getElementById('myLabel').innerText = count;
}
function increaseCount() {
    count += 1;
    document.getElementById('myLabel').innerText = count;
}
