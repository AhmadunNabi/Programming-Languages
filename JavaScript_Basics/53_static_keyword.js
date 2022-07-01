// static = belongs to the class, not the objects, objects created from the class
//          properties: useful for caches, fixed configuration 
//          methods: useful for utility functions

// Math.round() - is a static mathod
class car {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        car.numberOfCars += 1

    }

    startRace() {
        console.log("3...2....1...GO!")
    }
}

const car1 = new car("Accord");
const car2 = new car("Sonata");
const car3 = new car("outlander");
const car4 = new car("ferrari");


console.log(car1.numberOfCars);   // numberOfCars is not accessible by objects. it results "undefined"
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);


console.log(car.numberOfCars);
