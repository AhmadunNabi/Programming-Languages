// nested functions = functions inside other functions. Other functions have access to inner function. Inner functions are "hidden" from outside the outer function. used in clousers.

let userName = "Ahmadun Nabi"
let userInbox = 0;

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }

}


login();
// displayUserInbox();
// displayUserName();
// Without login you can't access the displayUserInbox() and displayUserName()