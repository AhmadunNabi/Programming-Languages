let userName = "   Ahmadun Nabi   ";
let phoneNumber = "017-12-932607";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName);
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLocaleLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "/"); // It is functional when you run the code through html page.
console.log(phoneNumber);
