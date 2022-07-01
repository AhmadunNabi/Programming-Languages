// constructor = a special method of a class, accepts arguments and assigns properties
class student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("Rifat", 26, 3.1);
const student2 = new student("Ahmadun", 26, 2.8);
const student3 = new student("Sandy", 30, 3.9);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();