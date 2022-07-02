// error = object with a description of something went wrong
//         Can't open a file
//         Lose connection
//         User types incorrect input
//         TypeError

// Add dengerous code in try block
try {
    let x = window.prompt("Enter a #");
    x = Number(x);
    // console.log(`${x}`);
    if (isNaN(x)) throw "That wasn't a number";
    if (x == "") throw "That was empty!!";
    console.log(`${x} is a number`);
}
catch (error) {
    console.log(error);
}

// Finally will always execute
finally {
    console.log("This always executes");
}
console.log("Hello!!!");