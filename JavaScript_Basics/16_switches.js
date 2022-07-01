// switch = statement that examines a value for a match against many case clauses. More efficient that many "else if" statements
let grade = 'A'

switch (grade) {
  case 'A':
    console.log('You did great!')
    break
  case 'B':
    console.log('You did good!')
    break
  case 'C':
    console.log('You did okay!')
    break
  case 'D':
    console.log('You passed ... barely!')
    break
  case 'F':
    console.log('You failed!')
    break
  default:
    console.log(grade, 'is not a letter grade!')
}

let marks = 95
switch (true) {
  case marks >= 90:
    console.log('You did great!')
    break
  case marks >= 80:
    console.log('You did good!')
    break
  case marks >= 70:
    console.log('You did okay!')
    break
  case marks >= 60:
    console.log('You passed ... barely!')
    break
  case marks < 60:
    console.log('You failed!')
    break
  default:
    console.log(marks, 'is not a number!')
}
