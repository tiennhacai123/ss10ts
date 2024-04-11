"use strict";
class Vehicle1 {
    constructor(name, year, company, id) {
        this.name1 = name;
        this.year1 = year;
        this.company1 = company;
        this.id1 = id;
    }
    get getCompany() {
        return this.company1;
    }
    printInfor() {
        console.log(this.name1, this.year1, this.company1, this.id1);
    }
}
let Vehicle3 = new Vehicle1("mecs", 2020, 'mecsedes', 1);
Vehicle3.printInfor();
