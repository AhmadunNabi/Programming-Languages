/* 
let x = Math.floor(Math.random() * 10) + 1; // Random Number between 0 and 1
let y = Math.floor(Math.random() * 10) + 1;
let z = Math.floor(Math.random() * 10) + 1;

console.log(x);
console.log(y);
console.log(z);
 
*/
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 10) + 1;
  y = Math.floor(Math.random() * 10) + 1;
  z = Math.floor(Math.random() * 10) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
};
