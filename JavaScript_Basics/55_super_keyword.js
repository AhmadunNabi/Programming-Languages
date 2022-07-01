// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class.

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Crow extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabit", 1, 40);
const fish = new Fish("Fist", 2, 70);
const crow = new Crow("Crow", 3, 55);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

