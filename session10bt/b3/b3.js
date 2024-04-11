"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    prinInfo() {
        console.log(this.name, this.company, this.getPhone);
    }
    get getPhone() {
        return this.phone;
    }
}
let em1 = new Employee("tien", "abc", 1231);
em1.prinInfo();
