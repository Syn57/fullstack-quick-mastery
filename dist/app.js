"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Ford", "Mustang", 2022);
const a = new A();
console.log(car1.displayInfo());
console.log(car2.displayInfo());
console.log(car3.displayInfo());
