class Car {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Accord", 2022, "Black");
const car2 = new Car("Civic", 2022, "Deep gray");
const car3 = new Car("Volvo", 2022, "White");

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, newColor) {
    car.color = newColor;
}
changeColor(car1, "Deep blue");
displayInfo(car1);



