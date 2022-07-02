class Car {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`\nYou drive the ${this.model}`);
    }
}

const car1 = new Car("Accord", 2022, "Black");
const car2 = new Car("Civic", 2022, "Deep gray");
const car3 = new Car("Volvo", 2022, "White");
const car4 = new Car("Ferarri", 1965, "Green");

const cars = [car1, car2, car3, car4];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

// cars[0].drive();

function startRace(cars) {
    for (const car of cars) {
        car.drive();
    }
}

startRace(cars);