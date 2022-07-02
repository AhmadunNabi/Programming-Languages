// get = binds an object property to a function when that property is accessed
// set = binds an object property to a function when that property is assigned a value
class Car {
    constructor(power) {
        this._power = power;    // _ is common naming convention if there is getter and setter _ means it is a protected property
        this._gas = 25;
    }
    get power() {            // Property name and the getter can't have the same name
        return (`${this._power}hp`);
    }
    get gas() {
        return (`${this._gas}L (${this._gas / 50 * 100}%)`)
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        }
        else if (value < 0) {
            value = 0
        }
        this._gas = value;

    }
}
let car1 = new Car(400);

// By associating a protected property with only a getter means one can't change the value of it.
car1.power = 100000;  // you can set different value to car1._power, but it is not recommended.

car1.gas = 100;
console.log(car1.power);
console.log(car1.gas);