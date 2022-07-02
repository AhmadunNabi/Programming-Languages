// synchronous code = In an ordered sequence.
//                    step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometimes later)

console.log("START");
// console.log("This step is synchronous");
setTimeout(() => console.log("This is asynchronous"), 5000)
console.log("END");