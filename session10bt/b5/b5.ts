class Department{
    public readonly id2:number;
    private name2:string;
    private employee:string[];
    constructor(id:number,name:string,employee:string[]) {
        this.id2=id;
        this.name2=name;
        this.employee=employee;
    }
    descibe():void{
        console.log(this.id2);
        console.log(this.name2);        
    }
}
let employee=["tien","hiep",'vy'];
let department = new Department(1,"abc",employee); 
department.descibe();