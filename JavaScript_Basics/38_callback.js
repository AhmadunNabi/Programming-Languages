// callback = a function passed as an argument to another function
/*
    Ensures that a function is not going to run before a task is completed.
    Helps us to develop asynchronous code.
    (When one function has to wait for another function) that helps us avoid errors and potential problems.
    Ex: Wait for a file to load 
*/
function displayConsole(output) {
    console.log(output);
}

// Display function to DOM
function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}

function sum(x, y, callBack) {
    let result = x + y;
    callBack(result);
}

sum(4, 23, displayConsole);
sum(4, 66, displayDOM);