// ternary operator = shortcut for an 'if/else statement'
//                    Takes 3 operands
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
// condition ? expreIfTrue : exprIfFalse

function checkAge(age) {
    return age >= 18 ? true : false;
}

let adult = checkAge(21);
console.log(adult);

function checkWinner(win) {
    win ? console.log('YOU WIN!') : console.log("YOU LOSE!")
}
checkWinner(false);