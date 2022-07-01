// this = reference to a particular object
//        the object depends on the immediate context

const car1 = {
    model: "Mustang",
    color: "Blue",           // properties
    year: "2020",

    drive: function () {
        console.log(`You drive the ${this.model}`);
    },                                 // Methods
    brake: function () {
        console.log("You stop on the brakes.");
    }
}

const car2 = {
    model: "Accord",
    color: "black",           // properties
    year: "2021",

    drive: function () {
        console.log("You drive", this.model);
    },                                 // Methods
    brake: function () {
        console.log("You stop on the brakes.");
    }
}

car1.drive();
car2.drive();

// This is just a referance to the object we are working with.
console.log(this); // This refers to the window object. we can change the propertis using this
