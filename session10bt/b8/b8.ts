class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWidth(): number {
        return this.width;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number): void {
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
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