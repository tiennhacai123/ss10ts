"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    get getName() {
        return this.name;
    }
    get getYear() {
        return this.year;
    }
    get getCompany() {
        return this.company;
    }
}
let car1 = new Vehicle("mec", 2023, "mecxedes");
let car2 = new Vehicle("lambo", 2000, "lamboghini");
console.log(car1.getName);
console.log(car1.getYear);
console.log(car1.getCompany);
console.log(car2.getName);
console.log(car2.getYear);
console.log(car2.getCompany);
