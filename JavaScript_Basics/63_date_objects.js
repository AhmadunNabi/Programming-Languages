// The date object is used to work with dates and times

// let date = new Date();
// let date = new Date(0);   referance date
// let date = new Date(2022, 7, 20, 2, 2, 3);
// Another option 
// let date = new Date("February 1, 2023 00:00:00");
let date = new Date();

let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth() + 1;
let seconds = date.getSeconds();

// We can set the values to date
date.setDate(15);
date.setFullYear(2047);
date.setMonth(8);
date.setMinutes(45);

date = date.toLocaleString();

document.getElementById("myLabel").innerHTML = `${date} <br> Year: ${year} <br> Day: ${day} <br> Month: ${month} <br> Second: ${seconds}`;