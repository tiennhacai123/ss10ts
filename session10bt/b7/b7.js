"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
let circle = new Circle(5);
console.log(circle.getRadius());
console.log(circle.getCircumference());
console.log(circle.getArea());
circle.setRadius(7);
console.log(circle.getRadius());
console.log(circle.getCircumference());
console.log(circle.getArea());
