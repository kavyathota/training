class greeter{
    private _PrivateVar="ooo im private";
    public Name :string;
    public Contact :string[];
    public Place:string;
    public Extras:string[];
    constructor(pName:string="",pContact:string[],pPlace?:string,...pExtras1:string[])
    {
        this.Name=pName;
        this.Contact=pContact;
        this.Place=pPlace;
        this.Extras=pExtras1;
    }


}
var obj1= new greeter("roshini",["hyatt gachibowli"]);
var obj2= new greeter("roshini1",["hyatt gachibowli"],"9009009000");
var obj3= new greeter("roshini2",["hyatt gachibowli"],"9009009000","extrassss");
var obj4= new greeter("roshini3",[],"9009009000");
var obj5= new greeter("roshini4",null,"9009009000");
console.log(obj1.Name);
console.log(obj1.Contact);
console.log(obj1.Place);
console.log(obj1.Extras);