"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(3, 4);
console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
rectangle.setWidth(5);
rectangle.setHeight(6);
console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
