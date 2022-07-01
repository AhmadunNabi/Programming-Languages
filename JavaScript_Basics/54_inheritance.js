// inheritance = a child class can inherit all the method and properties from another class

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} is swimmin`);
    }
}
class Dove extends Animal {
    name = "fist";
    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const dove = new Dove();

rabbit.eat();
rabbit.alive();
rabbit.sleep();