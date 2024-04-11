class Circle{
    private radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    getRadius():number{
        return this.radius;
    }
    setRadius(radius:number):void{
        this.radius=radius;
    }
    getArea():number{
        return Math.PI*this.radius*this.radius;
    }
    getCircumference():number{
        return 2*Math.PI*this.radius;
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



