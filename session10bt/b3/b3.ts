class Employee{
    public name:string;
    protected company:string;
    private phone:number;
    constructor(name:string,company:string,phone:number){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    prinInfo(){
        console.log(this.name,this.company,this.getPhone);
    }
    get getPhone():number{
        return this.phone
    }
}
let em1= new Employee("tien","abc",1231);
em1.prinInfo();