// to check more than 1 condition concurrently
// && and (both conditions must be true)
// || or (either condition can be true)

let temp = 15
let sunny = true
/* 
if (temp > 0 && temp < 30 $$ sunny) {
  console.log('The weather is good!')
} else {
  console.log('The weather is bad!')
} 
*/

if (temp <= 0 || temp >= 0) {
  console.log('The weather is bad!')
} else {
  console.log('The weather is good!!')
}
