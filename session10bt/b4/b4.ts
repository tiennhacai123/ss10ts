class Vehicle1{
    public name1:string;
    protected year1:number;
    private company1:string;
    readonly id1:number;
    constructor(name:string,year:number,company:string,id:number) {
        this.name1=name
        this.year1=year;
        this.company1=company
        this.id1=id;
    }
    get getCompany():string{
        return this.company1
    }
    printInfor(){
        console.log(this.name1,this.year1,this.company1,this.id1);
    }
}
let Vehicle3 = new Vehicle1("mecs",2020,'mecsedes',1);
Vehicle3.printInfor();