"use strict";
class Department {
    constructor(id, name, employee) {
        this.id2 = id;
        this.name2 = name;
        this.employee = employee;
    }
    descibe() {
        console.log(this.id2);
        console.log(this.name2);
    }
}
let employee = ["tien", "hiep", 'vy'];
let department = new Department(1, "abc", employee);
department.descibe();
