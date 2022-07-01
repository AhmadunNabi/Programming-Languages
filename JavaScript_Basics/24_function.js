// Function = Define code once, and use it many times.
// To perform some code, call the function name.

startProgram();

function startProgram() {
    let userName = "Dude"
    let age = 26;
    happyBirthday(userName, age);
}

function happyBirthday(name, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", name);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old!");
}

