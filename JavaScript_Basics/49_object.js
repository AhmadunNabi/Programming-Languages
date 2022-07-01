// Object = A group of properties and methods.
//          properties = what an object has.
//          methods = what an object can do
//          use . to access properties/methods.

const car = {
    model: "Mustang",
    color: "black",           // properties
    year: "2020",

    drive: function () {
        console.log("You drive the car");
    },                                 // Methods
    brake: function () {
        console.log("You stop on the brakes.");
    }
}

const car2 = {
    model: "accord",
    color: "black",           // properties
    year: "2021",

    drive: function () {
        console.log("You drive the car");
    },                                 // Methods
    brake: function () {
        console.log("You stop on the brakes.");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

// methods
car.brake();
car2.drive();