class Song{
    public readonly id4:number;
    private name4:string;
    private length:string;
    constructor(id:number,name:string,length:string){
        this.id4=id;
        this.name4=name;
        this.length=length;
    }
    getName():string{
        return this.name4;
    }
    getLength():string{
        return this.length;
    }
    setName(name:string):void{
        this.name4=name;
    }
    setLength(length:string):void{
        this.length=length;
    }
}
let song = new Song(10,"song1",'180s');
console.log(song.getLength());
console.log(song.getName());
song.setName("song2");
song.setLength('300s')
console.log(song.getName());
console.log(song.getLength());


