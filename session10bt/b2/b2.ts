class Student{
    id:number;
    age:number;
    email:string;
    constructor(id:number,age:number,email:string){
        this.id=id,
        this.age=age;
        this.email=email;
    }
}
let studentArr:Student[]=[];
studentArr.push(new Student(1,10,"abc@gmai.com"));
studentArr.push(new Student(2,20,"abc2@gmai.com"));
for (const key of studentArr) {
    console.log(key);
}

